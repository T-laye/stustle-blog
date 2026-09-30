import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Subtitle from "./Subtitle";
import { testimonials } from "./recap2026";
import { Reveal } from "./motion";

export default function Voices() {
	return (
		<section id="big-voices" className="px-4 sm:px-8 pt-10 pb-20">
			<div className="container">
				<div className="text-center max-w-2xl mx-auto">
					<Subtitle text="In their words" />
					<p className="sm:text-lg text-foreground/70">
						What participants told us after B.I.G. 2026.
					</p>
				</div>

				{/* Masonry columns so quotes of different lengths pack neatly */}
				<Reveal
					stagger={0.08}
					className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-10"
				>
					{testimonials.map(({ quote, name, role }, i) => (
						<figure
							key={i}
							className="break-inside-avoid mb-6 rounded-3xl bg-primary/5 border border-primary/15 p-6"
						>
							<RiDoubleQuotesL className="text-primary text-3xl" />
							<blockquote className="mt-3 leading-relaxed">{quote}</blockquote>
							<figcaption className="mt-5">
								<p className="font-bold">{name}</p>
								<p className="text-sm text-foreground/60">{role}</p>
							</figcaption>
						</figure>
					))}
				</Reveal>
			</div>
		</section>
	);
}
