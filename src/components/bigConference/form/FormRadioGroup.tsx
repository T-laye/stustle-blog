"use client";

import { useFormContext } from "react-hook-form";

type Props = {
	name: string;
	label: string;
	options: readonly string[];
};

export default function FormRadioGroup({ name, label, options }: Props) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors[name]?.message as string | undefined;

	return (
		<div className="space-y-3">
			<label className="text-sm font-semibold text-black">{label}</label>

			<div className="grid gap-3">
				{options.map((option) => (
					<label
						key={option}
						className="flex cursor-pointer items-center gap-3 rounded-2xl border border-primary-active bg-white-background/70 px-4 py-3 text-sm text-black transition hover:border-primary hover:bg-primary-activeCard"
					>
						<input
							type="radio"
							value={option}
							{...register(name)}
							className="h-4 w-4 accent-primary"
						/>

						{option}
					</label>
				))}
			</div>

			{error && <p className="text-sm font-medium text-error">{error}</p>}
		</div>
	);
}
