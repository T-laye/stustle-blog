import { z } from "zod";

export const registrationSchema = z.object({
	// SECTION 1

	fullName: z.string().min(3, "Full name is required"),

	email: z.email("Please enter a valid email"),

	phone: z.string().min(10, "Phone number is required"),

	gender: z.string().min(1, "Select your gender"),

	ageRange: z.string().min(1, "Select your age range"),

	city: z.string().min(2, "City / State is required"),

	school: z.string(),

	profession: z.string(),

	// SECTION 2

	attendeeProfile: z.string().min(1, "Select your current status"),

	attendanceReasons: z.string().min(1, "Select your primary reason"),

	industry: z.string(),

	skillLevel: z.string(),

	skills: z.string().min(1, "Select your strongest skill"),

	opportunities: z.string().min(1, "Select the opportunity you want most"),

	businessName: z.string(),

	ownsBusiness: z.string(),

	businessSupport: z.string(),

	howDidYouHear: z.string().min(1, "Select how you heard about the conference"),

	attendanceMode: z.string().min(1, "Select how you will attend"),

	futurePrograms: z.string().min(1, "Select a program"),

	consentToUpdates: z
		.boolean()
		.refine((value) => value, "You must consent before submitting"),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
