import React from "react";
import Image from "next/image";
import Subtitle from "./Subtitle";
import CtaLink from "./CtaLink";
import { PARTNERSHIP_EMAIL } from "./links";
import { partners } from "./recap2026";
import { Reveal } from "./motion";

export default function Partners2026() {
	return (
		<section id="big-partners" className="px-4 sm:px-8 pt-16 sm:pt-20 pb-20">
			<div className="container">
				<div className="text-center max-w-2xl mx-auto">
					<Subtitle text="Our 2026 Partners" />
					<p className="sm:text-lg text-foreground/70">
						B.I.G. 2026 was made possible by organisations who believe in young
						people.
					</p>
				</div>

				{/* Flex so a short last row stays centred */}
				<Reveal
					stagger={0.04}
					y={20}
					className="flex flex-wrap justify-center gap-4 mt-10"
				>
					{partners.map(({ name, logo, bg, url }, i) => {
						const tile = (
							<div
								className="relative h-28 sm:h-32 rounded-2xl border border-primary/15 flex items-center justify-center p-6 hover:-translate-y-1 hover:shadow-lg duration-300"
								style={{ backgroundColor: bg ?? "#ffffff" }}
							>
								{logo ? (
									<Image
										src={logo}
										alt={name}
										fill
										sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
										className="object-contain p-5 sm:p-6"
									/>
								) : (
									<span className="text-sm text-center font-medium text-primary-100/50 border border-dashed border-primary/30 rounded-lg px-3 py-2">
										{name} logo
									</span>
								)}
							</div>
						);

						const width =
							"w-[calc(50%-8px)] sm:w-[calc(33.333%-10.667px)] lg:w-[calc(25%-12px)]";

						return url ? (
							<a
								key={i}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={name}
								className={width}
							>
								{tile}
							</a>
						) : (
							<div key={i} className={width}>
								{tile}
							</div>
						);
					})}
				</Reveal>

				<div className="text-center mt-12">
					<p className="font-semibold text-lg">
						Want to partner on B.I.G. 2027?
					</p>
					<div className="mt-4 max-w-xs mx-auto">
						<CtaLink href={PARTNERSHIP_EMAIL} style="secondary">
							Become a Partner
						</CtaLink>
					</div>
				</div>
			</div>
		</section>
	);
}
