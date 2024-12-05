"use client";
import { about } from "@/utils/contents";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      // Create timelines here after the component has mounted
      gsap.fromTo(
        section.querySelector(".container"),
        { opacity: 0, y: 150 },
        {
          opacity: 1,
          y: 0,
          // stagger: 0.4,
          // ease: "elastic.out(1, 0.7)",
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "-80%", // Adjust the start value as needed
          },
        }
      );

      const tlH = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          // pin: true,
          // pinSpacing: false,
          scrub: true,
          start: "-80%",
          end: "20%",
        },
      });
      const tlSection = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          // pin: true,
          // pinSpacing: false,
          scrub: true,
          start: "-150%",
          // markers: { startColor: "purple", endColor: "green" },
          end: "0%",
        },
      });

      tlH.fromTo(
        ".highlight",
        { color: "#191000" },
        { color: "#E29507", stagger: 1 }
      );
      tlSection.fromTo(section, { opacity: 0 }, { opacity: 1 });

      const tlHRemove = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: "-30%",
          end: "50%",
        },
      });
      tlHRemove.to(".highlight", { color: "#191000", stagger: 1 });

      const tlSplit = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          // markers: { startColor: "blue", endColor: "red" },
          start: "-80%",
          end: "10%",
          scrub: true,
        },
      });

      tlSplit.fromTo(".left-pic", { x: "10%" }, { x: "0" });
      tlSplit.fromTo(".right-pic", { x: "-40%" }, { x: "-20%" }, "<");
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pb-20 pt-10 px-4  container mx-auto min-h-[50vh] bg-white-background z-40"
    >
      <div className="flex justify-between gap-10  max-md:flex-wrap">
        <h3 className="sm:hidden flex items-center gap-2 sm:gap-4 ">
          <IoIosCheckmarkCircleOutline />
          <span className="span">ABOUT STUSTLE</span>
        </h3>
        <div className="md:w-1/2 md:flex  md:max-w-xl max-w-md mx-auto left-pic ">
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
            {about?.map((c, i) => (
              <li key={i} className="highlight">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
