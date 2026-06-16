type Props = {
	onNext?: () => void;
	onPrevious?: () => void;
	isFirst: boolean;
	isLast: boolean;
	loading?: boolean;
};

export default function FormNavigation({
	onNext,
	onPrevious,
	isFirst,
	isLast,
	loading,
}: Props) {
	const primaryButtonClassName =
		"rounded-2xl bg-primary px-7 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(226,149,7,0.22)] transition hover:bg-primary-100 hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-primary-disabled disabled:text-white";

	return (
		<div className="flex justify-between gap-4 pt-2">
			{!isFirst ? (
				<button
					type="button"
					onClick={onPrevious}
					className="rounded-2xl border border-primary-active bg-white px-7 py-3 font-semibold text-primary transition hover:border-primary hover:bg-primary-activeCard active:scale-[0.98]"
				>
					Previous
				</button>
			) : (
				<div />
			)}

			{isLast ? (
				<button
					type="submit"
					disabled={loading}
					className={primaryButtonClassName}
				>
					{loading ? "Submitting..." : "Submit"}
				</button>
			) : (
				<button
					type="button"
					onClick={onNext}
					className={primaryButtonClassName}
				>
					Continue
				</button>
			)}
		</div>
	);
}
