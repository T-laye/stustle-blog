"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [stustlersCount, setStustlersCount] = useState(0);
  const sectionRef = useRef(null);

  const requestAService = () => {
    window.open(
      "https://wa.me/2348115237006?text=Hi%2C%20I%27m%20interested%20in%20your%20service.%20(Please%20specify%20the%20service)",
      "_blank" // Opens the link in a new tab
    );
  };

  const becomeAStustler = () => {
    window.open(
      "https://wa.me/2348115237006?text=Hi%2C%20My%20name%20is%20_______%20I%27d%20love%20to%20work%20with%20you%20guys.",
      "_blank" // Opens the link in a new tab
    );
  };

  const startCounting = (
    target: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const intervalDuration = 10; // Interval duration in milliseconds

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval); // Stop the interval when target is reached
          return target;
        }
        return prevCount + 1; // Increment the count
      });
    }, intervalDuration);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  };

  useEffect(() => {
    startCounting(80, setClientsCount);
    startCounting(250, setJobsCount);
    startCounting(30, setStustlersCount);
  }, []);

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
    <div ref={sectionRef} className="hero_bg">
      <div className="pb-20 container mx-auto min-h-screen pt-28  sm:pt-[160px]  px-4 gap-10 sm:gap-20  flex flex-col lg:flex-row justify-between ">
        <div className="w-full   ">
          <div className="  items-center lg:items-start flex  flex-col hero-text ">
            <div className="w-5/6 sm:w-4/5  lg:max-w-[500px] ">
              <Image
                height={200}
                width={200}
                src="/images/hero-text.svg"
                alt="Stustle"
                className="h-full w-full object-contain "
              />
            </div>

            <p className="text-center lg:text-start text-lg md:text-xl w-5/6 lg:max-w-[400px] mt-3 leading-6">
              Making life easy for students, professionals and business owners.
            </p>

            <div className="flex space-x-8 justify-between mt-5 w-11/12 max-w-[300px] ">
              <div className="flex flex-col gap-1 justify-center">
                <span className="text-xl md:text-2xl text-primary font-bold span">
                  {clientsCount}+
                </span>{" "}
                <span className="text-base md:text-lg  -mt-2 span">
                  Clients
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <span className="text-xl md:text-2xl text-primary font-bold span">
                  {jobsCount}+
                </span>{" "}
                <span className="text-base md:text-lg  -mt-2 span">
                  Jobs done
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <span className="text-xl md:text-2xl text-primary font-bold span">
                  {stustlersCount}+
                </span>{" "}
                <span className="text-base md:text-lg span -mt-2">
                  Stustlers
                </span>
              </div>
            </div>

            <div className="flex gap-5 mt-10 w-full sm:max-w-[500px] flex-col sm:flex-row">
              <Button style="primary" type="button" fn={requestAService}>
                Request a Service
              </Button>
              <Button style="secondary" type="button" fn={becomeAStustler}>
                Become a Stustler
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 h-fit w-full ">
          <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-l-full place-self-end image">
            <Image
              src="/images/virtual_assistant.jpg"
              className="h-full w-full object-cover object-center"
              height={500}
              width={500}
              alt="images"
            />
          </div>
          <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-full image">
            <Image
              src="/images/designer.jpg"
              className="h-full w-full object-cover object-center"
              height={500}
              width={500}
              alt="images"
            />
          </div>
          <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-full place-self-end image">
            <Image
              src="/images/web_dev.jpg"
              className="h-full w-full object-cover object-center"
              height={500}
              width={500}
              alt="images"
            />
          </div>
          <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-r-full image">
            <Image
              src="/images/cleaning.jpg"
              className="h-full w-full object-cover object-center"
              height={500}
              width={500}
              alt="images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
