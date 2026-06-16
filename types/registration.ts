export interface RegistrationFormData {
	// Section 1
	fullName: string;
	email: string;
	phone: string;
	gender: string;
	ageRange: string;
	city: string;
	school: string;
	profession: string;

	// Section 2
	attendeeProfile: string;

	// Remaining sections (we'll add these later)

	attendanceReasons: string[];
	industry: string;
	skillLevel: string;
	skills: string[];

	opportunities: string[];

	ownsBusiness: string;
	businessSupport: string[];

	joinTalentNetwork: string;
	receiveOpportunities: string;
	portfolio: string;

	joinCommunity: string;
	communityRoles: string[];

	futurePrograms: string[];

	conversionInterests: string[];

	currentStage: string;
}
