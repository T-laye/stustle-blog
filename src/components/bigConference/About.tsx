import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import Subtitle from "./Subtitle";

const About = () => {
  return (
    <section className="pt-10 sm:pt-20 lg:pt-40 px-4 sm:px-8 max-sm:pb-20">
      <div className="container min-h-[50vh]">
        <Subtitle text="About Event" />
        <div>
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
        </div>

        <div className="mt-5 sm:mt-10">
          <h2 className="font-semibold text-lg sm:text-xl">Other Details</h2>

          <div className="flex gap-2 mt-4 items-center">
            <SlLocationPin className="text-[20px] sm:text-2xl min-w-5" />
            <span className="sm:text-[18px]">
              Airport Road, Opposite Mosheshe Estate, Effurun, Delta State,
              Nigeria <br className="max-lg:hidden" /> (Exact details will be
              shared with registered participants only) | | Live Stream.
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
