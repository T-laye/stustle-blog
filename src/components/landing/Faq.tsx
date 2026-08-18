"use client";
import { faqs } from "@/utils/contents";
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
          stagger: 0.1,
          ease: "elastic.out(1.2, 0.5)",
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "-50%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="pt-10 pb-20 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Background accents, matching other sections */}
      <div className="pointer-events-none absolute -top-20 -left-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl" />

      <div className="container mx-auto relative">
        <h3 className="flex items-center gap-2 sm:gap-4 text-primary justify-center text-xl sm:text-2xl font-semibold">
          <RiQuestionFill size={28} />
          <span>FREQUENTLY ASKED QUESTIONS (FAQ)</span>
        </h3>

        <ul className="list-none grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2 max-w-5xl mx-auto mt-10">
          {faqs.map((faq, index) => (
            <FaqList
              key={index} // Replace with `faq.id` if your data has unique IDs
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
