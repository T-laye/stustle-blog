"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const IMAGES = [
	{ src: "/bigConf/timer-img.png", alt: "Conference keynote" },
	{ src: "/bigConf/timer-img.png", alt: "Audience at conference" },
	{ src: "/bigConf/timer-img.png", alt: "Speaker at podium" },
	{ src: "/bigConf/timer-img.png", alt: "Panel discussion" },
	{ src: "/bigConf/timer-img.png", alt: "Networking event" },
	{ src: "/bigConf/timer-img.png", alt: "Conference exhibition" },
	{ src: "/bigConf/timer-img.png", alt: "Workshop session" },
	{ src: "/bigConf/timer-img.png", alt: "Conference hall" },
	{ src: "/bigConf/timer-img.png", alt: "Attendees gathering" },
	{ src: "/bigConf/timer-img.png", alt: "Team collaboration" },
];


// Triple the images for infinite looping
const ALL_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES];
const TOTAL = IMAGES.length;

const GAP = 20;

function getCardSize(wrapperWidth: number) {
	if (wrapperWidth < 480) return Math.min(wrapperWidth - 48, 280);
	if (wrapperWidth < 768) return 280;
	if (wrapperWidth < 1024) return 320;
	return 360;
}

const AUTOPLAY_INTERVAL = 3000;

