import { FC, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FaqProps {
  question: string;
  answer: string;
}

export const FaqList: FC<FaqProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

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
      {open && (
        <div
          id={`faq-answer-${question}`}
          className="mt-4 text-sm sm:text-base text-gray-700"
        >
          <p>{answer}</p>
        </div>
      )}
    </li>
  );
};
