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

	// Placeholder validations
	attendanceReasons: z.array(z.string()).default([]),

	industry: z.string(),

	skillLevel: z.string(),

	skills: z.array(z.string()).default([]),

	opportunities: z.array(z.string()).default([]),

	businessName: z.string(),

	ownsBusiness: z.string(),

	businessSupport: z.array(z.string()).default([]),

	joinTalentNetwork: z.string(),

	receiveOpportunities: z.string(),

	portfolio: z.string(),

	joinCommunity: z.string(),

	communityRoles: z.array(z.string()).default([]),

	futurePrograms: z
		.array(z.string())
		.min(1, "Select at least one program")
		.default([]),

	conversionInterests: z.array(z.string()).default([]),

	currentStage: z.string(),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
