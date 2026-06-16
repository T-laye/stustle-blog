"use client";

import { useFormContext } from "react-hook-form";

type Props = {
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
};

export default function FormInput({
	name,
	label,
	type = "text",
	placeholder,
}: Props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors[name]?.message as string | undefined;
	const inputClassName = `w-full rounded-2xl border bg-white-background/70 px-4 py-3 text-black placeholder:text-gray-300 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-activeCard ${
		error ? "border-error focus:border-error focus:ring-error/10" : "border-primary-active"
	}`;

	return (
		<div className="space-y-2">
			<label className="text-sm font-semibold text-black">{label}</label>

			<input
				type={type}
				placeholder={placeholder}
				{...register(name)}
				aria-invalid={Boolean(error)}
				className={inputClassName}
			/>

			{error && <p className="text-sm font-medium text-error">{error}</p>}
		</div>
	);
}
