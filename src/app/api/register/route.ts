import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
	registrationSchema,
	type RegistrationSchema,
} from "@/lib/validations/registration";

export const runtime = "nodejs";

type RegistrationData = RegistrationSchema;

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

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function formatTextList(values: string[]) {
	return values.length ? values.join(", ") : "Not selected";
}

function formatHtmlList(values: string[]) {
	if (!values.length) {
		return "<span style=\"color:#7a5c2e;\">Not selected</span>";
	}

	return values
		.map((value) => `<span>${escapeHtml(value)}</span>`)
		.join("<span style=\"color:#e29507; padding:0 6px;\">&bull;</span>");
}

function validateRegistrationPayload(body: unknown): RegistrationData {
	const result = registrationSchema.safeParse(body);

	if (!result.success) {
		const message =
			result.error.issues[0]?.message || "Please complete required fields.";
		const error = new Error(message);
		error.name = "ValidationError";
		throw error;
	}

	return {
		...result.data,
		email: result.data.email.trim().toLowerCase(),
	};
}

function getSheetRange() {
	const sheetName = process.env.GOOGLE_SHEETS_TAB_NAME?.trim() || "Sheet1";
	const escapedSheetName = sheetName.replace(/'/g, "''");

	return `'${escapedSheetName}'!A:AZ`;
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
					data.gender,
					data.ageRange,
					data.city,
					data.school,
					data.profession,
					data.attendeeProfile,
					formatTextList(data.attendanceReasons),
					data.currentStage,
					data.industry,
					data.skillLevel,
					formatTextList(data.skills),
					formatTextList(data.opportunities),
					data.receiveOpportunities,
					data.businessName,
					data.ownsBusiness,
					formatTextList(data.businessSupport),
					data.joinTalentNetwork,
					data.joinCommunity,
					data.portfolio,
					formatTextList(data.futurePrograms),
					formatTextList(data.communityRoles),
					formatTextList(data.conversionInterests),
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
	const escapedAttendeeProfile = escapeHtml(data.attendeeProfile);
	const escapedCurrentStage = escapeHtml(data.currentStage);

	const result = await resend.emails.send({
		from,
		to: data.email,
		subject: "Registration Confirmed - B.I.G Conference 2026",
		text: `Hello ${data.fullName},

Thank you for registering for B.I.G Conference 2026.

Registration ID: ${registrationId}

Event: B.I.G Conference 2026
Date: August 2026
Location: Delta State, Nigeria

Your interests: ${formatTextList(data.futurePrograms)}

Keep this ID safe. More event information will be sent to you soon.

See you at B.I.G Conference 2026!

The Stustle Team`,
		html: `
			<div style="margin:0; padding:0; background:#fffaf0; font-family:Arial, Helvetica, sans-serif; color:#191000;">
				<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fffaf0; padding:32px 16px;">
					<tr>
						<td align="center">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px; overflow:hidden; border-radius:24px; background:#ffffff; border:1px solid #f2e6c0;">
								<tr>
									<td style="background:linear-gradient(135deg,#e29507,#f5be4a); padding:34px 28px; color:#191000;">
										<p style="margin:0 0 12px; font-size:12px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;">Registration confirmed</p>
										<h1 style="margin:0; font-size:30px; line-height:1.15;">B.I.G Conference 2026</h1>
										<p style="margin:12px 0 0; font-size:15px; line-height:1.6;">Begin &bull; Innovate &bull; Grow with Stustle.</p>
									</td>
								</tr>
								<tr>
									<td style="padding:30px 28px;">
										<h2 style="margin:0 0 12px; font-size:22px; color:#191000;">Hello ${escapedFullName},</h2>
										<p style="margin:0 0 20px; color:#5c4019; font-size:15px; line-height:1.7;">
											Your registration has been received. We are excited to have you join us for B.I.G Conference 2026.
										</p>

										<div style="margin:24px 0; border-radius:18px; background:#fff6e6; border:1px solid rgba(226,149,7,0.32); padding:20px;">
											<p style="margin:0 0 8px; color:#7a5c2e; font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;">Registration ID</p>
											<p style="margin:0; color:#191000; font-size:26px; font-weight:800; letter-spacing:0.04em;">${escapedRegistrationId}</p>
										</div>

										<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 22px;">
											<tr>
												<td style="padding:12px 0; border-bottom:1px solid #f2e6c0; color:#7a5c2e; font-size:13px;">Date</td>
												<td align="right" style="padding:12px 0; border-bottom:1px solid #f2e6c0; color:#191000; font-size:14px; font-weight:700;">August 2026</td>
											</tr>
											<tr>
												<td style="padding:12px 0; border-bottom:1px solid #f2e6c0; color:#7a5c2e; font-size:13px;">Location</td>
												<td align="right" style="padding:12px 0; border-bottom:1px solid #f2e6c0; color:#191000; font-size:14px; font-weight:700;">Delta State, Nigeria</td>
											</tr>
											<tr>
												<td style="padding:12px 0; border-bottom:1px solid #f2e6c0; color:#7a5c2e; font-size:13px;">Profile</td>
												<td align="right" style="padding:12px 0; border-bottom:1px solid #f2e6c0; color:#191000; font-size:14px; font-weight:700;">${escapedAttendeeProfile}</td>
											</tr>
											<tr>
												<td style="padding:12px 0; color:#7a5c2e; font-size:13px;">Current stage</td>
												<td align="right" style="padding:12px 0; color:#191000; font-size:14px; font-weight:700;">${escapedCurrentStage}</td>
											</tr>
										</table>

										<div style="margin:0 0 24px;">
											<p style="margin:0 0 8px; color:#7a5c2e; font-size:13px; font-weight:700;">Programs you are interested in</p>
											<p style="margin:0; color:#191000; font-size:14px; line-height:1.7;">${formatHtmlList(data.futurePrograms)}</p>
										</div>

										<p style="margin:0 0 18px; color:#5c4019; font-size:15px; line-height:1.7;">
											Keep your registration ID safe. We will send more event updates and attendance details to this email.
										</p>

										<p style="margin:0; color:#191000; font-size:15px; font-weight:700;">See you at B.I.G Conference 2026!</p>
									</td>
								</tr>
								<tr>
									<td style="padding:20px 28px; background:#191000; color:#fdf3dc; font-size:12px; line-height:1.6;">
										<p style="margin:0;">Sent by Stustle &bull; Student hustle, talent, and opportunity ecosystem.</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
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
		const body = await req.json();
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
			error instanceof Error && error.name === "ValidationError" ? 400 : 500;

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
