"use client";
import { services } from "@/utils/contents";
import React, { useEffect, useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);

interface PillarProps {
  pillar: string;
  subtitle: string;
  items: string[];
  color: string;
}

const PillarCard: React.FC<PillarProps> = ({ pillar, subtitle, items, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="hover:shadow-md duration-150 w-full rounded-2xl card p-6 sm:p-8 max-w-[500px]"
    >
      <h3 className="text-primary uppercase text-2xl sm:text-3xl font-bold text-left">
        {pillar}
      </h3>
      <p className="text-base sm:text-lg mt-1">{subtitle}</p>

      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <IoIosCheckmarkCircleOutline className="text-primary shrink-0 mt-1" size={20} />
            <span className="text-base sm:text-lg">{item}</span>
          </li>
        ))}
      </ul>
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
          rotateX: -180,
        },
        {
          opacity: 1,
          rotateX: 0,
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

      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-5 mt-8 sm:mt-16">
        {services.map((s, i) => (
          <PillarCard
            key={i}
            pillar={s.pillar}
            subtitle={s.subtitle}
            items={s.items}
            color={s.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
