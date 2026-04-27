import React from "react";
import Subtitle from "./Subtitle";
import Image from "next/image";
import { sponsors } from "../../utils/contents";


export default function Sponsors() {
	return (
		<section className="px-4 sm:px-8 pt-20 pb-20 md:pt-40">
			<div className="container">
				<div className="flex flex-col items-center justify-center">
					<Subtitle text="Partners" style="flex flex-col items-center " />
				</div>

				<div className="flex justify-evenly items-center sm:items-end gap-20 animate-scroll">
					{sponsors.map((content, index) => (
						<div
							key={index}
							className="min-h-28 min-w-28 h-28 w-28 place-self-center"
						>
							<Image
								width={100}
								height={100}
								className="w-full h-full object-contain"
								src={content.logo}
								alt={content.name}
							/>
						</div>
					))}
				</div>
				<div className="flex justify-evenly items-center sm:items-end mt-16 gap-20 animate-scroll-reverse">
					{/* <div className="grid grid-cols-3 justify-center gap-4"> */}
					{/* <div className="flex  gap-10 items-center animatescroll whitespace-nowrap bg-red-00"> */}
					{sponsors.reverse().map((content, index) => (
						<div
							key={index}
							className="min-h-28 min-w-28 h-28 w-28 place-self-center"
						>
							<Image
								width={100}
								height={100}
								className="w-full h-full object-contain"
								src={content.logo}
								alt={content.name}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
