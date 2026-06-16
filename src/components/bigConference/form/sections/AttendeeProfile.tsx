"use client";

import { attendeeProfiles } from "../../../../lib/constants/registration-options";
import FormRadioGroup from "../FormRadioGroup";
import FormSection from "../FormSection";


export default function AttendeeProfile() {
	return (
		<FormSection
			title="Attendee Profile"
			description="Help us understand where you currently are."
		>
			<FormRadioGroup
				name="attendeeProfile"
				label="Which best describes you?"
				options={attendeeProfiles}
			/>
		</FormSection>
	);
}
