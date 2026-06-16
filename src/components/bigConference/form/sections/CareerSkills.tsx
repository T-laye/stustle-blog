"use client";

import { industries, skillLevels, skills } from "../../../../lib/constants/registration-options";
import FormCheckboxGroup from "../FormCheckBoxGroup";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";

export default function CareerSkills() {
	return (
		<FormSection
			title="Career & Skills"
			description="Help us understand your skills and interests."
		>
			<FormSelect
				name="industry"
				label="Which industry are you most interested in?"
				options={industries}
			/>

			<FormSelect
				name="skillLevel"
				label="Current Skill Level"
				options={skillLevels}
			/>

			<FormCheckboxGroup
				name="skills"
				label="Which skills do you have?"
				options={skills}
			/>
		</FormSection>
	);
}
