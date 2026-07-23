/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { registrationSchema } from "@/lib/validations/registration";
import type { RegistrationSchema } from "@/lib/validations/registration";

import PersonalInformation from "./sections/PersonalInformation";
// import Goals from "./sections/Goals";
// import CareerSkills from "./sections/CareerSkills";
import Business from "./sections/Business";
import Community from "./sections/Community";
import Programs from "./sections/Programs";

import FormProgress from "./FormProgress";
import FormNavigation from "./FormNavigation";

const steps = [
	[PersonalInformation],
	// [Goals, CareerSkills],
	[Business],
	[Community, Programs],
];

const stepFields: Array<(keyof RegistrationSchema)[]> = [
	[
		"fullName",
		"email",
		"phone",
		"gender",
		"ageRange",
		"city",
		"school",
		// "profession",
		"attendeeProfile",
	],
	// ["attendanceReasons", "opportunities", 
		// "industry", "skillLevel", "skills"
	// ],
	["businessName", "ownsBusiness", "businessSupport"],
	["attendanceMode", "howDidYouHear", "futurePrograms", "consentToUpdates"],
];

export default function RegistrationForm() {
	const router = useRouter();
	const [step, setStep] = useState(0);
	const [validationNotice, setValidationNotice] = useState("");
	const CurrentStepSections = steps[step];

	const methods = useForm<RegistrationSchema>({
		resolver: zodResolver(registrationSchema) as any,
		mode: "onBlur",
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			gender: "",
			ageRange: "",
			city: "",
			school: "",
			// profession: "",
			attendeeProfile: "",
			// attendanceReasons: "",
			// industry: "",
			// skillLevel: "",
			// skills: "",
			// opportunities: "",
			businessName: "",
			ownsBusiness: "",
			businessSupport: "",
			howDidYouHear: "",
			attendanceMode: "",
			futurePrograms: "",
			consentToUpdates: false,
		},
	});

	const {
		handleSubmit,
		trigger,
		formState: { isSubmitting },
		// watch,
	} = methods;

	const isLastStep = step === steps.length - 1;
	const isFirstStep = step === 0;

	async function nextStep() {
		setValidationNotice("");
		const valid = await trigger(stepFields[step], { shouldFocus: true });

		if (!valid) {
			setValidationNotice(
				"Please complete the highlighted fields before continuing.",
			);
			toast.error("Please complete required fields");
			return;
		}

		setValidationNotice("");
		setStep((s) => s + 1);
	}

	function prevStep() {
		setValidationNotice("");
		setStep((s) => s - 1);
	}

	const onSubmit: SubmitHandler<RegistrationSchema> = async (data) => {
		setValidationNotice("");

		try {
			toast.loading("Submitting registration...");

			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await res.json();

			if (!res.ok) {
				throw new Error(result.error);
			}

			toast.dismiss();
			toast.success("Registration successful!");

			router.push(
				`/events/big-conference/register/success?registrationId=${encodeURIComponent(
					result.registrationId,
				)}`,
			);
		} catch (err: any) {
			toast.dismiss();
			toast.error(err?.message || "Something went wrong");
		}
	};

	function onInvalidSubmit() {
		setValidationNotice(
			"Please complete the highlighted fields before submitting.",
		);
		toast.error("Please complete required fields");
	}

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
				noValidate
				className="mx-auto max-w-3xl space-y-8 rounded-[28px] sm:border sm:border-primary-active sm:bg-white/95 sm:shadow-[0_24px_80px_rgba(25,16,0,0.08)] sm:p-8"
			>
				{/* Progress */}
				<FormProgress current={step + 1} total={steps.length} />

				{validationNotice && (
					<div className="rounded-2xl border border-error/30 bg-error/10 px-4 py-3 text-sm font-medium text-error">
						{validationNotice}
					</div>
				)}

				{/* Current Step */}
				<div className="space-y-6">
					{CurrentStepSections.map((Section) => (
						<Section key={Section.name} />
					))}
				</div>

				{/* Navigation */}
				<FormNavigation
					isFirst={isFirstStep}
					isLast={isLastStep}
					loading={isSubmitting}
					onNext={nextStep}
					onPrevious={prevStep}
				/>
			</form>
		</FormProvider>
	);
}
