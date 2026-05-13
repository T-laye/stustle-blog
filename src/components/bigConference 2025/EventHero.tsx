"use client";
import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import CountDown from "./CountDown";

gsap.registerPlugin(ScrollTrigger);

export default function EventHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const tlH = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        // pin: true, // Pin the section
        pinSpacing: false,
        scrub: true,
        start: "top -20%", // Pin immediately when entering viewport
        // end: "bottom", // Pin until the bottom of the section
      },
    });

    tlH.to(section, { y: 0 });

    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: -100, start: "top 0%" }, // Add start value for animation
      { opacity: 1, duration: 1, y: 0, stagger: 0.2 }
    );

    gsap.fromTo(
      ".image, .span, .button",
      { opacity: 0, scale: 0, start: "top 0%" }, // Add start value for animation
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.7)",
        duration: 0.6,
      }
    );
  }, []);

  return (
    <section className="">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 sm:px-8 bggreen-300 min-h-screen">
        <h1 className="button text-4xl sm:text-6xl max-w-xl text-center sm:mt-20  ">
          Your Next{" "}
          <span className="button text-6xl sm:text-9xl text-primary font-medium sm:leading-[100px]">
            BIG <br /> Step
          </span>{" "}
          Starts <br /> Here!
        </h1>
        <p className="button sm:text-2xl text-center max-w-lg">
          If you&apos;re a student or young graduate with big dreams, this is
          where you need to be.
        </p>

        <div className="button flex gap-5 sm:mt-10 w-full sm:max-w-[500px] flex-col sm:flex-row">
          <Button style="primary" type="button">
            Register Now
          </Button>
          <Button style="secondary" type="button">
            Become a Volunteer
          </Button>
        </div>

        {/* <div className="w-full mx-auto  mt-10">
          <CountDown />
        </div> */}
      </div>
    </section>
  );
}
