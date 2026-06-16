"use client";

import { opportunities } from "../../../../lib/constants/registration-options";
import FormCheckboxGroup from "../FormCheckBoxGroup";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";


export default function Opportunities() {
	return (
		<FormSection
			title="Opportunities"
			description="Tell us what you're currently looking for."
		>
			<FormCheckboxGroup
				name="opportunities"
				label="Which opportunities are you currently looking for?"
				options={opportunities}
			/>

			<FormSelect
				name="receiveOpportunities"
				label="Would you like to receive job/internship alerts?"
				options={["Yes", "No"]}
			/>
		</FormSection>
	);
}
