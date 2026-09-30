"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import CtaLink from "./CtaLink";
import PhotoSlot from "./PhotoSlot";
import { prefersReducedMotion } from "./motion";
import { IMPACT_REPORT_URL, WAITLIST_URL } from "./links";
import { heroPhotos } from "./recap2026";

gsap.registerPlugin(ScrollTrigger);

const SLIDE_INTERVAL = 6000;

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const themeRef = useRef<HTMLParagraphElement>(null);
	const metaRef = useRef<HTMLParagraphElement>(null);
	const buttonsRef = useRef<HTMLDivElement>(null);
	const bgRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);

	// Crossfade through the hero photos
	useEffect(() => {
		if (heroPhotos.length < 2) return;
		const timer = setInterval(() => {
			setActive((i) => (i + 1) % heroPhotos.length);
		}, SLIDE_INTERVAL);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (prefersReducedMotion()) return;
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.fromTo(
				badgeRef.current,
				{ opacity: 0, y: -10 },
				{ opacity: 1, y: 0, duration: 0.55 },
			)
				.fromTo(
					titleRef.current,
					{ opacity: 0, y: 60, skewY: 4 },
					{ opacity: 1, y: 0, skewY: 0, duration: 0.85 },
					"-=0.2",
				)
				.fromTo(
					themeRef.current,
					{ opacity: 0, x: -30 },
					{ opacity: 1, x: 0, duration: 0.6 },
					"-=0.4",
				)
				.fromTo(
					metaRef.current,
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.3",
				)
				.fromTo(
					buttonsRef.current!.children,
					{ opacity: 0, y: 24, scale: 0.95 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.5,
						stagger: 0.15,
						ease: "back.out(1.4)",
					},
					"-=0.2",
				);

			// Photos drift slower than the page
			gsap.to(bgRef.current, {
				yPercent: 15,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="big-hero"
			className="relative min-h-[100svh] pt-[80px] sm:pt-[90px] flex items-end overflow-hidden bg-black text-white"
		>
			{/* Background photos (drift slower than the page on scroll) */}
			<div ref={bgRef} className="absolute inset-0">
				{heroPhotos.map((photo, i) => (
					<div
						key={i}
						aria-hidden={i !== active}
						className={`absolute inset-0 transition-opacity ease-in-out ${
							i === active ? "opacity-100" : "opacity-0"
						}`}
						style={{ transitionDuration: "1500ms" }}
					>
						{/* Slow zoom on the active photo */}
						<div
							className={`absolute inset-0 motion-safe:transition-transform ease-linear ${
								i === active ? "scale-110" : "scale-100"
							}`}
							style={{ transitionDuration: "7000ms" }}
						>
							<PhotoSlot
								src={photo.src}
								alt={photo.alt}
								sizes="100vw"
								priority={i === 0}
								dark
							/>
						</div>
					</div>
				))}
				{/* Readability overlays */}
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
			</div>

			<div className="container relative w-full px-4 sm:px-8 pb-16 sm:pb-24 pt-24">
				<div className="max-w-3xl">
					<div
						ref={badgeRef}
						className="inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white/80 mb-6"
					>
						<span className="flex items-center gap-1.5">
							<IoCalendarOutline className="text-primary" />
							21–22 August 2026
						</span>
						<span className="flex items-center gap-1.5">
							<SlLocationPin className="text-primary" />
							Virtual + Effurun, Delta State
						</span>
					</div>

					<h1 ref={titleRef} className="hero-title">
						B.I.G.
						<span className="highlight">Conference 2026</span>
					</h1>

					<p ref={themeRef} className="hero-theme mt-4">
						Kaizen · Small Steps. Steady Growth.
					</p>

					<p
						ref={metaRef}
						className="hero-meta mt-2 sm:text-lg text-white/80 max-w-xl"
					>
						The B.I.G. Conference 2026 is over, but the journey continues.
					</p>

					<div
						ref={buttonsRef}
						className="flex gap-4 max-sm:flex-col sm:max-w-xl"
					>
						<CtaLink href={IMPACT_REPORT_URL}>
							View the 2026 Impact Report
						</CtaLink>
						<CtaLink href={WAITLIST_URL} style="reverse">
							Join the 2027 Waitlist
						</CtaLink>
					</div>
				</div>

				{/* Slide indicators */}
				{heroPhotos.length > 1 && (
					<div className="flex gap-2 mt-12">
						{heroPhotos.map((_, i) => (
							<button
								key={i}
								type="button"
								aria-label={`Show photo ${i + 1}`}
								onClick={() => setActive(i)}
								className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-500 bg-white/40 ${
									i === active ? "w-10" : "w-4 hover:bg-white/70"
								}`}
							>
								{/* Fills steadily until the next photo */}
								{i === active && (
									<span
										className="big-slide-progress absolute inset-0 bg-primary origin-left"
										style={{ animationDuration: `${SLIDE_INTERVAL}ms` }}
									/>
								)}
							</button>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
