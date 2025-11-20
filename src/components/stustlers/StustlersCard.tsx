"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { Stustler } from "../../../types/sanityTypes";
import { stustlerCategories } from "../../utils/contents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StustlersCard: React.FC<{ stustler: Stustler }> = ({ stustler }) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleCardClick = () => {
    router.push(`/stustlers/${stustler.slug.current}`);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.8,
        y: 40,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%", // when card enters viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="card bgred-400 w-fit place-self-center cursor-pointer hover:bg-primary-light p-2 md:p-4 rounded-[15px] duration-150"
      onClick={handleCardClick}
    >
      {/* Profile Image */}
      <div className="bg-[#FFF1DC] min-w-[250px] min-h-[250px] w-[250px] h-[250px] xl:h-[300px] xl:w-[300px] rounded-full overflow-hidden flex items-center justify-center">
        <Image
          height={500}
          width={500}
          src="/images/obaro.jpeg" // Using mock image like you requested
          alt={`Profile image of ${stustler.name}`}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center mt-[5px] md:mt-[10px] space-y-[7px] md:space-y-[10px]">
        <div className="text-xl font-medium">{stustler.name}</div>

        <div className="rounded-[20px] text-primary bg-primary/10 text-sm px-5 py-1 font-medium">
          {stustler.subCategory.toUpperCase()}
        </div>

        <div className="text-xs font-medium text-[#5b5b5b]">
          {
            stustlerCategories.find((cat) => cat.value === stustler.category)
              ?.title
          }
        </div>
      </div>
    </div>
  );
};

export default StustlersCard;
