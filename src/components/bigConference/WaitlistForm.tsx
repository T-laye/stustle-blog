/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IoCheckmarkCircle } from "react-icons/io5";

import {
	waitlistSchema,
	attended2026Options,
	attendance2027Options,
	type WaitlistSchema,
} from "@/lib/validations/waitlist";
import { attendeeProfiles } from "@/lib/constants/registration-options";
import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";

export default function WaitlistForm() {
	const [joined, setJoined] = useState<null | "new" | "existing">(null);

	const methods = useForm<WaitlistSchema>({
		resolver: zodResolver(waitlistSchema) as any,
		mode: "onBlur",
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			city: "",
			attendeeProfile: "",
			attended2026: "",
			attendance2027: "",
			consentToUpdates: false,
			website: "",
		},
	});
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = methods;
	const consentError = errors.consentToUpdates?.message as string | undefined;

	const onSubmit: SubmitHandler<WaitlistSchema> = async (data) => {
		try {
			const res = await fetch("/api/waitlist", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const result = await res.json();

			if (!res.ok) {
				toast.error(result.error || "Something went wrong. Please try again.");
				return;
			}

			setJoined(result.alreadyJoined ? "existing" : "new");
		} catch {
			toast.error("Check your connection and try again.");
		}
	};

	if (joined) {
		return (
			<div
				role="status"
				className="flex flex-col items-center text-center py-6"
			>
				<IoCheckmarkCircle className="text-primary text-6xl" />
				<h3 className="text-2xl font-extrabold mt-4">
					{joined === "new" ? "You're on the list!" : "You're already in!"}
				</h3>
				<p className="text-foreground/70 mt-2 max-w-md">
					{joined === "new"
						? "We’ve sent a confirmation to your email. We’ll let you know as soon as B.I.G. 2027 opens."
						: "This email is already on the B.I.G. 2027 waitlist. We'll be in touch when registration opens."}
				</p>
			</div>
		);
	}

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className="text-left space-y-5"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					<FormInput name="fullName" label="Full name" />
					<FormInput name="email" label="Email address" type="email" />
					<FormInput
						name="phone"
						label="WhatsApp number"
						type="tel"
						placeholder="e.g. 0801 234 5678"
					/>
					<FormInput
						name="city"
						label="City / State"
						placeholder="e.g. Warri, Delta State"
					/>
					<FormSelect
						name="attendeeProfile"
						label="Which best describes you?"
						options={attendeeProfiles}
					/>
					<FormSelect
						name="attended2026"
						label="Did you attend B.I.G. 2026?"
						options={attended2026Options}
					/>
				</div>

				<FormSelect
					name="attendance2027"
					label="How would you like to attend B.I.G. 2027?"
					options={attendance2027Options}
				/>

				{/* Honeypot: hidden from people and screen readers */}
				<input
					type="text"
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
					className="absolute -left-[9999px] h-0 w-0 opacity-0"
					{...register("website")}
				/>

				<div className="space-y-2">
					<label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-primary-active bg-white-background/70 px-4 py-3 text-sm leading-6 text-black transition hover:border-primary hover:bg-primary-activeCard">
						<input
							type="checkbox"
							{...register("consentToUpdates")}
							className="mt-1 h-4 w-4 rounded accent-primary"
						/>
						<span>
							I consent to Stustle contacting me by email and WhatsApp about
							B.I.G. 2027 and related updates.
						</span>
					</label>
					{consentError && (
						<p className="text-sm font-medium text-error">{consentError}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="btn btns bg-primary text-white disabled:opacity-70"
				>
					{isSubmitting ? (
						<span className="btn-loader" aria-label="Joining…" />
					) : (
						<span className="label">Join the 2027 Waitlist</span>
					)}
				</button>
			</form>
		</FormProvider>
	);
}
