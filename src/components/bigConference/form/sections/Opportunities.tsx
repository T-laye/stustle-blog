"use client";

import { opportunities } from "../../../../lib/constants/registration-options";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";


export default function Opportunities() {
	return (
		<FormSection
			title="Opportunities"
			description="Tell us what you're currently looking for."
		>
			<FormSelect
				name="opportunities"
				label="Which opportunity are you currently looking for?"
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
