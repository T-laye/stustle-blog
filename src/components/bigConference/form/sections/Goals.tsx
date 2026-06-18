"use client";

import {
	attendanceReasons,
	opportunities,
} from "../../../../lib/constants/registration-options";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";


export default function Goals() {
	return (
		<FormSection
			title="Goals & Opportunities"
			description="Tell us what you want to achieve from the conference."
		>
			<FormSelect
				name="attendanceReasons"
				label="What is your primary reason for attending?"
				options={attendanceReasons}
			/>

			<FormSelect
				name="opportunities"
				label="Which opportunity are you currently looking for?"
				options={opportunities}
			/>
		</FormSection>
	);
}
