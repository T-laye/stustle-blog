"use client";
import React, { useEffect, useRef } from "react";
import { RxTriangleRight } from "react-icons/rx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Subtitle from "./Subtitle";

gsap.registerPlugin(ScrollTrigger);

const dayOneTopics = [
	"Career and opportunity",
	"Personal growth",
	"Purpose and impact",
	"Positioning for the future",
	"Skills and employability",
	"Building beyond your current environment",
];

const dayTwoHighlights = [
	{
		title: "Industry Leaders Roundtable",
		text: "Real conversations about navigating work, business, visibility, technology, growth and building in today's world.",
	},
	{
		title: "Practical Sessions",
		text: "Lessons and experiences from people actively building careers, businesses and personal brands.",
	},
	{
		title: "B.I.G. Business Pitch Challenge",
		text: "Six finalists took the stage to pitch their businesses, with ₦200,000 awarded to two winning entrepreneurs.",
	},
	{
		title: "Networking & Community",
		text: "A space for young people to meet, connect, exchange ideas and discover opportunities beyond the conference room.",
	},
];

export default function Experience() {
	const sectionRef = useRef<HTMLElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				subtitleRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: { trigger: subtitleRef.current, start: "top 85%" },
				},
			);

			if (gridRef.current) {
				gsap.fromTo(
					gridRef.current.children,
					{ opacity: 0, y: 40, scale: 0.95 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.65,
						stagger: 0.15,
						ease: "back.out(1.4)",
						scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="big-experience"
			ref={sectionRef}
			className="px-4 sm:px-8 pt-10 sm:pt-20 pb-20 relative overflow-hidden"
		>
			<div className="pointer-events-none absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-3xl" />

			<div className="container relative">
				<div ref={subtitleRef} className="text-center">
					<Subtitle text="The B.I.G. Experience" />
					<p className="sm:text-lg text-foreground/70">
						Two days. One goal: help young people move forward.
					</p>
				</div>

				<div
					ref={gridRef}
					className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10"
				>
					<div className="border border-primary/20 rounded-2xl p-6 bg-primary/5">
						<span className="inline-block rounded-full bg-primary text-white text-xs font-bold tracking-wide px-3 py-1">
							Day 1 — Virtual
						</span>
						<p className="mt-4 text-foreground/80 leading-relaxed">
							We kicked off B.I.G. 2026 virtually, bringing together young
							people from different locations for conversations around:
						</p>
						<ul className="mt-4 space-y-2">
							{dayOneTopics.map((topic) => (
								<li key={topic} className="flex items-start gap-2">
									<RxTriangleRight
										className="text-primary mt-0.5 shrink-0"
										size={20}
									/>
									<span>{topic}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="border border-primary/20 rounded-2xl p-6 bg-primary/5">
						<span className="inline-block rounded-full bg-primary text-white text-xs font-bold tracking-wide px-3 py-1">
							Day 2 — In-Person
						</span>
						<p className="mt-4 text-foreground/80 leading-relaxed">
							Day 2 brought the B.I.G. community together physically in
							Effurun, Delta State, with additional virtual participation. The
							day featured:
						</p>
						<div className="mt-4 space-y-4">
							{dayTwoHighlights.map(({ title, text }) => (
								<div key={title}>
									<h3 className="text-lg font-bold text-primary text-left">{title}</h3>
									<p className="text-sm sm:text-base text-foreground/70 mt-1">
										{text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
