/* eslint-disable @next/next/no-img-element */
import { capitalizeWords } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigCardKaizen = () => {
	return (
		<Link
			href="/events/big-conference"
			// target="_blank"
			className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[390px] lg:h-[380px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow relative"
		>
			<div className="h-1/2 min-h-[200px] bg-primary-activeCard rounded-xl overflow-hidden">
				<Image
					height={400}
					width={400}
					src="/bigConf/kaizen-design.png" // Fallback image
					alt="event image"
					className="object-cover object-center h-full w-full hover:scale-105 duration-150"
				/>
			</div>
			<div className="px-4 py-3 flex flex-col gap-1 justify-between h-full ">
				<div>
					<h3 className="text-xl font-medium line-clamp-1 text-start">
						{capitalizeWords("B.I.G Conference 2.0")}
					</h3>
					<div className="line-clamp-4 mt-2 text-sm text-gray-300">
						<p>
							This year&apos;s theme, Kaizen, centers on continuous improvement,
							discipline, and building sustainable success over time.
						</p>
					</div>
					<p className="text-xs mt-2 font-bold text-gray-300">
						August 2026
						{/* <br /> */}
						{/* {event?.time} WAT */}
					</p>
				</div>
				<div>
					{/* <p className="text-sm font-medium  text-end text-primary">{`${event?.attendees ||  event?.registrations?.length  || 0} `}</p> */}
					{/* <p className="text-sm font-medium  text-end text-primary">{`${(event?.attendees && event?.attendees + " " + "Attended") || (event?.registrations?.length && event?.registrations?.length + " " + "Registered") || 0 + " " + "Registered"} `}</p> */}
				</div>
			</div>
		</Link>
	);
};

export default BigCardKaizen;
