"use client";
import React, { useEffect, useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaYoutube,  FaRegArrowAltCircleRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Subtitle from "./Subtitle";

gsap.registerPlugin(ScrollTrigger);

const YOUTUBE_URL = "https://youtube.com/@studentshustle?si=WLzUToX8VwuM8g7n";
const INSTAGRAM_URL = "https://www.instagram.com/bigconference_official";

const days = [
	{
		day: "Friday",
		date: "Aug 21",
		mode: "Virtual",
		time: "3pm",
		details: (
			<>
				Live on YouTube. Subscribe + turn on notifications.
				<a
					href={YOUTUBE_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-3 flex items-center gap-2 text-primary font-semibold hover:underline"
				>
					<FaYoutube size={18} />
					<span>Watch on YouTube</span>
					<FaRegArrowAltCircleRight size={14} />
				</a>
			</>
		),
	},
	{
		day: "Saturday",
		date: "Aug 22",
		mode: "In-Person + Virtual",
		time: "9am",
		details: (
			<>
				GWC Auditorium, Mofor Junction, Delta State.
				<span className="mt-2 flex items-center gap-2 text-foreground/60">
					{/* <FaInstagram size={16} className="text-primary shrink-0" /> */}
					<span>The venue guide will be shared on Instagram soon.</span>
				</span>
				<a
					href={INSTAGRAM_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-3 flex items-center gap-2 text-primary font-semibold hover:underline"
				>
					<span>Follow on Instagram</span>
					<FaRegArrowAltCircleRight size={14} />
				</a>
			</>
		),
	},
];

export default function Schedule() {
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
			id="big-schedule"
			ref={sectionRef}
			className="px-4 sm:px-8 pt-10 sm:pt-20 pb-20 relative overflow-hidden"
		>
			<div className="pointer-events-none absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-3xl" />

			<div className="container relative">
				<div ref={subtitleRef}>
					<Subtitle text="Conference Dates" style="flex flex-col items-center" />
				</div>

				<div
					ref={gridRef}
					className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6"
				>
					{days.map(({ day, date, mode, time, details }) => (
						<div
							key={day}
							className="group relative border border-primary/20 rounded-2xl p-6 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 overflow-hidden"
						>
							<div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12" />

							<span className="inline-block rounded-full bg-primary text-white text-xs font-bold tracking-wide px-3 py-1">
								{mode}
							</span>

							<h3 className="mt-4 text-xl sm:text-2xl font-extrabold">
								{day} <span className="text-primary">{date}</span>
							</h3>

							<div className="flex gap-2 mt-3 items-center text-foreground/70">
								<IoTimeOutline className="text-primary text-lg shrink-0" />
								<span>{time}</span>
							</div>

							<div className="mt-4 flex gap-2 items-start text-foreground/70 leading-relaxed">
								<SlLocationPin className="text-primary text-lg shrink-0 mt-0.5" />
								<div className="flex flex-col">{details}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
