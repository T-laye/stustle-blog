"use client";
import { faqs } from "@/utils/contents";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { RiQuestionFill } from "react-icons/ri";
import { FaqList } from "../ui/FaqList";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger as a GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
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
      ref={sectionRef}
      id="faq"
      className="flex flex-col lg:flex-row min-h-[852px] mb-10 sm:mb-40"
    >
      {/* FAQ Image Section */}
      <div className="bg-[#e2950720] flex-1 flex items-center p-4">
        <div className="sm:max-w-[300px] lg:max-w-[523.66px] mx-auto">
          <Image
            height={600}
            width={600}
            src="/images/faq.png"
            alt="faq"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* FAQ List Section */}
      <div className="flex-1 px-4 sm:px-8">
        <div className="mt-16 md:mt-32">
          <h3 className="flex items-center gap-2 sm:gap-4 text-primary justify-center text-xl sm:text-2xl font-semibold">
            <RiQuestionFill size={28} />
            <span>FREQUENTLY ASKED QUESTIONS (FAQ)</span>
          </h3>

          <ul className="list-none max-w-[614px] mx-auto mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <FaqList
                key={index} // Replace with `faq.id` if your data has unique IDs
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
