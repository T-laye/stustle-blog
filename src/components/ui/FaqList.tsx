import { FC, useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { gsap } from "gsap";

interface FaqProps {
  question: string;
  answer: string;
}

export const FaqList: FC<FaqProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);

    if (answerRef.current) {
      if (open) {
        // Animate collapse
        gsap.to(answerRef.current, {
          duration: 0.3,
          height: 0,
          opacity: 0,
          ease: "power2.inOut",
        });
      } else {
        // Animate expand
        gsap.to(answerRef.current, {
          duration: 0.3,
          height: "auto",
          opacity: 1,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <li className="border-b border-[#d9d9d9] pb-4 cursor-pointer card">
      <button
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${question}`}
        className="flex justify-between items-center w-full text-left gap-3"
      >
        <h4 className="font-medium text-base sm:text-lg">{question}</h4>
        <MdOutlineKeyboardArrowDown
          size={28}
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        ref={answerRef}
        id={`faq-answer-${question}`}
        className="mt-4 text-sm sm:text-base text-gray-700"
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        <p>{answer}</p>
      </div>
    </li>
  );
};
