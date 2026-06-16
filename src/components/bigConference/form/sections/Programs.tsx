"use client";

import { futurePrograms } from "../../../../lib/constants/registration-options";
import FormCheckboxGroup from "../FormCheckBoxGroup";
import FormSection from "../FormSection";

export default function Programs() {
	return (
		<FormSection
			title="Future Programs"
			description="What would you like Stustle to build next?"
		>
			<FormCheckboxGroup
				name="futurePrograms"
				label="Which programs are you interested in?"
				options={futurePrograms}
			/>
		</FormSection>
	);
}
