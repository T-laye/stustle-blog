import React from "react";
import Subtitle from "./Subtitle";
import CtaLink from "./CtaLink";
import { IMPACT_REPORT_URL } from "./links";
import { Reveal } from "./motion";

export default function Impact() {
	return (
		<section id="big-impact" className="px-4 sm:px-8 pt-10 sm:pt-20 pb-20">
			<Reveal className="container max-w-4xl mx-auto rounded-[20px] bg-[#E29507]/10 px-6 sm:px-12 py-12 text-center">
				<Subtitle text="The Impact" />

				<div className="sm:text-lg leading-relaxed">
					<p className="font-semibold">
						Our goal isn&apos;t simply to gather young people in one place.
					</p>
					<p className="mt-4">
						It is to create an environment where exposure leads to new thinking,
						new connections and eventually, action. From the 2026 feedback we
						received, participants highlighted shifts in mindset, career
						clarity, practical knowledge, confidence, visibility, networking and
						their willingness to take action.
					</p>
					<p className="mt-4">
						The 2026 Impact Report captures the numbers, stories, feedback and
						lessons from this year&apos;s experience.
					</p>
				</div>

				<p className="mt-8 font-semibold text-lg">Want to see what happened?</p>
				<div className="mt-4 max-w-xs mx-auto">
					<CtaLink href={IMPACT_REPORT_URL}>
						View the 2026 Impact Report
					</CtaLink>
				</div>
			</Reveal>
		</section>
	);
}
