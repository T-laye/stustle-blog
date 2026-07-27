"use client";

import { conferenceSources } from "../../../../lib/constants/registration-options";
import FormInput from "../FormInput";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";

export default function Community() {
	return (
		<FormSection
			title="Attendance & Discovery"
			description="Tell us how you plan to attend and where you found us."
		>
			<FormSelect
				name="attendanceMode"
				label="Will you be joining the conference virtually, or in-person? (In-person is in Delta State; venue details will be communicated soon.)"
				options={["Virtual", "In-person"]}
			/>

			<FormSelect
				name="howDidYouHear"
				label="How did you hear about the conference?"
				options={conferenceSources}
			/>
			<FormInput
				name="nameOfReferrer"
				label="Referrer by (optional)?"
				// options={conferenceSources}
			/>
		</FormSection>
	);
}
