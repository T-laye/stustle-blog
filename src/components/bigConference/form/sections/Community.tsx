"use client";

import { conferenceSources } from "../../../../lib/constants/registration-options";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";

export default function Community() {
	return (
		<FormSection
			title="Community & Discovery"
			description="Help us keep you connected and understand where you found us."
		>
			<FormSelect
				name="joinCommunity"
				label="Would you like to join the Stustle Community?"
				options={["Yes", "No"]}
			/>

			<FormSelect
				name="howDidYouHear"
				label="How did you hear about the conference?"
				options={conferenceSources}
			/>
		</FormSection>
	);
}
