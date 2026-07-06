"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Decors from "../ui/Decors";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const themeRef = useRef<HTMLParagraphElement>(null);
	const metaRef = useRef<HTMLParagraphElement>(null);
	const buttonsRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const floatingTagRef = useRef<HTMLDivElement>(null);
	const pulseRingRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const registerNow = (type: string) => {
		router.push(type);
	};
	// const volunteer = () => {
	// 	// window.open("https://youtu.be/iYcssUbNYYI?si=nFuXIg3Fj77plSgl", "_blank");
	// };

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			// Badge pop in
			tl.fromTo(
				badgeRef.current,
				{ opacity: 0, scale: 0.7, y: -10 },
				{ opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "back.out(1.7)" },
			)
				// Title words stagger
				.fromTo(
					titleRef.current,
					{ opacity: 0, y: 60, skewY: 4 },
					{ opacity: 1, y: 0, skewY: 0, duration: 0.85 },
					"-=0.2",
				)
				// Theme line
				.fromTo(
					themeRef.current,
					{ opacity: 0, x: -30 },
					{ opacity: 1, x: 0, duration: 0.6 },
					"-=0.4",
				)
				// Meta
				.fromTo(
					metaRef.current,
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.3",
				)
				// Buttons stagger
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
				)
				// Image slide in from right
				.fromTo(
					imageRef.current,
					{ opacity: 0, x: 60, scale: 0.96 },
					{ opacity: 1, x: 0, scale: 1, duration: 1, ease: "expo.out" },
					"-=0.9",
				)
				// Floating tag
				.fromTo(
					floatingTagRef.current,
					{ opacity: 0, y: 20, scale: 0.8 },
					{ opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(2)" },
					"-=0.3",
				);

			// Infinite float on image
			gsap.to(imageRef.current, {
				y: -14,
				duration: 3.2,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
			});

			// Pulse ring expand
			gsap.to(pulseRingRef.current, {
				scale: 1.18,
				opacity: 0,
				duration: 1.8,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
			});

			// Floating tag bob
			gsap.to(floatingTagRef.current, {
				y: -8,
				duration: 2.4,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
				delay: 0.5,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="big-hero"
			className="pt-[80px] herobg max-md:hero_bgconference relative pb-20 overflow-hidden"
		>
			{/* Background glow accents */}
			<div className="pointer-events-none absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
			<div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-primary/8 blur-[120px]" />

			<Decors shape="dots" className="-left-32 top-[15%] max-sm:hidden" />
			{/* <Decors shape="polygon" className="left-[24%] top-[20%] max-sm:hidden" /> */}
			<Decors
				shape="rec"
				className="left-[48%] top-[30%] max-sm:top-[10%] max-sm:hidden"
			/>

			<div className="container min-h-[90vh] lg:max-h-screen flex items-center gap-10 sm:gap-20 max-lg:flex-col lg:pb-20">
				{/* LEFT: Copy */}
				<div className="relative flex-1 flex justify-center items-center max-sm:mt-10 px-4 sm:px-8 sm:mt-20">
					<div className="w-full">
						{/* Badge */}
						{/* <div
							ref={badgeRef}
							className="hero-badge inline-flex items-center gap-2 mb-4"
						>
							<span className="hero-badgedot relative flex h-2.5 w-2.5">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
								<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
							</span>
							<span className="text-primary font-medium text-sm tracking-wide">
								August 2026 · Delta State, Nigeria 
								Delta State, Nigeria
							</span>
						</div> */}

						{/* Title */}
						<h1 ref={titleRef} className="hero-title leading-60">
							B.I.G <br />
							<span className="highlight relative inline-block">
								Conference
								{/* Underline accent */}
								{/* <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full" /> */}
							</span>{" "}
							2026
						</h1>

						{/* Theme */}
						<p
							ref={themeRef}
							className="hero-theme mt-4 flex items-center gap-2"
						>
							Kaizen: Small Steps, Steady Growth
						</p>

						{/* Meta */}
						<p
							ref={metaRef}
							className="hero-meta mt-2 flex flex-wrap gap-2 items-center text-sm text-foreground/60"
						>
							<span>August, 2026</span>
							<span className="text-primary">·</span>
							<span>Delta State, Nigeria</span>
							<span className="text-primary">·</span>
							<span className="font-semibold text-primary">FREE Entry</span>
						</p>

						<Decors
							shape="ellipse"
							className="-left-[100%] -scale-x-100 -bottom-[100%] max-sm:hidden"
						/>

						{/* Buttons */}
						<div
							ref={buttonsRef}
							className="relative flex gap-4 mt-8 sm:mt-14 max-lg:justify-center max-sm:flex-col"
						>
							<Decors
								shape="dots"
								className="-scale-100 -right-[180%] -bottom-[50%] max-sm:hidden"
							/>
							<Button
								style="primary"
								type="button"
								fn={() => registerNow("#free-tickets")}
							>
								<div className="flex items-center gap-2">
									<span>Register Now</span>
									<FaRegArrowAltCircleRight />
								</div>
							</Button>
							<Button
								style="secondary"
								type="button"
								fn={() => registerNow("#support-tickets")}
							>
								<div className="flex items-center gap-2">
									<span>Support the Event</span>
									<FaRegArrowAltCircleRight />
								</div>
							</Button>
						</div>
					</div>
				</div>

				{/* RIGHT: Image */}
				<div className="lg:flex-1 flex justify-center items-center relative px-4 w-full max-w-[500px] lg:max-w-none">
					{/* Pulse ring behind image */}
					<div
						ref={pulseRingRef}
						className="absolute inset-8 rounded-full border-2 border-primary/20 pointer-events-none"
					/>

					<div ref={imageRef} className="relative w-full">
						<div className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
							<Image
								alt="Stustlers"
								src="/bigConf/timer-img.png"
								height={1000}
								width={1000}
								className="object-contain object-top w-full"
								priority
							/>
						</div>

						{/* Floating info tag */}
						<div
							ref={floatingTagRef}
							className="absolute -bottom-4 -left-4 sm:-left-8 bg-background border border-primary/30 rounded-xl px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-sm"
						>
							{/* <p className="text-xs text-foreground/50 font-medium tracking-widest uppercase"> */}
							<p className="text-xs text-primary-100 font-medium tracking-widest uppercase">
								Theme
							</p>
							<p className="text-sm font-bold text-primary mt-0.5">
								Kaizen 改善
							</p>
						</div>

						{/* Top-right badge */}
						<div className="absolute -top-4 -right-2 sm:-right-6 bg-primary text-white rounded-xl px-3 py-2 shadow-lg shadow-primary/30 text-xs font-bold tracking-wide rotate-3">
							FREE ENTRY
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
