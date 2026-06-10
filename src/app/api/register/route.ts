import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type RegistrationPayload = {
	fullName?: unknown;
	email?: unknown;
	phone?: unknown;
	school?: unknown;
};

type RegistrationData = {
	fullName: string;
	email: string;
	phone: string;
	school: string;
};

type ConfirmationEmailResult = {
	emailId: string;
};

function getRequiredEnv(name: string) {
	const value = process.env[name]?.trim();

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}

	return value;
}

function getOptionalEnv(name: string, fallback: string) {
	return process.env[name]?.trim() || fallback;
}

function normalizePrivateKey(privateKey: string) {
	return privateKey.replace(/\\n/g, "\n");
}

function getString(value: unknown) {
	return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function validateRegistrationPayload(body: RegistrationPayload): RegistrationData {
	const fullName = getString(body.fullName);
	const email = getString(body.email).toLowerCase();
	const phone = getString(body.phone);
	const school = getString(body.school);

	if (!fullName || !email || !phone) {
		throw new Error("Full name, email, and phone are required.");
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		throw new Error("A valid email address is required.");
	}

	return {
		fullName,
		email,
		phone,
		school,
	};
}

function getSheetRange() {
	const sheetName = process.env.GOOGLE_SHEETS_TAB_NAME?.trim() || "Sheet1";
	const escapedSheetName = sheetName.replace(/'/g, "''");

	return `'${escapedSheetName}'!A:F`;
}

function getSheetsClient() {
	const auth = new google.auth.GoogleAuth({
		credentials: {
			client_email: getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
			private_key: normalizePrivateKey(getRequiredEnv("GOOGLE_PRIVATE_KEY")),
		},
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	return google.sheets({
		version: "v4",
		auth,
	});
}

async function appendRegistrationToSheet(
	registrationId: string,
	data: RegistrationData,
) {
	const sheets = getSheetsClient();

	await sheets.spreadsheets.values.append({
		spreadsheetId: getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID"),
		range: getSheetRange(),
		valueInputOption: "RAW",
		insertDataOption: "INSERT_ROWS",
		requestBody: {
			values: [
				[
					registrationId,
					data.fullName,
					data.email,
					data.phone,
					data.school,
					new Date().toISOString(),
				],
			],
		},
	});
}

async function sendConfirmationEmail(
	registrationId: string,
	data: RegistrationData,
): Promise<ConfirmationEmailResult> {
	const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));
	const from = getOptionalEnv(
		"RESEND_FROM_EMAIL",
		"B.I.G Conference <onboarding@resend.dev>",
	);
	const escapedFullName = escapeHtml(data.fullName);
	const escapedRegistrationId = escapeHtml(registrationId);

	const result = await resend.emails.send({
		from,
		to: data.email,
		subject: "Registration Confirmed - B.I.G Conference 2026",
		text: `Hello ${data.fullName},

Thank you for registering for B.I.G Conference 2026.

Registration ID: ${registrationId}

Keep this ID safe. More event information will be sent to you soon.

See you at B.I.G Conference 2026!`,
		html: `
			<h2>Hello ${escapedFullName},</h2>

			<p>Thank you for registering for B.I.G Conference 2026.</p>

			<p>
				<strong>Registration ID:</strong>
				${escapedRegistrationId}
			</p>

			<p>
				Keep this ID safe. More event information will be sent to you soon.
			</p>

			<br />

			<p>See you at B.I.G Conference 2026!</p>
		`,
	});

	if (result.error) {
		throw result.error;
	}

	if (!result.data?.id) {
		throw new Error("Resend accepted no email ID for this request.");
	}

	console.log("Confirmation email accepted by Resend:", {
		emailId: result.data.id,
		to: data.email,
		from,
	});

	return {
		emailId: result.data.id,
	};
}

export async function POST(req: Request) {
	try {
		const body = (await req.json()) as RegistrationPayload;
		const data = validateRegistrationPayload(body);
		const registrationId = `BIG-${Date.now().toString().slice(-6)}`;

		await appendRegistrationToSheet(registrationId, data);
		const email = await sendConfirmationEmail(registrationId, data);

		return NextResponse.json({
			success: true,
			registrationId,
			emailId: email.emailId,
		});
	} catch (error) {
		console.error("Registration failed:", error);

		const message =
			error instanceof Error
				? error.message
				: "Unable to complete registration.";
		const status =
			message.includes("required") || message.includes("valid email") ? 400 : 500;

		return NextResponse.json(
			{
				success: false,
				error: message,
			},
			{
				status,
			},
		);
	}
}
