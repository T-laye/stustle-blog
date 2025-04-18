"use client";
import { services } from "@/utils/contents";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface ServiceProps {
  title: string;
  image: string;
  color: string;
}

const ServiceCards: React.FC<ServiceProps> = (s) => {
  return (
    <div
      style={{ backgroundColor: s.color }}
      className={`hover:shadow-md duration-150 h-[94px] w-full flex gap-2 items-center rounded-lg max-w-[448px] card p-4`}
    >
      <div className="min-w-[70px] w-[70px] h-[70px] rounded-full overflow-hidden">
        <Image
          className="h-full w-full object-cover object-center "
          src={s.image}
          alt={s.title}
          height={100}
          width={100}
        />
      </div>

      <div className="flex-1 text-center text-[18px] ">
        {s.title.toUpperCase()}
      </div>
    </div>
  );
};

const Services = () => {
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
        section.querySelectorAll(".card"),
        {
          opacity: 0,
          // scale: 0,
          rotateX: -180,
          // backgroundColor: "#ff0000", // Starting color (red)
        },
        {
          opacity: 1,
          // scale: 1,
          rotateX: 0,
          // backgroundColor: "#00ff00", // Final color (green)
          stagger: 0.3,
          ease: "elastic.out(1.2, 0.5)",
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "-10%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef} // Attach the ref here
      id="services"
      className="pb-20 pt-10 px-4 container mx-auto min-h-[50vh]"
    >
      <h3 className="flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>WHAT WE OFFER</span>
      </h3>

      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 sm:mt-16 ">
        {services.map((s, i) => (
          <ServiceCards
            key={i}
            color={s.color}
            title={s.title}
            image={s.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
