import { google } from "googleapis";
import { NextResponse } from "next/server";
import { waitlistSchema, type WaitlistSchema } from "@/lib/validations/waitlist";
import { sendWaitlistConfirmation } from "@/lib/emails/waitlist-confirmation";

export const runtime = "nodejs";

// Uses the same service account as /api/register. Sign-ups go to "Sheet1" of
// GOOGLE_SHEETS_WAITLIST_SPREADSHEET_ID (falls back to GOOGLE_SHEETS_SPREADSHEET_ID).
// The tab and its header row are created automatically if missing.
const HEADERS = [
	"Submitted at",
	"Full name",
	"Email",
	"WhatsApp number",
	"City / State",
	"Current status",
	"Attended B.I.G. 2026",
	"2027 attendance",
	"Consent to updates",
];

function getRequiredEnv(name: string) {
	const value = process.env[name]?.trim();

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}

	return value;
}

function getSpreadsheetId() {
	return (
		process.env.GOOGLE_SHEETS_WAITLIST_SPREADSHEET_ID?.trim() ||
		getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID")
	);
}

function getTabName() {
	return process.env.GOOGLE_SHEETS_WAITLIST_TAB_NAME?.trim() || "Sheet1";
}

// Retries connection-level failures (no HTTP response, e.g. a dropped
// connection). Safe to repeat: the duplicate-email check stops a second row.
async function withRetry<T>(task: () => Promise<T>, attempts = 3): Promise<T> {
	for (let attempt = 1; ; attempt++) {
		try {
			return await task();
		} catch (error) {
			const isNetworkError = !(error as { response?: unknown })?.response;
			if (!isNetworkError || attempt >= attempts) throw error;
			await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
		}
	}
}

function range(cells: string) {
	return `'${getTabName().replace(/'/g, "''")}'!${cells}`;
}

function getSheetsClient() {
	const auth = new google.auth.GoogleAuth({
		credentials: {
			client_email: getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
			private_key: getRequiredEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n"),
		},
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	return google.sheets({ version: "v4", auth });
}

type Sheets = ReturnType<typeof getSheetsClient>;

// Cached per server instance so the setup check runs once, not on every sign-up
let sheetReady = false;

async function ensureWaitlistTab(sheets: Sheets, spreadsheetId: string) {
	if (sheetReady) return;

	const { data } = await sheets.spreadsheets.get({
		spreadsheetId,
		fields: "sheets.properties.title",
	});
	const exists = data.sheets?.some(
		(sheet) => sheet.properties?.title === getTabName(),
	);

	if (!exists) {
		await sheets.spreadsheets.batchUpdate({
			spreadsheetId,
			requestBody: {
				requests: [{ addSheet: { properties: { title: getTabName() } } }],
			},
		});
	}

	const header = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: range("A1:A1"),
	});

	if (!header.data.values?.length) {
		await sheets.spreadsheets.values.update({
			spreadsheetId,
			range: range("A1"),
			valueInputOption: "RAW",
			requestBody: { values: [HEADERS] },
		});
	}

	sheetReady = true;
}

async function isAlreadyOnWaitlist(
	sheets: Sheets,
	spreadsheetId: string,
	email: string,
) {
	const { data } = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: range("C2:C"),
	});

	return (data.values ?? []).some(
		([value]) => String(value).trim().toLowerCase() === email,
	);
}

function validatePayload(body: unknown): WaitlistSchema {
	const result = waitlistSchema.safeParse(body);

	if (!result.success) {
		const error = new Error(
			result.error.issues[0]?.message || "Please complete required fields.",
		);
		error.name = "ValidationError";
		throw error;
	}

	return { ...result.data, email: result.data.email.trim().toLowerCase() };
}

export async function POST(req: Request) {
	try {
		const data = validatePayload(await req.json());

		// Bot filled the hidden field — act like it worked, store nothing
		if (data.website) {
			return NextResponse.json({ success: true });
		}

		const sheets = getSheetsClient();
		const spreadsheetId = getSpreadsheetId();

		const result = await withRetry(async () => {
			await ensureWaitlistTab(sheets, spreadsheetId);

			if (await isAlreadyOnWaitlist(sheets, spreadsheetId, data.email)) {
				return { success: true, alreadyJoined: true };
			}

			await sheets.spreadsheets.values.append({
				spreadsheetId,
				range: range("A:I"),
				// RAW stores input as plain text, so nothing typed is run as a formula
				valueInputOption: "RAW",
				insertDataOption: "INSERT_ROWS",
				requestBody: {
					values: [
						[
							new Date().toISOString(),
							data.fullName,
							data.email,
							data.phone,
							data.city,
							data.attendeeProfile,
							data.attended2026,
							data.attendance2027,
							data.consentToUpdates ? "Yes" : "No",
						],
					],
				},
			});

			return { success: true };
		});

		// Only new sign-ups get the email. The row is already saved, so a
		// failed send is logged rather than shown to the person as an error.
		if (!("alreadyJoined" in result)) {
			try {
				const emailId = await sendWaitlistConfirmation(
					data.email,
					data.fullName,
				);
				console.log("Waitlist confirmation email accepted by Resend:", emailId);
			} catch (emailError) {
				console.error("Waitlist confirmation email failed:", emailError);
			}
		}

		return NextResponse.json(result);
	} catch (error) {
		console.error("Waitlist sign-up failed:", error);

		const isValidation =
			error instanceof Error && error.name === "ValidationError";

		return NextResponse.json(
			{
				success: false,
				error: isValidation
					? (error as Error).message
					: "We couldn't add you to the waitlist right now. Please try again.",
			},
			{ status: isValidation ? 400 : 500 },
		);
	}
}
