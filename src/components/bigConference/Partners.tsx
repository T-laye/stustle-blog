"use client";
import React from "react";
import Subtitle from "./Subtitle";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Button from "../ui/Button";
// import Button from "../ui/Button";

const Partners = () => {
	// const joinStustle = () => {
	//   window.open(
	//     "https://wa.me/2348115237006?text=Hi%2C%20My%20name%20is%20_______%20I%27d%20love%20to%20work%20with%20you%20guys.",
	//     "_blank" // Opens the link in a new tab
	//   );
	// };

	return (
		<section
			id="contact"
			className="sm:mt-10 pt-10 pb-10 px-4 relative z-10 min-h-[50vh] overflow-hidden flex items-center sponsor_bg"
		>
			<div className="container py-10 mx-auto justify-between flex flex-col sm:flex-row items-center gap-10">
				<div>
					<div className="overflow-hidden w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#fff]">
						<Image
							alt="Image"
							src="/bigConf/sponsors-img.png"
							className="h-full w-full object-cover object-top"
							height={500}
							width={500}
						/>
					</div>
				</div>
				<div className="sm:w-1/2 mx-auto">
					<div className="flex flex-col items-center justify-center">
						<Subtitle
							text="CALL FOR PARTNERS & INDUSTRY LEADERS"
							style="flex flex-col items-center "
						/>
					</div>

					<div className="">
						<p className="text-center  mx-auto max-w-2xl sm:text-lg">
							We&apos;re inviting founders, CEOs, organizations, and ecosystem
							leaders to be part of B.I.G Conference 2026, not just as sponsors,
							but as active participants in shaping the next generation of
							talent.
							<br />
							<strong>Why Participate:</strong>
							<br />
							<ul className="list-disc">
								<li>Gain early access to a pipeline of emerging talent</li>
								<li>Identify and engage potential hires or collaborators</li>
								<li>
									Position your brand within a high-impact youth ecosystem
								</li>
								<li>Contribute to building sustainable workforce pathways</li>
							</ul>
							<br />
							<strong>Ways to Get Involved:</strong>
							<br />
							<ul className="list-disc">
								<li>Talent Partner (recruitment & access)</li>
								<li>Sponsor (brand visibility & engagement)</li>
								<li>Speaker / Contributor</li>
								<li>Opportunity Provider (jobs, internships, projects)</li>
							</ul>
							<br />
							To partner/sponsor, kindly send an email to:{" "}
							<a className="underline" href="mailto:jane@stustle.com">
								jane@stustle.com
							</a>
						</p>
					</div>

					<div className="flex flex-col gap-5 sm:flex-row sm:gap-10 mt-10 justify-center">
						<Button style="primary" type="button">
							<div className="flex items-center gap-2">
								<span>Send us a Message</span>
								<FaRegArrowAltCircleRight />
							</div>
						</Button>
						<Button style="primary" type="button">
							<div className="flex items-center gap-2">
								<span>View Sponsors Deck</span>
								<FaRegArrowAltCircleRight />
							</div>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
