"use client";
import React, { useEffect, useRef } from "react";
import Subtitle from "./Subtitle";
import { RxTriangleRight } from "react-icons/rx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
	{ value: "500+", label: "Young People Impacted" },
	{ value: "2026", label: "Year" },
	{ value: "2,000+", label: "Target Participants" },
	{ value: "FREE", label: "Entry" },
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
			className="pt-10 sm:pt-20 lg:pt-40 px-4 sm:px-8 pb-20 relative overflow-hidden"
		>
			{/* Background accent */}
			<div className="pointer-events-none absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl" />

			<div className="container min-h-[50vh] relative">
				<div ref={subtitleRef}>
					<Subtitle text="About Event" />
				</div>

				{/* Stats row */}
				<div
					ref={statsRef}
					className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10"
				>
					{stats.map(({ value, label }) => (
						<div
							key={label}
							className="group relative border border-primary/20 rounded-xl p-4 text-center bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default overflow-hidden"
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

				<div ref={bodyRef} className="sm:text-lg text-justify max-w-7xl">
					The B.I.G (Begin, Innovate, Grow) Conference is an annual initiative
					by <strong>Stustle</strong>, created to equip students and young
					graduates with the skills, mindset, and access they need to thrive.
					<br />
					<br />
					Since launching in 2025, the conference has impacted over 500 young
					people across Delta State, connecting them to industry insights,
					growth opportunities, and practical pathways to earning. This
					year&apos;s theme, <strong>Kaizen</strong>, centers on continuous
					improvement, discipline, and building sustainable success over time.
					<br />
					<br />
					We&apos;re scaling to <strong>2,000+ participants</strong> and
					intentionally creating a space where:
				</div>

				<ul ref={listRef} className="space-y-3 pt-5 max-w-3xl mt-5">
					{[
						"young people gain clarity, skills, and visibility",
						"founders, CEOs, and organizations access emerging talent and future workforce",
					].map((item) => (
						<li
							key={item}
							className="group flex items-start gap-3 bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 rounded-lg px-4 py-3 transition-all duration-300"
						>
							<RxTriangleRight
								className="text-primary mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform duration-300"
								size={22}
							/>
							<span className="text-base sm:text-lg leading-snug">{item}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default About;
