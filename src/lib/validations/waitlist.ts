import { z } from "zod";

export const attended2026Options = [
	"Yes, in person",
	"Yes, virtually",
	"No, 2027 will be my first",
] as const;

export const attendance2027Options = [
	"In-person",
	"Virtual",
	"Not sure yet",
] as const;

export const waitlistSchema = z.object({
	fullName: z.string().trim().min(3, "Full name is required"),

	email: z.email("Please enter a valid email"),

	phone: z.string().trim().min(10, "WhatsApp number is required"),

	city: z.string().trim().min(2, "City / State is required"),

	attendeeProfile: z.string().min(1, "Select your current status"),

	attended2026: z.string().min(1, "Let us know if you attended B.I.G. 2026"),

	attendance2027: z.string().min(1, "Select how you'd like to attend"),

	consentToUpdates: z
		.boolean()
		.refine((value) => value, "You must consent so we can notify you"),

	// Honeypot — hidden from people, bots tend to fill it in
	website: z.string().optional(),
});

export type WaitlistSchema = z.infer<typeof waitlistSchema>;
