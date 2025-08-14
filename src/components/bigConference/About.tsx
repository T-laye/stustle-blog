import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import Subtitle from "./Subtitle";
// import Link from "next/link";

const About = () => {
  return (
    <section className="pt-10 sm:pt-20 lg:pt-40 px-4 sm:px-8 max-sm:pb-20">
      <div className="container min-h-[50vh]">
        <Subtitle text="About Event" />
        <div>
          The B.I.G Conference 2025 was nothing short of transformational!
          Designed to help young people start now, grow faster, and build the
          future they want, the conference brought together vibrant students,
          graduates, and young professionals who are ready to innovate and lead.
          <br />
          <br />
          This year&apos;s theme, “Fostering Sustainable Talent Growth Among
          Young People,” came alive as we inspired and equipped attendees with
          the mindset, skills, and networks needed to thrive in today&apos;s
          fast-changing world.
          <br />
          <br />
          We had over 200 in-person participants and 300+ virtual attendees from
          across Nigeria. The day was packed with powerful keynote sessions,
          thought-provoking panel discussions, a fireside chat, an electrifying
          student pitch competition, a hackathon, and unforgettable networking
          moments. Winners left with cash prizes, valuable gifts, and mentorship
          opportunities.
          <br />
          <br />
          {/* <p>
            <Link href="#">Watch the Replay Here (insert link)</Link>
          </p> */}
        </div>

        <div className="mt-8 mb-10 rounded-[9px] max-w-[1000px] mx-auto overflow-hidden w-full h-[200px] sm:h-[300px] md:h-[537px]">
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
        </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
