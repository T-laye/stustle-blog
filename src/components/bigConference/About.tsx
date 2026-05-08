import React from "react";
// import { SlLocationPin } from "react-icons/sl";
// import { IoCalendarOutline } from "react-icons/io5";
import Subtitle from "./Subtitle";
// import Link from "next/link";

const About = () => {
	return (
		<section className="pt-10 sm:pt-20 lg:pt-40 px-4 sm:px-8 max-sm:pb-20">
			<div className="container min-h-[50vh]">
				<Subtitle text="About Event" />
				<div className="sm:text-lg text-justify">
					The B.I.G (Begin, Innovate, Grow) Conference is an annual initiative
					by Stustle, created to equip students and young graduates with the
					skills, mindset, and access they need to thrive. Since launching in
					2025, the conference has impacted over 500 young people across Delta
					State, connecting them to industry insights, growth opportunities, and
					practical pathways to earning. This year&apos;s theme,{" "}
					<strong>Kaizen</strong>, centers on continuous improvement,
					discipline, and building sustainable success over time.
					<br />
					<br />
					We&apos;re scaling to 2,000+ participants and intentionally creating a
					space where:
					<br />
					<ul className="list-disc ml-10">
						<li>young people gain clarity, skills, and visibility</li>
						<li>
							founders, CEOs, and organizations access emerging talent and
							future workforce
						</li>
					</ul>
					<br />
					<br />
					<strong>WHAT TO EXPECT</strong>
					<br />
					<ul className="list-disc ml-10">
						<li>Keynote sessions</li>
						<li>
							Practical sessions on entrepreneurship, tech (Web2, Web3, AI), and
							personal growth
						</li>
						<li>Access to curated opportunities and industry exposure</li>
						<li>Networking & Opportunity Hackathon</li>
						<li>Student entrepreneurs Pitch</li>
					</ul>
				</div>

				{/* <div className="mt-8 mb-10 rounded-[9px] max-w-[1000px] mx-auto overflow-hidden w-full h-[200px] sm:h-[300px] md:h-[537px]">
					<iframe
						// width="560"
						className="w-full h-full object-cover"
						// height="315"
						src="https://www.youtube.com/embed/iYcssUbNYYI?si=gTzU8v5YkyM1iFb7"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div> */}
				{/* <div>
          The BIG Conference is designed to help you start now, grow faster, and
          build the future you want. If you have a business idea, a skill
          you&apos;re developing, or you&apos;re just ready to learn and grow,
          this is your chance to be seen, supported, and connected with real
          opportunities.
          <br />
          <br />
          This year, we&apos;re focused on{" "}
          <strong>Building Sustainable talents among young people</strong>
          <br />
          <br />
          <strong>We aim to:</strong>
          <ul className="list-disc pl-4">
            <li>
              Inspire students and young professionals to take bold steps in
              entrepreneurship and career development.
            </li>
            <li>Equip young people with practical skills for growth.</li>
            <li>
              Foster community spirit and collaboration amongst student
              entrepreneurs and innovators.
            </li>
            <li>Connect students with industry leaders, and mentors</li>
          </ul>
        </div> */}

				{/* <div className="mt-5 sm:mt-10">
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
				</div> */}
			</div>
		</section>
	);
};

export default About;
