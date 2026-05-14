/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import type { Review } from "../../../types/sanityTypes";
import { BsQuote } from "react-icons/bs";
import Subtitle from "./Subtitle";

const testimonials = [
	{
		name: "Bernice Emoghene",
		comment:
			"B.I.G made me know myself more and I got more serious because seeing my mate coming out to launch a business I was amazed and I'm challenging myself",
	},
	{
		name: "Basil Mfon",
		comment:
			"It definitely a wonderful experience for me, I served as a volunteer and I learnt in the lace of service that in setting up programs like this preparation is key and having to see it all come to the end successfully and being part of it was fulfilling a bit yeah. Big Kudos to Jane Agadia and the BIG Team ",
	},
	{
		name: "Benita",
		comment:
			"Jane the event was massively successful, yesterday I even got inspired too, and learnt about things I was doing that was slowing down my progress. And best of all, omo I got a new gig oo, one of my biggest yet😂😂🙏🏼. So thank you, I'm really happy that I got to be a part of a hackathon, not just part but trusted enough to organise the whole thing. Thank you for the opportunity, I definitely owe you one 😂😂",
	},
	{
		name: "Dumebi",
		comment:
			"One of the mind-expanding places I went to was the BIG conference organized by Stustle, tagged 'Begin, Innovate and Grow'. The coming together of young, creative, and developing minds made the conference worthwhile, and it got me thinking about how we often limit the extent to which our minds can conceive ideas due to limited exposure. One key lesson I took home that day was the idea of 'just starting,' whether rough or small, as I listened to stories of individuals who reached remarkable places simply by starting and not necessarily having it all figured out.",
	},
	{
		name: "Jacobs-Aje",
		comment:
			"The B.I.G. conference was a reminder that real growth happens little by little. I’m glad I got to be part of it, and I’m taking these lessons with me. A big thank you to Jane Agadia and the entire Stustle team for making this conference possible, and to the speakers and sponsors whose contributions made it a success. ",
	},
	{
		name: "Joy Ekohimi",
		comment:
			"It's been over 2 weeks now and i'm thrilled to have volunteered at the B.I.G (Begin, Innovate, Grow) Conference 2025, an event dedicated to empowering young people to find their purpose and drive sustainable growth. I am grateful for the experience to contribute to such a meaningful initiative and to be surrounded by so much ambition and potential. A huge thank you to the organizers and my fellow volunteers and Congratulations to the entire team at Stustle, Cake Wallet, and all partners for a successful event. I'm ready to see the impact this generation will make and also to be a part of it😁",
	},
	{
		name: "Dara Charles",
		comment:
			"Apart from TEDx, one of Africa's biggest tech event, I attended one of the biggest tech event in Warri, Delta state and it was mind-blowing to see Young minds can put something this huge😊... It was amazing connecting with like-minds, learn, unlearn, gain more insights and hear resourceful speakers dish out powerful words of transformation. Mr Great said something that stuck 'Don't just get a hard skill, get a soft skill. soft skill will take your more farther than the hard skills' Grateful to have volunteered at the B.I.G Conference 2025 (Begin • Innovate • Grow) ",
	},
	{
		name: "Debby Agadia",
		comment:
			"We had one of the biggest student focused event in Warri last Saturday hosted by Stustle. It took a whole lot to put together from the planning till the main event. I was honoured to be the program manager and thanks to the joint effort of every volunteer and team lead, the event was a huge success. Stustle is changing the narrative about Warri and opening the minds of young people to growth and opportunities. There have been so many testimonials from the event already and much more to come. I'm super grateful to God for making this a reality. First impression they say, matters a lot and Stustle made a very good first impression with this event. Cheers to many more life changing conferences to come 🥂",
	},
];

const ReviewCard = ({ comment, name }: { comment: string; name: string }) => {
	return (
		<div className="min-w-[310px] lg:min-w-[528px] h-[290px] rounded-lg p-4 bg-primary-light shadow-md flex flex-col justify-between">
			<div className="flex">
				<div className="h-12 min-w-12 w-12">
					<BsQuote className="text-5xl text-primary" />
				</div>
				<div>
					<p className="text- line-clamp-[9]">{comment}</p>
				</div>
			</div>
			<div>
				<p>{name}</p>
				{/* <p className="text-primary">{role}</p> */}
			</div>
		</div>
	);
};

const Review: React.FC = () => {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	const autoScrollInterval = useRef<number | null>(null);

	const scrollLeft = (): void => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -322,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = (): void => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: 322,
				behavior: "smooth",
			});
		}
	};

	const startAutoScroll = (): void => {
		autoScrollInterval.current = window.setInterval(() => {
			if (scrollContainerRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } =
					scrollContainerRef.current;
				const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

				scrollContainerRef.current.scrollBy({
					left: atEnd ? -scrollWidth : 312,
					behavior: "smooth",
				});
			}
		}, 5000); // Adjust interval time as needed
	};

	const stopAutoScroll = (): void => {
		if (autoScrollInterval.current !== null) {
			clearInterval(autoScrollInterval.current);
			autoScrollInterval.current = null;
		}
	};

	useEffect(() => {
		startAutoScroll();
		return () => stopAutoScroll(); // Clean up interval on unmount
	}, []);

	return (
		<section
			id="big-reviews"
			className="pb-20 pt-16 px-4 container mx-auto min-h-[50vh]"
		>
			<Subtitle text="Review & Testimonials from BIG Conference 2025" />
			<div
				ref={scrollContainerRef}
				className="mt-8 sm:mt-16 flex gap-4 md:gap-8 overflow-x-auto scroll-snap-x-mandatory scroll-smooth pb-10"
				onMouseEnter={stopAutoScroll} // Pause auto-scroll on hover
				onMouseLeave={startAutoScroll} // Resume auto-scroll when leaving
			>
				{testimonials?.map((t, i) => (
					<ReviewCard key={i} comment={t.comment} name={t.name} />
				))}
			</div>

			<div className="flex justify-center items-center gap-4 ">
				<button
					className="h-8 w-8 text-gray-500 rounded-full bg-gray-100 flex justify-center items-center active:bg-primary-light active:text-primary duration-150"
					onClick={scrollLeft}
					aria-label="Scroll left"
				>
					<GoArrowLeft size={24} />
				</button>
				<button
					className="h-8 w-8 text-gray-500 rounded-full bg-gray-100 flex justify-center items-center active:bg-primary-light active:text-primary duration-150"
					onClick={scrollRight}
					aria-label="Scroll right"
				>
					<GoArrowRight size={24} />
				</button>
			</div>
		</section>
	);
};

export default Review;
