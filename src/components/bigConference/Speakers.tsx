"use client";
import React, { useEffect, useRef } from "react";
import SpeakerCard from "./SpeakerCard";
import Subtitle from "./Subtitle";
import { speakers } from "../../utils/contents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Speakers = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

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

			// Cards stagger fan-in
			if (gridRef.current) {
				gsap.fromTo(
					gridRef.current.children,
					{ opacity: 0, y: 40, scale: 0.92 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.65,
						stagger: 0.1,
						ease: "back.out(1.3)",
						scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
    id="big-speakers"
			ref={sectionRef}
			className="bg-[#E2950710] min-h-[50vh] pb-[72px] pt-20 mt-20"
		>
			<div className="container">
				<div
					ref={subtitleRef}
					className="flex flex-col items-center justify-center"
				>
					<Subtitle text="Our Speakers" style="flex flex-col items-center " />
				</div>

				<div ref={gridRef} className="flex justify-center gap-12 flex-wrap">
					{speakers.map((s, i) => (
						<SpeakerCard key={i} img={s.img} name={s.name} role={s.role} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Speakers;
