"use client";
import { steps } from "@/utils/contents";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface StepsProps {
  index: number;
  text: string;
  color: string;
}

const StepCards: React.FC<StepsProps> = ({ color, index, text }) => {
  return (
    <div
      className={`min-h-fit w-full  ${index === 3 && "col-start-2 row-start-3"} ${index === 2 && "col-start-1"} ${index === 5 && "col-start-3 row-start-1 "} ${index === 3 && "row-start-2"}  `}
    >
      {" "}
      <div className="w-full max-w-[428px] mx-auto flex flex-col items-center px-4 gap-8">
        <div
          style={{ backgroundColor: color }}
          className="h-[116px] w-[98px] bg-green-400 rounded-full text-[64px] flex justify-center items-center"
        >
          0{index}
        </div>
        <p className="text-center text-lg">{text}</p>
      </div>
    </div>
  );
};

const Steps = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Explicitly define the ref type

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      gsap.fromTo(
        section.querySelector(".container"),
        { opacity: 0, y: 150 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "-30%", // Adjust the start value as needed
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll(".step"),
        {
          opacity: 0,
          y: 150, // Start slightly below
          scale: 0.8, // Shrunk for added depth
          // rotationY: 180, // Start flipped on the X-axis
        },
        {
          opacity: 1,
          y: 0, // Move to original position
          scale: 1, // Full scale
          // rotationY: 0, // Flip to front
          stagger: 0.1,
          // ease: "elastic.out(1, 1.2)", // Higher bounce factor for a stronger elastic feel
          ease: "elastic.out(1.2, 0.5)",
          duration: 1, // Smooth animation
          scrollTrigger: {
            trigger: section,
            start: "-10%", // Trigger at 10% of the section
          },
        }
      );

      // gsap.fromTo(
      //   section.querySelectorAll(".step"),
      //   {
      //     opacity: 0,
      //     y: 100,
      //     // scale: 0,
      //     // rotateX: -180,
      //     // backgroundColor: "#ff0000", // Starting color (red)
      //   },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     // scale: 1,
      //     // rotateX: 0,
      //     // backgroundColor: "#00ff00", // Final color (green)
      //     stagger: 0.1,
      //     ease: "elastic.out(1, 1.2)",
      //     duration: 0.5,
      //     scrollTrigger: {
      //       trigger: section,
      //       start: "-10%",
      //     },
      //   }
      // );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="steps"
      className="pb-20 pt-10 px-4  container mx-auto min-h-[50vh]"
    >
      <h3 className=" flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>GET IT DONE IN 5 EASY STEPS</span>
      </h3>

      <div className="step flex flex-col items-center mt-10 md:grid  grid-rows-3 grid-cols-3 gap-16">
        <div className=" max-w-[250px] md:max-w-[300px] w-1/2 md:w-4/5 mx-auto row-start-1 col-start-2 row-span-2">
          <Image
            src="/images/steps_image.png"
            alt="rocket"
            height={500}
            width={500}
            className="w-full object-contain object-center"
          />
        </div>
        {steps?.map((s, i) => (
          <StepCards key={i} color={s.color} text={s.text} index={i + 1} />
        ))}
      </div>
    </section>
  );
};

export default Steps;
