"use client";
import { bigConferenceFaqs } from "@/utils/contents";
import React, { useEffect, useRef } from "react";
// import { RiQuestionFill } from "react-icons/ri";
import { FaqList } from "../ui/FaqList";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Subtitle from "./Subtitle";

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
      className="flex flex-col lg:flex-row pb-20 pt-10 sm:pt-20"
    >
      {/* FAQ List Section */}
      <div className="flex-1 px-4 sm:px-8">
        <div className="mt-8">
          <div className="flex flex-col items-center justify-center mb-[72px]">
            <Subtitle
              text="Questions you might have"
              style="flex flex-col items-center "
            />
          </div>

          <ul className="list-none max-w-[614px] mx-auto mt-7 space-y-4">
            {bigConferenceFaqs.map((faq, index) => (
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
