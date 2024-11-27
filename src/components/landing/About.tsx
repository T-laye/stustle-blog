import { about } from "@/utils/contents";
import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="pb-20 pt-10 px-4  container mx-auto min-h-[50vh]">
      <div className="flex justify-between gap-10  max-md:flex-wrap">
        <h3 className="sm:hidden flex items-center gap-2 sm:gap-4 ">
          <IoIosCheckmarkCircleOutline />
          <span>ABOUT STUSTLE</span>
        </h3>
        <div className="md:w-1/2 md:flex  md:max-w-xl max-w-md mx-auto ">
          <Image
            src="/images/about_image.png"
            alt="about"
            height={500}
            width={500}
            className="w-full object-contain object-center"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="max-sm:hidden flex items-center gap-2 sm:gap-4">
            <IoIosCheckmarkCircleOutline />
            <span>ABOUT STUSTLE</span>
          </h3>
          <h2 className="max-sm:text-center  text-primary mt-4">
            A TEAM OF DEDICATED AND FOCUS DRIVEN INDIVIDUALS
          </h2>

          <ul className="list-disc pl-4 text-base md:text-xl flex flex-col gap-3 mt-3">
            {about?.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
