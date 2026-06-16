type Props = {
	current: number;
	total: number;
};

export default function FormProgress({ current, total }: Props) {
	const percent = (current / total) * 100;

	return (
		<div className="space-y-2">
			<div className="flex justify-between text-sm font-medium text-black">
				<span className="text-primary">
					Step {current} of {total}
				</span>

				<span className="sm:text-gray-300">{Math.round(percent)}%</span>
			</div>

			<div className="h-2.5 overflow-hidden rounded-full bg-primary-activeCard">
				<div
					className="h-full rounded-full bg-primary transition-all duration-300"
					style={{
						width: `${percent}%`,
					}}
				/>
			</div>
		</div>
	);
}
