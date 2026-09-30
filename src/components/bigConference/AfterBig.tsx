import React from "react";
import Subtitle from "./Subtitle";
import CtaLink from "./CtaLink";
import { GROWTH_LAB_URL } from "./links";

export default function AfterBig() {
	return (
		<section id="big-growth-lab" className="px-4 sm:px-8 pt-10 sm:pt-20 pb-20">
			<div className="container max-w-4xl mx-auto text-center">
				<Subtitle text="But what happens after B.I.G.?" />

				<div className="sm:text-lg leading-relaxed">
					<p>
						A conference can give you exposure. But exposure alone doesn&apos;t
						change your career, business or life. That is why B.I.G. is
						connected to a larger ecosystem through <strong>Stustle</strong>,
						one designed to help young people move from learning to building,
						earning and growing.
					</p>
					<p className="mt-4">
						And for those ready to take their next step, there is Growth Lab.
					</p>
				</div>

				<div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-8">
					<h3 className="text-xl sm:text-2xl font-extrabold text-primary">
						Stustle Growth Lab
					</h3>
					<p className="mt-3 sm:text-lg text-foreground/80">
						An 8-week practical growth programme for students and young
						graduates who are serious about becoming more skilled, visible and
						opportunity-ready.
					</p>
					<div className="mt-6 max-w-xs mx-auto">
						<CtaLink href={GROWTH_LAB_URL}>Register for Growth Lab</CtaLink>
					</div>
				</div>
			</div>
		</section>
	);
}
