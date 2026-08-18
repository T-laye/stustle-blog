"use client";
import { steps } from "@/utils/contents";
import React, { useEffect, useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface StepItem {
  text: string;
  color: string;
}

interface TrackProps {
  track: string;
  items: StepItem[];
}

const StepTrack: React.FC<TrackProps> = ({ track, items }) => {
  return (
    <div className="step w-full">
      <h4 className="text-center text-lg sm:text-xl font-semibold text-primary">
        {track}
      </h4>

      <div className="flex flex-col gap-y-6 lg:flex-row lg:items-start lg:justify-center mt-8">
        {items.map((s, i) => (
          <div key={i} className="flex lg:flex-1 justify-center">
            <div className="flex flex-col items-center gap-3">
              <div
                style={{ backgroundColor: s.color }}
                className="h-14 w-14 min-w-14 rounded-full text-primary font-bold text-lg flex justify-center items-center border-2 border-primary/30"
              >
                {i + 1}
              </div>
              <p className="text-center text-sm sm:text-base max-w-[140px]">
                {s.text}
              </p>

              {/* Mobile connector: stacks below the label, linking down to the next step */}
              {i !== items.length - 1 && (
                <div className="w-[1px] h-8 bg-primary/30 lg:hidden" />
              )}
            </div>

            {/* Desktop connector: sits beside this item, linking across to the next step */}
            {i !== items.length - 1 && (
              <div className="hidden lg:block h-[1px] flex-1 bg-primary/30 mt-7 mx-1" />
            )}
          </div>
        ))}
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
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          ease: "power2.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "-10%", // Trigger at 10% of the section
          },
        }
      );
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
        <span>HOW IT WORKS</span>
      </h3>

      <div className="mt-10 flex flex-col gap-16">
        {steps?.map((s, i) => (
          <React.Fragment key={i}>
            <StepTrack track={s.track} items={s.items} />
            {i !== steps.length - 1 && (
              <div className="h-px w-full max-w-md mx-auto bg-primary/15" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Steps;
