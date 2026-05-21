"use client";
import React from "react";
import Subtitle from "./Subtitle";
import Button from "../ui/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Partners = () => {
	return (
		<section
			id="contact"
			className="bg-[#3b2a0e] text-white sm:mt-10 pt-10 pb-10 px-4 relative z-10 min-h-[50vh] overflow-hidden flex items-center sponsorbg"
		>
			<div className="w-full max-w-6xl py-10 mx-auto">
				<section id="partners">
					{/* Header */}
					<div className="flex flex-col items-center justify-center mb-8">
						<Subtitle
							text="Call For Partners"
							style="flex flex-col items-center"
						/>
					</div>

					{/* Divider */}
					<div className="w-full h-px bg-[#c9a84c] opacity-40 mb-8" />

					{/* Two-column layout: stacks on mobile, side-by-side on lg+ */}
					<div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
						{/* Left column */}
						<div className="flex-1">
							<p className="text-sm sm:text-base leading-relaxed text-white/80 mb-8">
								We&apos;re inviting founders, CEOs, organisations, and ecosystem
								leaders to be part of B.I.G Conference 2026 — not just as
								sponsors, but as active participants in shaping the next
								generation of talent.
							</p>

							{/* Why Grid — 2 cols on sm+, 1 col on mobile */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									{
										title: "Talent Pipeline",
										text: "Early access to 2,000+ emerging professionals across disciplines",
									},
									{
										title: "Hire & Collaborate",
										text: "Identify potential hires, collaborators, and innovators",
									},
									{
										title: "Brand Visibility",
										text: "Position your brand within a high-impact youth ecosystem",
									},
									{
										title: "Social Impact",
										text: "Contribute to building sustainable workforce pathways in Nigeria",
									},
								].map(({ title, text }) => (
									<div
										key={title}
										className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
									>
										<p className="text-[#c9a84c] font-semibold text-sm mb-1">
											{title}
										</p>
										<p className="text-white/70 text-sm leading-snug">{text}</p>
									</div>
								))}
							</div>
						</div>

						{/* Right column */}
						<div className="flex-1 flex flex-col gap-6">
							{/* Ways to get involved */}
							<div>
								<p className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#c9a84c] mb-3">
									Ways to Get Involved
								</p>
								<ul className="flex flex-col gap-2">
									{[
										"Talent Partner — recruitment & access",
										"Sponsor — brand visibility & engagement",
										"Speaker / Contributor",
										"Opportunity Provider — jobs, internships, projects",
									].map((item) => (
										<li
											key={item}
											className="flex items-start gap-2 text-sm text-white/80"
										>
											<span className="mt-1.5 w-2 h-2 rounded-full bg-[#c9a84c] shrink-0" />
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* Email CTA */}
							<div className="bg-white/5 border border-[#c9a84c]/30 rounded-lg p-4 text-sm text-white/80 leading-relaxed">
								To partner or sponsor, email us at:
								<br />
								<a
									href="mailto:jane@stustle.com"
									className="text-[#c9a84c] font-semibold hover:underline break-all"
								>
									jane@stustle.com
								</a>
							</div>

							{/* Download button */}
							{/* <button className="w-full sm:w-auto self-start flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8943e] active:bg-[#a07830] text-[#3b2a0e] font-bold text-sm tracking-wide px-6 py-3 rounded-lg transition-colors duration-200"> */}
							<div className="self-start flex items-center justify-center gap-2">
								<Button type="button" style="primary">
									<a
										href="https://drive.google.com/file/d/1PIW5-nXeccyf7YoYGW7LKzOqtMuUKR_C/view?usp=drive_link"
										target="_blank"
										className="flex items-center gap-2"
									>
										<span>View Sponsors/Partners Deck</span>
										<FaRegArrowAltCircleRight />
									</a>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Partners;
