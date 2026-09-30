"use client";
import React, { useEffect, useRef } from "react";
import Subtitle from "./Subtitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
	{ value: "1,090", label: "Registrations" },
	{ value: "11", label: "Speakers & facilitators" },
	{ value: "75", label: "Volunteers" },
	{ value: "₦300,000", label: "Awarded to two pitch competition winners" },
	{ value: "2", label: "Days of learning, connection and action" },
];

const About = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const bodyRef = useRef<HTMLDivElement>(null);
	const statsRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const decorLineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Decorative line draw
			gsap.fromTo(
				decorLineRef.current,
				{ scaleX: 0, transformOrigin: "left center" },
				{
					scaleX: 1,
					duration: 1.2,
					ease: "expo.out",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 80%",
					},
				},
			);

			// Subtitle fade+slide
			gsap.fromTo(
				subtitleRef.current,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: subtitleRef.current,
						start: "top 85%",
					},
				},
			);

			// Body text reveal
			gsap.fromTo(
				bodyRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					delay: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: bodyRef.current,
						start: "top 85%",
					},
				},
			);

			// List items stagger
			if (listRef.current) {
				gsap.fromTo(
					listRef.current.children,
					{ opacity: 0, x: -24 },
					{
						opacity: 1,
						x: 0,
						duration: 0.6,
						stagger: 0.18,
						ease: "power2.out",
						scrollTrigger: {
							trigger: listRef.current,
							start: "top 88%",
						},
					},
				);
			}

			// Stats counter + fade
			if (statsRef.current) {
				gsap.fromTo(
					statsRef.current.children,
					{ opacity: 0, y: 32, scale: 0.92 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.7,
						stagger: 0.14,
						ease: "back.out(1.4)",
						scrollTrigger: {
							trigger: statsRef.current,
							start: "top 88%",
						},
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="big-about"
			ref={sectionRef}
			className="pt-16 sm:pt-20 lg:pt-28 px-4 sm:px-8 pb-20 relative overflow-hidden"
		>
			{/* Background accent */}
			<div className="pointer-events-none absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl" />

			<div className="container min-h-[50vh] relative">
				<div ref={subtitleRef}>
					<Subtitle text="About B.I.G." />
				</div>

				<div ref={bodyRef} className="sm:text-lg max-w-4xl mx-auto text-center">
					<strong>B.I.G. (Begin, Innovate, Grow)</strong> is a youth-focused
					conference by <strong>Stustle</strong> created to help students, young
					graduates, entrepreneurs and emerging leaders gain the knowledge,
					exposure, connections and opportunities they need to move forward.
					<br />
					<br />
					On 21–22 August 2026, over 1,000 young people registered to be part of
					B.I.G. 2026 as we explored what it means to grow intentionally,
					embrace the process and take meaningful steps towards the future we
					want.
					<br />
					<br />
					<strong>
						We gathered. We learned. We connected. We took the next step.
					</strong>
				</div>

				<ul ref={listRef} className="max-w-md mx-auto mt-10 text-center">
					<li className="border border-primary/20 rounded-xl px-6 py-5 bg-primary/5">
						<p className="text-sm text-foreground/60 tracking-wide">
							This year&apos;s theme was:
						</p>
						<p className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
							KAIZEN
						</p>
						<p className="font-medium mt-1">Small Steps. Steady Growth.</p>
					</li>
				</ul>

				<h3 className="text-xl sm:text-2xl font-bold text-center uppercase mt-16">
					B.I.G. 2026 by the numbers
				</h3>

				{/* Stats row */}
				<div
					ref={statsRef}
					className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8"
				>
					{stats.map(({ value, label }) => (
						<div
							key={label}
							className="group relative border border-primary/20 rounded-xl p-4 text-center max-lg:last:col-span-2 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default overflow-hidden"
						>
							{/* shimmer on hover */}
							<div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12" />
							<p className="text-2xl sm:text-3xl font-extrabold text-primary leading-none">
								{value}
							</p>
							<p className="text-xs sm:text-sm text-foreground/60 mt-1 font-medium tracking-wide">
								{label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
