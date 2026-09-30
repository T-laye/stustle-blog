import React from "react";
import Subtitle from "./Subtitle";
import CtaLink from "./CtaLink";
import { EXPLORE_STUSTLE_URL } from "./links";
import { Reveal } from "./motion";

const offerings = [
	{
		title: "Stustle Connect",
		text: "Join a growing community of young people learning, building and discovering opportunities.",
	},
	{
		title: "Growth Lab",
		text: "Go deeper with structured learning, accountability and practical growth.",
	},
	{
		title: "Stustle Talent",
		text: "Build your skills and connect your abilities to real opportunities.",
	},
	{
		title: "B.I.G. Conference",
		text: "Come together every year for exposure, conversations, connections and opportunities.",
	},
];

// Desktop: cards sit as rising steps — Learn, Earn & Grow, one small step at a time
const stepOffsets = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

export default function KeepGrowing() {
	return (
		<section id="big-ecosystem" className="px-4 sm:px-8 pt-10 sm:pt-20 pb-20">
			<div className="container">
				<div className="text-center max-w-3xl mx-auto">
					<Subtitle text="Keep growing with Stustle" />
					<p className="sm:text-lg leading-relaxed">
						B.I.G. is one part of a bigger movement. Through Stustle, we&apos;re
						building an ecosystem that helps young people{" "}
						<strong>Learn, Earn &amp; Grow</strong>.
					</p>
					<p className="sm:text-lg leading-relaxed mt-4">
						Whether you&apos;re looking for knowledge, community, skills,
						opportunities or people to build with, there is a place for you.
					</p>
				</div>

				<Reveal
					stagger={0.18}
					y={48}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-4 mt-10"
				>
					{offerings.map(({ title, text }, i) => (
						<div
							key={title}
							className={`rounded-[10px] bg-[#E2950710] border border-primary/10 p-5 ${stepOffsets[i]}`}
						>
							<h3 className="text-base sm:text-lg font-bold text-primary uppercase tracking-wide text-left">
								{title}
							</h3>
							<p className="mt-2 text-sm sm:text-base text-foreground/70">
								{text}
							</p>
						</div>
					))}
				</Reveal>

				<div className="mt-10 max-w-xs mx-auto">
					<CtaLink href={EXPLORE_STUSTLE_URL}>Explore Stustle</CtaLink>
				</div>
			</div>
		</section>
	);
}
