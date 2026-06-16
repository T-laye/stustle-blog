"use client";

import { attendanceReasons } from "../../../../lib/constants/registration-options";
import FormCheckboxGroup from "../FormCheckBoxGroup";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";


export default function Goals() {
	return (
		<FormSection
			title="Your Goals"
			description="Tell us what you want to achieve from the conference."
		>
			<FormCheckboxGroup
				name="attendanceReasons"
				label="What is your primary reason for attending? (Select up to 3)"
				options={attendanceReasons}
			/>

			<FormSelect
				name="currentStage"
				label="Where do you currently see yourself?"
				options={[
					"I need direction",
					"I am learning skills",
					"I am building experience",
					"I am looking for opportunities",
					"I am ready to work",
					"I am growing a business",
					"I am looking to hire talent",
				]}
			/>
		</FormSection>
	);
}
