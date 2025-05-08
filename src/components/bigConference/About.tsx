import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import Subtitle from "./Subtitle";

const About = () => {
  return (
    <section className="pt-28 lg:pt-52 px-4 sm:px-8 max-sm:pb-20">
      <div className="container min-h-[50vh]">
        <Subtitle text="About Event" />
        <p>
          The BIG Conference is designed to help you start now, grow faster, and
          build the future you want. If you have a business idea, a skill
          you&apos;re developing, or you&apos;re just ready to learn and grow,
          this is your chance to be seen, supported, and connected with real
          opportunities.
          <br />
          <br />
          It&apos;s our way of tackling the talent gap, by helping young people
          discover their potential, sharpen their skills, and position them in
          the right way.
          {/* <br />
          <br /> */}
          One community. Endless possibilities! Come join other bold students
          and graduates who aren&apos;t waiting for tomorrow to make their mark.
        </p>

        <div className="mt-5 sm:mt-10">
          <h2 className="font-semibold text-lg sm:text-xl">Other Details</h2>

          <div className="flex gap-2 mt-4">
            <SlLocationPin className="text-[20px] sm:text-2xl" />
            <span className="sm:text-[18px]">
              Delta State, Nigeria(In-person) | | Live Stream
            </span>
          </div>
          <div className="flex gap-2 mt-4">
            <IoCalendarOutline className="text-[20px] sm:text-2xl" />
            <span className="sm:text-[18px]">August 2025.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
