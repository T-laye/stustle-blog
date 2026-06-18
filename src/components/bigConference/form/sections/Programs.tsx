"use client";

import { futurePrograms } from "../../../../lib/constants/registration-options";
import FormSection from "../FormSection";
import FormSelect from "../FormSelect";
import { useFormContext } from "react-hook-form";

export default function Programs() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const consentError = errors.consentToUpdates?.message as string | undefined;

	return (
		<FormSection
			title="Future Programs"
			description="What would you like Stustle to build next?"
		>
			<FormSelect
				name="futurePrograms"
				label="Which program are you most interested in?"
				options={futurePrograms}
			/>

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
