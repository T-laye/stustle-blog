"use client";

import FormSection from "../FormSection";
import FormSelect from "../FormSelect";

export default function Community() {
	return (
		<FormSection
			title="Community & Talent Network"
			description="Join the Stustle ecosystem."
		>
			<FormSelect
				name="joinTalentNetwork"
				label="Would you like to join the Talent Network?"
				options={["Yes", "No", "I'd like to learn more"]}
			/>

			<FormSelect
				name="joinCommunity"
				label="Would you like to join the Stustle Community?"
				options={["Yes", "No"]}
			/>

			<FormSelect
				name="portfolio"
				label="Do you have a portfolio / LinkedIn / website?"
				options={["Yes", "No"]}
			/>
		</FormSection>
	);
}
