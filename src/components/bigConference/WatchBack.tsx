import React from "react";
import { FaInstagram, FaPlay, FaYoutube } from "react-icons/fa";
import Subtitle from "./Subtitle";
import { Reveal } from "./motion";
import {
	DAY_1_REPLAY_URL,
	DAY_2_REPLAY_URL,
	HIGHLIGHTS_VIDEO_URL,
} from "./links";

const videos = [
	{
		title: "Conference Highlights",
		text: "The best moments of B.I.G. 2026 in one short video.",
		cta: "Watch on Instagram",
		href: HIGHLIGHTS_VIDEO_URL,
		icon: <FaInstagram />,
	},
	{
		title: "Day 1 Replay",
		text: "The full virtual session from 21 August.",
		cta: "Watch on YouTube",
		href: DAY_1_REPLAY_URL,
		icon: <FaYoutube />,
	},
	{
		title: "Day 2 Replay",
		text: "The full session from 22 August in Effurun, Delta State.",
		cta: "Watch on YouTube",
		href: DAY_2_REPLAY_URL,
		icon: <FaYoutube />,
	},
];

export default function WatchBack() {
	return (
		<section id="big-watch" className="px-4 sm:px-8 pt-16 sm:pt-20 pb-20">
			<div className="container">
				<div className="text-center max-w-2xl mx-auto">
					<Subtitle text="Watch B.I.G. 2026" />
					<p className="sm:text-lg text-foreground/70">
						Missed a session, or want to hear it again? Catch the highlights and
						the full replays.
					</p>
				</div>

				<Reveal
					stagger={0.15}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
				>
					{videos.map(({ title, text, cta, href, icon }) => (
						<a
							key={title}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col rounded-3xl bg-gradient-to-br from-[#2b1c00] via-black to-[#3a2600] p-6 text-white hover:-translate-y-1 hover:shadow-xl duration-300"
						>
							<span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg group-hover:scale-110 duration-300">
								<FaPlay className="ml-1" />
							</span>
							<h3 className="text-xl sm:text-2xl font-extrabold text-left mt-6">
								{title}
							</h3>
							<p className="text-white/70 mt-2 flex-1">{text}</p>
							<span className="flex items-center gap-2 font-semibold text-primary mt-6">
								{icon}
								{cta}
							</span>
						</a>
					))}
				</Reveal>
			</div>
		</section>
	);
}
