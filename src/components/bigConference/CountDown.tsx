/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCalendarOutline, IoHourglassOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";

const CountDown = () => {
	return (
		<div className="pt-20 md:px-5">
			<div className="container rounded-[20px] overflow-hidden flex flex-col md:flex-row justify-between">
				<div className="md:w-1/2 count_bg flex flex-col justify-end px-5 pb-12 max-md:min-h-[500px]">
					<Timer />
				</div>
				<div className="flex-1 md:w-1/2 px-8 py-[40px] bg-[#E29507]/10">
					<p className="text-base md:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
						turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
						nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
						tellus elit sed risus. Maecenas eget condimentum velit, sit amet
						feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
						conubia{" "}
					</p>
					<div className="max-sm:w-2/3 w-1/2 mt-6">
						<Button
							style="primary"
							type="button"
							// fn={gotoGallery}
						>
							<div className="flex items-center gap-2">
								<span>Secure your Ticket</span>
								<FaRegArrowAltCircleRight />
							</div>
						</Button>
					</div>

					<div className="mt-5 sm:mt-10">
						<h2 className="font-semibold text-lg sm:text-xl">Other Details</h2>

						<div className="flex gap-2 mt-4 items-center">
							<SlLocationPin className="text-[20px] sm:text-2xl min-w-5" />
							<span className="sm:text-[18px]">
								Effurun, Delta State, Nigeria | | Live Stream.
							</span>
						</div>
						<div className="flex gap-2 mt-4">
							<IoCalendarOutline className="text-[20px] sm:text-2xl" />
							<span className="sm:text-[18px]">9th August, 2025.</span>
						</div>
						<div className="flex gap-2 mt-4">
							<GoClock className="text-[20px] sm:text-2xl" />
							<span className="sm:text-[18px]">10:00 am</span>
						</div>
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
			const targetDate = new Date(now.getFullYear(), 7, 9, 23, 59, 59); // Aug 8th, 11:59:59 PM
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
