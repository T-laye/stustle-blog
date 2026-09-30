import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Subtitle from "./Subtitle";
import { testimonials } from "./recap2026";

export default function Voices() {
	return (
		<section id="big-voices" className="px-4 sm:px-8 pt-10 pb-20">
			<div className="container">
				<Subtitle text="In their words" />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
					{testimonials.map(({ quote, name, role }, i) => (
						<figure
							key={i}
							className="rounded-3xl bg-primary/5 border border-primary/15 p-6 flex flex-col"
						>
							<RiDoubleQuotesL className="text-primary text-4xl" />
							<blockquote className="mt-3 sm:text-lg leading-relaxed flex-1">
								{quote}
							</blockquote>
							<figcaption className="mt-6">
								<p className="font-bold">{name}</p>
								<p className="text-sm text-foreground/60">{role}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
