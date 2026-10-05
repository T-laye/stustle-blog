import { Resend } from "resend";
import { IMPACT_REPORT_URL, SOCIAL_LINKS } from "@/components/bigConference/links";

// Same channel the registration confirmation points people to
const WHATSAPP_CHANNEL_URL =
	"https://whatsapp.com/channel/0029VbBqgKVDTkK9XBAYk23J";

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export async function sendWaitlistConfirmation(to: string, fullName: string) {
	const apiKey = process.env.RESEND_API_KEY?.trim();
	if (!apiKey) {
		throw new Error("Missing required environment variable: RESEND_API_KEY");
	}

	const from =
		process.env.RESEND_FROM_EMAIL?.trim() ||
		"The B.I.G Conference <onboarding@resend.dev>";
	const firstName = fullName.trim().split(/\s+/)[0];
	const name = escapeHtml(firstName);

	const result = await new Resend(apiKey).emails.send({
		from,
		to,
		subject: "You're on the B.I.G. 2027 waitlist",
		text: `Hello ${firstName},

You're on the B.I.G. 2027 waitlist. We'll let you know as soon as registration opens.

While you wait:
- See what happened at B.I.G. 2026 in the Impact Report: ${IMPACT_REPORT_URL}
- Join our WhatsApp channel for updates: ${WHATSAPP_CHANNEL_URL}
- Follow B.I.G. on Instagram: ${SOCIAL_LINKS.instagram}

Small steps. Steady growth. See you at B.I.G. 2027!

The Stustle Team`,
		html: `
			<div style="margin:0; padding:0; background:#fffaf0; font-family:Arial, Helvetica, sans-serif; color:#191000;">
				<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fffaf0; padding:32px 16px;">
					<tr>
						<td align="center">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px; overflow:hidden; border-radius:24px; background:#ffffff; border:1px solid #f2e6c0;">
								<tr>
									<td style="background:linear-gradient(135deg,#e29507,#f5be4a); padding:34px 28px; color:#191000;">
										<p style="margin:0 0 12px; font-size:12px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;">Waitlist confirmed</p>
										<h1 style="margin:0; font-size:30px; line-height:1.15;">B.I.G. Conference 2027</h1>
										<p style="margin:12px 0 0; font-size:15px; line-height:1.6;">Begin &bull; Innovate &bull; Grow with Stustle.</p>
									</td>
								</tr>
								<tr>
									<td style="padding:30px 28px;">
										<h2 style="margin:0 0 12px; font-size:22px; color:#191000;">Hello ${name},</h2>
										<p style="margin:0 0 20px; color:#5c4019; font-size:15px; line-height:1.7;">
											You're on the B.I.G. 2027 waitlist. We'll let you know as soon as registration opens, so you can be one of the first to secure your spot.
										</p>

										<p style="margin:0 0 12px; color:#191000; font-size:15px; font-weight:700;">While you wait</p>

										<div style="margin:0 0 14px; border-radius:18px; background:#fff6e6; border:1px solid rgba(226,149,7,0.32); padding:18px;">
											<p style="margin:0 0 8px; color:#7a5c2e; font-size:13px; font-weight:700;">See what happened at B.I.G. 2026</p>
											<p style="margin:0 0 12px; color:#5c4019; font-size:14px; line-height:1.7;">The numbers, stories and lessons from two days of learning, connection and action.</p>
											<a href="${IMPACT_REPORT_URL}" style="display:inline-block; border-radius:999px; background:#e29507; color:#ffffff; font-size:14px; font-weight:700; padding:11px 18px; text-decoration:none;">View the 2026 Impact Report</a>
										</div>

										<div style="margin:0 0 24px; border-radius:18px; background:#fff6e6; border:1px solid rgba(226,149,7,0.32); padding:18px;">
											<p style="margin:0 0 8px; color:#7a5c2e; font-size:13px; font-weight:700;">Stay in the loop</p>
											<p style="margin:0 0 12px; color:#5c4019; font-size:14px; line-height:1.7;">Get B.I.G. updates and opportunities from Stustle on WhatsApp and Instagram.</p>
											<a href="${WHATSAPP_CHANNEL_URL}" style="display:inline-block; border-radius:999px; background:#e29507; color:#ffffff; font-size:14px; font-weight:700; padding:11px 18px; text-decoration:none;">Join WhatsApp channel</a>
											<a href="${SOCIAL_LINKS.instagram}" style="display:inline-block; margin-left:8px; color:#a96e03; font-size:14px; font-weight:700; padding:11px 4px; text-decoration:none;">Follow on Instagram &rarr;</a>
										</div>

										<p style="margin:0; color:#191000; font-size:15px; font-weight:700;">Small steps. Steady growth. See you at B.I.G. 2027!</p>
									</td>
								</tr>
								<tr>
									<td style="padding:20px 28px; background:#191000; color:#fdf3dc; font-size:12px; line-height:1.6;">
										<p style="margin:0;">Sent by Stustle &bull; You're receiving this because you joined the B.I.G. 2027 waitlist.</p>
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

	return result.data?.id;
}
