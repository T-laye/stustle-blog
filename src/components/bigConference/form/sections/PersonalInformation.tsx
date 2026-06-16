"use client";

import FormInput from "../FormInput";
import FormRadioGroup from "../FormRadioGroup";
import FormSelect from "../FormSelect";
import FormSection from "../FormSection";
import { ageRanges, genders } from "../../../../lib/constants/registration-options";


export default function PersonalInformation() {
	return (
		<FormSection
			title="Basic Information"
			description="Tell us a little about yourself."
		>
			<FormInput name="fullName" label="Full Name" placeholder="John Doe" />

			<FormInput
				name="email"
				type="email"
				label="Email Address"
				placeholder="john@example.com"
			/>

			<FormInput name="phone" label="WhatsApp Number" placeholder="+234..." />

			<FormRadioGroup name="gender" label="Gender" options={genders} />

			<FormSelect name="ageRange" label="Age Range" options={ageRanges} />

			<FormInput name="city" label="City / State" />

			<FormInput name="school" label="School / Institution" />

			<FormInput
				name="profession"
				label="Course of Study / Profession"
				placeholder="Optional"
			/>
		</FormSection>
	);
}