const Gallery = () => {
	const trackRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(TOTAL);
	const [cardSize, setCardSize] = useState(360);
	const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
	const animating = useRef(false);
	const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
	const isPaused = useRef(false);

	// Compute card size on mount and resize
	useEffect(() => {
		function update() {
			if (wrapperRef.current) {
				setCardSize(getCardSize(wrapperRef.current.offsetWidth));
			}
		}
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	// Scroll to current index without animation
	const jumpTo = useCallback(
		(index: number) => {
			if (!trackRef.current) return;
			trackRef.current.style.transition = "none";
			trackRef.current.style.transform = `translateX(-${
				index * (cardSize + GAP)
			}px)`;
			setCurrentIndex(index);
		},
		[cardSize],
	);

	// Smooth scroll to index
	const scrollTo = useCallback(
		(index: number) => {
			if (!trackRef.current) return;
			trackRef.current.style.transition =
				"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
			trackRef.current.style.transform = `translateX(-${
				index * (cardSize + GAP)
			}px)`;
			setCurrentIndex(index);
		},
		[cardSize],
	);

	// Reset position on initial cardSize change
	useEffect(() => {
		jumpTo(TOTAL);
	}, [cardSize, jumpTo]);

	// Scroll-into-view animation using IntersectionObserver
	useEffect(() => {
		const cards =
			trackRef.current?.querySelectorAll<HTMLElement>("[data-card]");
		if (!cards) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const idx = Number((entry.target as HTMLElement).dataset.card);
						setVisibleCards((prev) => new Set(prev).add(idx));
					}
				});
			},
			{ threshold: 0.25, root: wrapperRef.current },
		);

		cards.forEach((card) => observer.observe(card));
		return () => observer.disconnect();
	}, [cardSize]);

	const handleNext = useCallback(() => {
		if (animating.current) return;
		animating.current = true;

		const next = currentIndex + 1;
		scrollTo(next);

		setTimeout(() => {
			if (next >= TOTAL * 2) jumpTo(TOTAL);
			animating.current = false;
		}, 520);
	}, [currentIndex, scrollTo, jumpTo]);

	const handlePrev = useCallback(() => {
		if (animating.current) return;
		animating.current = true;

		const prev = currentIndex - 1;
		scrollTo(prev);

		setTimeout(() => {
			if (prev < TOTAL) jumpTo(TOTAL * 2 - 1);
			animating.current = false;
		}, 520);
	}, [currentIndex, scrollTo, jumpTo]);

	// Autoplay — pauses temporarily when user interacts manually or hovers
	const stopAutoplay = useCallback(() => {
		if (autoplayTimer.current) {
			clearInterval(autoplayTimer.current);
			autoplayTimer.current = null;
		}
	}, []);

	const startAutoplay = useCallback(() => {
		stopAutoplay();
		autoplayTimer.current = setInterval(() => {
			if (!isPaused.current) handleNext();
		}, AUTOPLAY_INTERVAL);
	}, [handleNext, stopAutoplay]);

	useEffect(() => {
		startAutoplay();
		return stopAutoplay;
	}, [startAutoplay, stopAutoplay]);

	const pauseTemporarily = useCallback(() => {
		isPaused.current = true;
		setTimeout(() => {
			isPaused.current = false;
		}, 6000);
	}, []);

	const onManualNext = useCallback(() => {
		pauseTemporarily();
		handleNext();
	}, [handleNext, pauseTemporarily]);

	const onManualPrev = useCallback(() => {
		pauseTemporarily();
		handlePrev();
	}, [handlePrev, pauseTemporarily]);

	return (
		<section className="pt-10 sm:pt-16 min-h-[50vh] pb-10 bg-[#FFF6E6]">
			<div className="container mx-auto px-4 md:px-6">
				{/* Header */}
				<div className="flex justify-between items-start flex-wrap gap-4 mb-8">
					<div className="flex flex-col">
						<div className="rounded-md bg-primary w-[110px] h-[7px]" />
						<h2 className="text-2xl md:text-[32px] my-[15px] lg:my-[30px] uppercase font-bold tracking-wide">
							THE BIG CONFERENCE 2025
						</h2>
					</div>

					<div className="flex items-center gap-4 md:gap-8">
						<button
							onClick={onManualPrev}
							aria-label="Previous"
							className="h-14 w-14 md:h-20 md:w-20 rounded-full border border-primary flex justify-center items-center text-primary transition-transform active:scale-90 hover:bg-primary/5"
						>
							<IoIosArrowRoundBack className="text-3xl md:text-4xl" />
						</button>
						<button
							onClick={onManualNext}
							aria-label="Next"
							className="h-14 w-14 md:h-20 md:w-20 rounded-full bg-primary flex justify-center items-center text-[#FFF6E6] transition-transform active:scale-90 hover:brightness-110"
						>
							<IoIosArrowRoundForward className="text-3xl md:text-4xl" />
						</button>
					</div>
				</div>

				{/* Carousel Track */}
				<div
					ref={wrapperRef}
					className="overflow-hidden relative"
					onMouseEnter={() => {
						isPaused.current = true;
					}}
					onMouseLeave={() => {
						isPaused.current = false;
					}}
					style={{
						maskImage:
							"linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
					}}
				>
					<div ref={trackRef} className="flex" style={{ gap: GAP }}>
						{ALL_IMAGES.map((img, i) => {
							const isVisible = visibleCards.has(i);
							return (
								<div
									key={i}
									data-card={i}
									style={{
										flexShrink: 0,
										width: cardSize,
										height: cardSize,
										borderRadius: 32,
										overflow: "hidden",
										opacity: isVisible ? 1 : 0,
										transform: isVisible
											? "translateY(0) scale(1)"
											: "translateY(28px) scale(0.97)",
										transition: "opacity 0.55s ease, transform 0.55s ease",
										transitionDelay: isVisible ? `${(i % 3) * 80}ms` : "0ms",
									}}
								>
									<Image
										src={img.src}
										alt={img.alt}
										width={cardSize}
										height={cardSize}
										className="w-full h-full object-cover"
									/>
								</div>
							);
						})}
					</div>
				</div>

				{/* View More */}
				<div className="max-w-40 mx-auto mt-10">
					<button
						onClick={onManualNext}
						className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-full font-semibold text-sm transition-transform hover:-translate-y-0.5 active:scale-95"
					>
						<span>View More</span>
						<FaRegArrowAltCircleRight />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
