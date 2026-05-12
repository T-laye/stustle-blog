/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCalendarOutline, IoHourglassOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { useRouter } from "next/navigation";

const CountDown = () => {
	const router = useRouter();

	const registerNow = () => {
		router.push("#big-tickets");
	};
	const watchHighlights = () => {
		window.open("https://youtu.be/iYcssUbNYYI?si=nFuXIg3Fj77plSgl", "_blank");
	};

	return (
		<div className="pt-20 md:px-5">
			<div className="container rounded-[20px] overflow-hidden flex flex-col md:flex-row justify-between">
				<div className="md:w-1/2 count_bg flex flex-col justify-end px-5 pb-12 max-md:min-h-[500px]">
					<Timer />
				</div>
				<div className="flex-1 md:w-1/2 px-8 py-[40px] bg-[#E29507]/10">
					<p className="text-base md:text-lg">
						A high-impact experience bringing together ambitious young people
						and forward-thinking founders, CEOs, and industry leaders, designed
						to connect talent to real work opportunities.
						<br />
						<br />
						<strong>Key Stats :</strong>
						<br />
						<br />
						<strong>800+</strong> In-Person Attendees
						<br />
						<strong>1,200+</strong> Virtual Participants
						<br />
						<strong>500K+</strong> In Prizes
					</p>
					<div className="mt-5 sm:mt-5">
						{/* <h2 className="font-semibold text-lg sm:text-xl">Other Details</h2> */}

						<div className="flex gap-2 mt-4 items-center">
							<SlLocationPin className="text-[20px] text-primary sm:text-2xl min-w-5" />
							<span className="sm:text-[18px]">Delta State, Nigeria.</span>
						</div>
						<div className="flex gap-2 mt-4">
							<IoCalendarOutline className="text-[20px] sm:text-2xl text-primary" />
							<span className="sm:text-[18px]">August, 2026.</span>
						</div>
						{/* <div className="flex gap-2 mt-4">
							<GoClock className="text-[20px] sm:text-2xl text-primary" />
							<span className="sm:text-[18px]">10:00 am</span>
						</div> */}
					</div>
					{/* <div className="max-sm:w-full md:w-4/5 sm:w-1/2 mt-6 max-w-[260px]"> */}
					<div className="flex max-xl:flex-col gap-4 mt-6 max-sm:w-full md:w-4/5 sm:w-1/2 max-w-[260px]">
						<Button style="primary" type="button" fn={registerNow}>
							<div className="flex items-center gap-2">
								<span>Secure Attendee Ticket</span>
								<FaRegArrowAltCircleRight />
							</div>
						</Button>
						<Button style="secondary" type="button" fn={watchHighlights}>
							<div className="flex items-center gap-2">
								<span>Watch 2025 Highlights</span>
								{/* <FaRegArrowAltCircleRight /> */}
							</div>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

function Timer() {
	const style = `flex-1 flex justify-center items-center flex-col gap-5`;
	const style2 = `flex flex-col items-center justify-center gap-1 text-sm sm:text-base`;
	const textShadowStyle = { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" };
	const [defined] = useState(true);

	const [timeLeft, setTimeLeft] = useState({
		days: "00",
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const targetDate = new Date(now.getFullYear(), 7, 22, 23, 59, 59); // Aug 8th, 11:59:59 PM
			const difference = targetDate.getTime() - now.getTime();

			if (difference <= 0) {
				return { days: "00", hours: "00", minutes: "00", seconds: "00" };
			}

			return {
				days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
					2,
					"0",
				),
				hours: String(
					Math.floor((difference / (1000 * 60 * 60)) % 24),
				).padStart(2, "0"),
				minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
					2,
					"0",
				),
				seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
			};
		};

		setTimeLeft(calculateTimeLeft()); // Ensure client gets correct initial value
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="w-full px-4 relative mx-auto rounded-xl bg-white/15 border border-white/10 shadow-md backdrop-blur-[4px] pb-5">
			{/* <img alt="" className="absolute -top-12 right-16" src="/images/pin.svg" />
			<img alt="" className="absolute -top-12 left-16" src="/images/pin.svg" /> */}
			<div className={`${style}`}>
				<IoHourglassOutline className="text-primary text-3xl sm:text-5xl " />
				{defined && (
					<div
						className="text-shadow-lg flex items-center gap-2 sm:gap-4 text-[#FFF6E6]"
						style={textShadowStyle}
					>
						<div className={style2}>
							<span className="font-digitNumbers text-2xl">
								{timeLeft.days}
							</span>
							<span className="">Days</span>
						</div>
						<span className="text-4xl">:</span>
						<div className={style2}>
							<span className="font-digitNumbers text-2xl">
								{timeLeft.hours}
							</span>
							<span className="">Hours</span>
						</div>
						<span className="text-4xl">:</span>
						<div className={style2}>
							<span className="font-digitNumbers text-2xl">
								{timeLeft.minutes}
							</span>
							<span>Minutes</span>
						</div>
						<span className="text-4xl">:</span>
						<div className={style2}>
							<span className="font-digitNumbers text-2xl">
								{timeLeft.seconds}
							</span>
							<span className="">Seconds</span>
						</div>
					</div>
				)}
				{/* <div className={`font-digitNumbers text-xl sm:text-4xl text-center`}>
          August 2025
        </div> */}
			</div>
		</div>
	);
}

export default CountDown;
