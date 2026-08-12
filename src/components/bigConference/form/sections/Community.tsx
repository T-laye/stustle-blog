"use client";

import { useFormContext } from "react-hook-form";
import { conferenceSources } from "../../../../lib/constants/registration-options";
import FormInput from "../FormInput";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";

export default function Community() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const consentError = errors.consentToUpdates?.message as string | undefined;

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
			<FormInput name="nameOfReferrer" label="Referred by (optional)?" />

			<div className="space-y-2">
				<label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-primary-active bg-white-background/70 px-4 py-3 text-sm leading-6 text-black transition hover:border-primary hover:bg-primary-activeCard">
					<input
						type="checkbox"
						{...register("consentToUpdates")}
						className="mt-1 h-4 w-4 rounded accent-primary"
					/>
					<span>
						I consent to Stustle sending me information about The B.I.G
						Conference and further updates after the conference.
					</span>
				</label>

				{consentError && (
					<p className="text-sm font-medium text-error">{consentError}</p>
				)}
			</div>
		</FormSection>
	);
}
