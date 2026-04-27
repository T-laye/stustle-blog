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
			className="sm:mt-10 pt-10 px-4 relative z-10 min-h-[50vh] overflow-hidden flex items-center sponsor_bg"
		>
			<div className="container py-10 mx-autom flex flex-col sm:flex-row items-center gap-10">
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
							text="CALL FOR PARTNERS, MENTORS & SPONSORS"
							style="flex flex-col items-center "
						/>
					</div>

					<div className="mt-5">
						<p className="text-center  mx-auto max-w-2xl sm:text-lg">
							Collaborate with us to provide meaningful job opportunities,
							empowering students to gain valuable experience and contribute to
							their futures. We also look forward to training our student
							hustlers, providing monthly financial aids and empowering them
							with digital skills. We&apos;re open for partnerships and
							collaborations to make these work. Kindly contact us
						</p>
					</div>

					<div className="flex flex-col gap-5 sm:flex-row sm:gap-10 mt-10 justify-center">
						<Button style="primary" type="button">
							<div className="flex items-center gap-2">
								<span>Reach out to us</span>
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
