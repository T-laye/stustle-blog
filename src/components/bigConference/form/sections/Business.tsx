"use client";

import FormSection from "../FormSection";
import FormSelect from "../FormSelect";
import FormInput from "../FormInput";
import FormCheckboxGroup from "../FormCheckBoxGroup";
import { businessSupport } from "../../../../lib/constants/registration-options";


export default function Business() {
	return (
		<FormSection
			title="Business Information"
			description="For entrepreneurs and business owners."
		>
			<FormInput name="businessName" label="Business Name" />

			<FormSelect
				name="ownsBusiness"
				label="Do you currently own or manage a business?"
				options={["Yes", "No"]}
			/>

			<FormCheckboxGroup
				name="businessSupport"
				label="What kind of support do you need?"
				options={businessSupport}
			/>
		</FormSection>
	);
}
