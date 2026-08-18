"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const [projectsCount, setProjectsCount] = useState(0);
	const [clientsCount, setClientsCount] = useState(0);
	const [connectedCount, setConnectedCount] = useState(0);
	const [impactedCount, setImpactedCount] = useState(0);
	const sectionRef = useRef(null);

	const joinFreeCommunity = () => {
		window.open(
			"https://wa.me/2348115237006?text=Hi%2C%20I%27d%20like%20to%20join%20the%20free%20Stustle%20community.",
			"_blank", // Opens the link in a new tab
		);
	};

	const explorePaidPrograms = () => {
		window.open(
			"https://wa.me/2348115237006?text=Hi%2C%20I%27m%20interested%20in%20Stustle%27s%20paid%20programs%20(Masterclasses%2FCohort%20Program).%20Please%20share%20more%20details.",
			"_blank", // Opens the link in a new tab
		);
	};

	const startCounting = (
		target: number,
		setCount: React.Dispatch<React.SetStateAction<number>>,
	) => {
		const intervalDuration = 10; // Interval duration in milliseconds

		const interval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount >= target) {
					clearInterval(interval); // Stop the interval when target is reached
					return target;
				}
				return prevCount + 1; // Increment the count
			});
		}, intervalDuration);

		// Cleanup the interval when the component is unmounted
		return () => clearInterval(interval);
	};

	useEffect(() => {
		startCounting(300, setProjectsCount);
		startCounting(80, setClientsCount);
		startCounting(30, setConnectedCount);
		startCounting(1000, setImpactedCount);
	}, []);

	useEffect(() => {
		const section = sectionRef.current;
		const tlH = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				// pin: true, // Pin the section
				pinSpacing: false,
				scrub: true,
				start: "top -20%", // Pin immediately when entering viewport
				// end: "bottom", // Pin until the bottom of the section
			},
		});

		tlH.to(section, { y: 0 });

		gsap.fromTo(
			".hero-text",
			{ opacity: 0, y: -100, start: "top 0%" }, // Add start value for animation
			{ opacity: 1, duration: 1, y: 0, stagger: 0.2 },
		);

		gsap.fromTo(
			".image, .span, .button",
			{ opacity: 0, scale: 0, start: "top 0%" }, // Add start value for animation
			{
				opacity: 1,
				scale: 1,
				stagger: 0.2,
				ease: "elastic.out(1, 0.7)",
				duration: 0.6,
			},
		);
	}, []);

	return (
		<div ref={sectionRef} className="hero_bg">
			<div className="pb-20 container mx-auto min-h-screen pt-28  sm:pt-[160px]  px-4 gap-10 sm:gap-20  flex flex-col lg:flex-row justify-between ">
				<div className="w-full   ">
					<div className="  items-center lg:items-start flex  flex-col hero-text ">
						<div className="w-5/6 sm:w-4/5  lg:max-w-[500px] ">
							<Image
								height={200}
								width={200}
								src="/images/hero-text.svg"
								alt="Stustle"
								className="h-full w-full object-contain "
							/>
						</div>

						<p className="text-center lg:text-start text-lg md:text-2xl w-5/6 lg:max-w-[400px] mt-3 leading-6">
							Helping Young People <br /> <strong>Learn, Earn & Grow.</strong>
						</p>

						<p className="text-center lg:text-start text-sm md:text-base w-5/6 lg:max-w-[400px] mt-2 text-gray-300">
							For students • graduates • creators • founders • businesses
						</p>

						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 w-11/12 max-w-[480px]">
							{[
								{ count: projectsCount, label: "Projects Delivered" },
								{ count: clientsCount, label: "Clients Served" },
								{ count: connectedCount, label: "Connected to Work" },
								{ count: impactedCount, label: "Impacted" },
							].map((stat) => (
								<div
									key={stat.label}
									className="span flex flex-col items-center justify-center gap-0.5 rounded-xl border border-primary/20 bg-primary/5 px-2 py-3 text-center"
								>
									<span className="text-xl md:text-2xl text-primary font-bold">
										{stat.count}+
									</span>
									<span className="text-xs md:text-sm leading-tight">
										{stat.label}
									</span>
								</div>
							))}
						</div>

						<div className="flex gap-5 mt-10 w-full sm:max-w-[500px] flex-col sm:flex-row">
							<Button style="primary" type="button" fn={joinFreeCommunity}>
								Join Free Community
							</Button>
							<Button style="secondary" type="button" fn={explorePaidPrograms}>
								Explore Paid Programs
							</Button>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center">
					{/* Desktop / tablet: pre-composed Learn-Earn-Grow montage */}
					<div className="hidden sm:flex w-full max-w-[560px] justify-center image">
						<Image
							src="/images/community/community-hero-img.svg"
							alt="Stustle community members learning, collaborating and growing together"
							height={500}
							width={500}
							className="w-full object-contain"
							priority
						/>
					</div>

					{/* Mobile: stacked individual frames */}
					<div className="flex sm:hidden gap-3 justify-center image">
						{[
							"/images/community/community-hero-img-1.png",
							"/images/community/community-hero-img-3.png",
							"/images/community/community-hero-img-2.png",
						].map((src, i) => (
							<div
								key={src}
								className={`w-1/3 max-w-[130px] ${i === 1 ? "-mt-6" : "mt-6"}`}
							>
								<Image
									src={src}
									alt="Stustle community members learning, collaborating and growing together"
									height={400}
									width={300}
									className="w-full h-full object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
