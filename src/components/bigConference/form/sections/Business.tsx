"use client";

import FormSection from "../FormSection";
import FormSelect from "../FormSelect";
import FormInput from "../FormInput";
import { businessSupport } from "../../../../lib/constants/registration-options";


export default function Business() {
	return (
		<FormSection
			title="Business Information (Optional)"
			description="For entrepreneurs and business owners."
		>
			<FormInput name="businessName" label="Business Name (optional)" />

			<FormSelect
				name="ownsBusiness"
				label="Do you currently own or manage a business? (optional)"
				options={["Yes", "No"]}
			/>

			<FormSelect
				name="businessSupport"
				label="What kind of support do you need most? (optional)"
				options={businessSupport}
			/>
		</FormSection>
	);
}
