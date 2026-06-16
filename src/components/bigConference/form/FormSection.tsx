import { ReactNode } from "react";

type Props = {
	title: string;
	description?: string;
	children: ReactNode;
};

export default function FormSection({ title, description, children }: Props) {
	return (
		<section className="space-y-6 rounded-[24px] border border-primary-active bg-white p-5 shadow-sm sm:p-6">
			<div>
				<p className="mb-2 h-1.5 w-14 rounded-full bg-primary" />
				<h2 className="text-2xl font-bold text-black">{title}</h2>

				{description && <p className="mt-2 text-sm text-gray-300">{description}</p>}
			</div>

			{children}
		</section>
	);
}
