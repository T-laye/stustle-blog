"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import CountDown from "./CountDown";
// import { useRouter } from "next/navigation";
import Decors from "../ui/Decors";
// import HeroInfoTab from "./HeroInfoTab";
// import Button from "../ui/Button";

export default function Hero() {
	const gotoGallery = () => {
		window.open(
			"https://drive.google.com/drive/folders/1voVUQWdnoyCCIObuVTWBttF9bI5ZpzQh?usp=drive_link",
			"_blank",
		);
	};
	const watchPlayBack = () => {
		window.open("https://youtu.be/iYcssUbNYYI?si=nFuXIg3Fj77plSgl", "_blank");
	};

	return (
		<section className="pt-[80px] herobg max-md:hero_bgconference relative">
			<Decors shape="dots" className="-left-32 top-[15%] max-sm:hidden" />
			<Decors shape="polygon" className="left-[24%] top-[20%] max-sm:hidden" />
			<Decors
				shape="rec"
				className="left-[48%] top-[30%] max-sm:top-[10%] max-sm:hidden"
			/>
			<Decors
				shape="polygon"
				className="sm:hidden left-[48%] top-[30%] max-sm:top-[14%]"
			/>
			<div className="min-h-[90vh] lg:max-hscreen flex max-lg:flex-col max-lg:gap-20">
				<div className="relative flex-1 flexg justify-center items-center max-sm:m-10 sm:px-8">
					<div className="mt-[15%]">
						<div className="lg:w-9/12">
							<Image
								alt="Stustlers"
								src="/bigConf/kaizen.svg"
								height={1000}
								width={1000}
								className="object-contain w-full h-full max-[300px]:max-h-[100px] max-[350px]:max-h-[120px]"
							/>
						</div>
						<p className="flex flex-col gap-3.75 max-lg:text-center max-lg:mx-auto text-lg md:text-2xl font-normal mt-4 sm:mt14 max-w-2xl">
							<span>Small Steps, Steady Growth</span>
							<span>August 2026 | Delta State, Nigeria | FREE Entry</span>
						</p>
						<Decors
							shape="ellipse"
							className="-left-[90%] -scale-x-100 -bottom-[90%] max-sm:hidden"
						/>
						<div className="relative flex gap-4 mt-8 sm:mt-14 max-lg:justify-center max-sm:flex-wrap lg:w-1/2">
							<Decors
								shape="dots"
								className="-scale-100 -right-[140%] -bottom-[50%] max-sm:hidden"
							/>
							{/* <Decors shape="ellipse" className="-left-[5%] bottom-[200%] " /> */}
							<Button style="primary" type="button" fn={gotoGallery}>
								<div className="flex items-center gap-2">
									<span>Secure your Ticket</span>
									<FaRegArrowAltCircleRight />
								</div>
							</Button>
							<Button style="secondary" type="button" fn={watchPlayBack}>
								<div className="flex items-center gap-2">
									<span>Apply to Volunteer</span>
									<FaRegArrowAltCircleRight />
								</div>
							</Button>
						</div>
						{/* <div className="mt-20  max-lg:justify-center flex">
              <CountDown />
            </div> */}
					</div>
				</div>
				<div className="lg:flex-1">
					<div className=" w-full h[50vh] lg:h-full">
						<Image
							alt="Stustlers"
							src="/bigConf/timer-img.png"
							height={1000}
							width={1000}
							className="object-cover object-top lg:object-top w-full h-full max-lg:hidden"
						/>
						<Image
							alt="Stustlers"
							src="/bigConf/timer-img.png"
							height={1000}
							width={1000}
							className="object-contain object-top lg:object-top w-full lg:hidden "
						/>
					</div>
				</div>
			</div>

			{/* <HeroInfoTab /> */}
		</section>
	);
}
