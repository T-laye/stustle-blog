"use client";
import React, { useEffect, useRef } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { CiMicrophoneOn } from "react-icons/ci";
import Subtitle from "./Subtitle";
import { PiCircuitry, PiStudentLight } from "react-icons/pi";
import { SiHackthebox } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContentProps {
	icon: React.ReactNode;
	text: string;
}

const Content: React.FC<ContentProps> = ({ icon, text }) => {
	return (
		<div className="flex flex-col items-center justify-center p-4 gap-4 h-[179px] w-[222px] bg-[#E2950710] rounded-[10px]">
			{icon}
			<span className="text-lg sm:text-xl text-center">{text}</span>
		</div>
	);
};

export default function WhatElse() {
	const sectionRef = useRef<HTMLElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	const contents = [
		{
			icon: <CiMicrophoneOn size={30} className="text-primary" />,
			text: "Keynote Sessions",
		},
		{
			icon: <PiCircuitry size={30} className="text-[#4f4ca9]" />,
			text: "Tech & Growth Workshops",
		},
		{
			icon: (
				<LiaNetworkWiredSolid
					size={36}
					className="text-[#AD1818] sm:text-2xl"
				/>
			),
			text: "Curated Opportunities",
		},
		{
			icon: <BsGlobe2 size={30} className="text-[#4CA94F]" />,
			text: "Networking & Exposure",
		},
		{
			icon: <SiHackthebox size={30} className="sm:text-2xl text-[#CE22B7]" />,
			text: "Hackathon",
		},
		{
			icon: <PiStudentLight size={30} className="sm:text-2xl" />,
			text: "Student Entrepreneur Pitch",
		},
	];

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Subtitle
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

			// Cards stagger with alternating up/down for visual rhythm
			if (gridRef.current) {
				gsap.fromTo(
					gridRef.current.children,
					(i: number) => ({ opacity: 0, y: i % 2 === 0 ? 40 : 60, scale: 0.9 }),
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.65,
						stagger: 0.1,
						ease: "back.out(1.4)",
						scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className="px-4 sm:px-8 pt20 pb-20">
			<div className="container">
				<div
					ref={subtitleRef}
					className="flex flex-col items-center justify-center mb-[72px]"
				>
					<Subtitle
						text="What else to expect"
						style="flex flex-col items-center "
					/>
				</div>

				<div
					ref={gridRef}
					className="flex justify-evenly max-sm:flex-col items-center sm:items-end mt-16 flex-wrap gap-4 max-w-3xl mx-auto"
				>
					{contents.map((content, index) => (
						<Content key={index} icon={content.icon} text={content.text} />
					))}
				</div>
			</div>
		</section>
	);
}
