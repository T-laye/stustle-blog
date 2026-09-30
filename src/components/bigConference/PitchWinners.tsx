import React from "react";
import { PiTrophy } from "react-icons/pi";
import Subtitle from "./Subtitle";
import PhotoSlot from "./PhotoSlot";
import { pitchWinners } from "./recap2026";

export default function PitchWinners() {
	return (
		<section id="big-pitch" className="px-4 sm:px-8 pt-16 sm:pt-20 pb-20">
			<div className="container max-w-5xl mx-auto">
				<div className="text-center max-w-2xl mx-auto">
					<Subtitle text="B.I.G. Business Pitch Challenge" />
					<p className="sm:text-lg text-foreground/70">
						Six finalists took the stage to pitch their businesses. Meet the two
						winning entrepreneurs.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
					{pitchWinners.map((winner, i) => (
						<div
							key={i}
							className="flex max-sm:flex-col rounded-3xl overflow-hidden border border-primary/20 bg-white-background shadow-sm"
						>
							<div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:min-h-[260px] shrink-0">
								<PhotoSlot
									src={winner.photo}
									alt={`Winner ${i + 1} photo`}
									sizes="(min-width: 768px) 20vw, 100vw"
								/>
							</div>
							<div className="p-6 flex flex-col justify-center">
								<span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary text-white text-xs font-bold tracking-wide px-3 py-1">
									<PiTrophy /> Winner
								</span>
								<h3 className="text-xl font-extrabold mt-4 text-left">{winner.name}</h3>
								<p className="text-primary font-semibold">{winner.business}</p>
								<p className="text-foreground/70 mt-3 text-sm sm:text-base">
									{winner.blurb}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
