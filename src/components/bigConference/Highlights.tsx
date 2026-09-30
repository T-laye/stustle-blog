"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Subtitle from "./Subtitle";
import { prefersReducedMotion } from "./motion";
import CtaLink from "./CtaLink";
import PhotoSlot from "./PhotoSlot";
import { FULL_GALLERY_URL, HIGHLIGHTS_VIDEO_URL } from "./links";
import { highlightPhotos } from "./recap2026";

gsap.registerPlugin(ScrollTrigger);

// Bento layout for 6 photos: first tile is large, the rest fill around it
const tileClasses = [
	"col-span-2 row-span-2",
	"col-span-2",
	"",
	"",
	"col-span-2",
	"col-span-2",
];

// Only real photos can be opened in the lightbox
const viewable = highlightPhotos
	.map((photo, i) => ({ ...photo, i }))
	.filter((photo) => photo.src);

export default function Highlights() {
	const sectionRef = useRef<HTMLElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState<number | null>(null);

	const step = useCallback(
		(dir: 1 | -1) => {
			setOpen((current) => {
				if (current === null || viewable.length === 0) return current;
				const pos = viewable.findIndex((p) => p.i === current);
				return viewable[(pos + dir + viewable.length) % viewable.length].i;
			});
		},
		[],
	);

	useEffect(() => {
		if (open === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight") step(1);
			if (e.key === "ArrowLeft") step(-1);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open, step]);

	useEffect(() => {
		if (prefersReducedMotion()) return;
		const ctx = gsap.context(() => {
			if (gridRef.current) {
				gsap.fromTo(
					gridRef.current.children,
					{ opacity: 0, y: 40, scale: 0.96 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.6,
						stagger: 0.08,
						ease: "power3.out",
						scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const current = open !== null ? highlightPhotos[open] : null;

	return (
		<section
			id="big-highlights"
			ref={sectionRef}
			className="px-4 sm:px-8 pt-16 sm:pt-20 pb-20 bg-primary-light"
		>
			<div className="container">
				<div className="text-center">
					<Subtitle text="Highlights from B.I.G. 2026" />
					<p className="sm:text-lg text-foreground/70">
						A few moments from two days of learning, connection and action.
					</p>
				</div>

				<div
					ref={gridRef}
					className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[240px] gap-3 sm:gap-4 mt-10"
				>
					{highlightPhotos.map((photo, i) => (
						<button
							key={i}
							type="button"
							disabled={!photo.src}
							onClick={() => setOpen(i)}
							aria-label={photo.src ? `View ${photo.alt}` : photo.alt}
							className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl text-left disabled:cursor-default ${
								tileClasses[i] ?? ""
							}`}
						>
							<PhotoSlot
								src={photo.src}
								alt={photo.alt}
								sizes={
									tileClasses[i]?.includes("col-span-2")
										? "(min-width: 640px) 50vw, 100vw"
										: "(min-width: 640px) 25vw, 50vw"
								}
								className="duration-500 group-hover:scale-105"
							/>
							{photo.caption && (
								<span className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 text-white text-xs sm:text-sm font-medium">
									{photo.caption}
								</span>
							)}
						</button>
					))}
				</div>

				<div className="flex gap-4 justify-center mt-10 max-sm:flex-col max-w-lg mx-auto">
					<CtaLink href={FULL_GALLERY_URL}>View Full Gallery</CtaLink>
					<CtaLink href={HIGHLIGHTS_VIDEO_URL} style="secondary">
						Watch the Highlights
					</CtaLink>
				</div>
			</div>

			{/* Lightbox */}
			{current && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label={current.alt}
					onClick={() => setOpen(null)}
					className="fixed inset-0 z-[1100] bg-black/90 flex items-center justify-center p-4 sm:p-10"
				>
					<button
						type="button"
						aria-label="Close"
						onClick={() => setOpen(null)}
						className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl"
					>
						<IoClose />
					</button>

					<div
						className="relative w-full h-full max-w-6xl"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={current.src}
							alt={current.alt}
							fill
							sizes="100vw"
							className="object-contain"
						/>
					</div>

					{viewable.length > 1 && (
						<>
							<button
								type="button"
								aria-label="Previous photo"
								onClick={(e) => {
									e.stopPropagation();
									step(-1);
								}}
								className="absolute left-2 sm:left-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-3xl"
							>
								<IoIosArrowRoundBack />
							</button>
							<button
								type="button"
								aria-label="Next photo"
								onClick={(e) => {
									e.stopPropagation();
									step(1);
								}}
								className="absolute right-2 sm:right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-3xl"
							>
								<IoIosArrowRoundForward />
							</button>
						</>
					)}

					{current.caption && (
						<p className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm">
							{current.caption}
						</p>
					)}
				</div>
			)}
		</section>
	);
}
