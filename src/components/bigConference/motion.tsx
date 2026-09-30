"use client";
// Scroll animations for the B.I.G. page, built around the Kaizen theme:
// things arrive in small, steady steps rather than all at once.
// Everything is skipped for visitors who prefer reduced motion.
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

// For components that run their own gsap timelines
export const prefersReducedMotion = () =>
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	// Seconds between children; when set, each direct child steps in on its own
	stagger?: number;
	y?: number;
	delay?: number;
}

// Rises content into place as it scrolls into view
export function Reveal({
	children,
	className,
	stagger,
	y = 32,
	delay = 0,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;
		const mm = gsap.matchMedia();
		mm.add(MOTION_OK, () => {
			gsap.fromTo(
				stagger ? el.children : el,
				{ opacity: 0, y },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					delay,
					stagger,
					ease: "power3.out",
					scrollTrigger: { trigger: el, start: "top 85%", once: true },
				},
			);
		});
		return () => mm.revert();
	}, [stagger, y, delay]);

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
}

// Counts a stat like "1,090" or "₦300,000" up from zero when it comes into view.
// Renders the real value on the server, so crawlers and no-JS visitors see it.
export function CountUp({ value }: { value: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const [text, setText] = useState(value);

	useLayoutEffect(() => {
		const match = value.match(/^(\D*)([\d,]+)(.*)$/);
		if (!match || !ref.current) return;
		const [, prefix, digits, suffix] = match;
		const target = Number(digits.replace(/,/g, ""));
		const format = (n: number) =>
			`${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;

		const mm = gsap.matchMedia();
		mm.add(MOTION_OK, () => {
			const counter = { n: 0 };
			setText(format(0));
			gsap.to(counter, {
				n: target,
				duration: 1.8,
				ease: "power2.out",
				onUpdate: () => setText(format(counter.n)),
				scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
			});
			return () => setText(value);
		});
		return () => mm.revert();
	}, [value]);

	return (
		<span ref={ref} className="tabular-nums">
			{text}
		</span>
	);
}

// The orange section-title bar, growing from the left like a progress bar
export function GrowBar({ className }: { className?: string }) {
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const mm = gsap.matchMedia();
		mm.add(MOTION_OK, () => {
			gsap.fromTo(
				ref.current,
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.1,
					ease: "expo.out",
					scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
				},
			);
		});
		return () => mm.revert();
	}, []);

	return <div ref={ref} className={`origin-left ${className ?? ""}`} />;
}
