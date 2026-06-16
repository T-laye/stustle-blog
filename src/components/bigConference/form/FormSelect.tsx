"use client";

import { useFormContext } from "react-hook-form";

type Props = {
	name: string;
	label: string;
	options: readonly string[];
};

export default function FormSelect({ name, label, options }: Props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors[name]?.message as string | undefined;
	const selectClassName = `w-full rounded-2xl border bg-white-background/70 px-4 py-3 text-black outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-activeCard ${
		error ? "border-error focus:border-error focus:ring-error/10" : "border-primary-active"
	}`;

	return (
		<div className="space-y-2">
			<label className="text-sm font-semibold text-black">{label}</label>

			<select
				{...register(name)}
				aria-invalid={Boolean(error)}
				className={selectClassName}
			>
				<option value="">Select</option>

				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>

			{error && <p className="text-sm font-medium text-error">{error}</p>}
		</div>
	);
}
