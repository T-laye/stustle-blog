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

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => router.push(`/stustlers/${stustler?.slug?.current}`)}
      className="w-fit place-self-center cursor-pointer hover:bg-primary-light p-2 md:p-4 rounded-[15px] duration-150"
    >
      {/* IMAGE */}
      <div className="bg-[#FFF1DC] w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden flex items-center justify-center mx-auto">
        <Image
          height={500}
          width={500}
          src={stustler.imageLink || "/placeholder-profile.png"}
          alt={stustler.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col items-center mt-4 space-y-2">
        <div className="text-xl font-medium">{stustler.name}</div>

        <div className="rounded-[20px] text-primary bg-primary/10 text-sm px-5 py-1 font-medium max-w-4/5 line-clamp-1">
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
