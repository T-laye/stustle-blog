"use client";
import React, { useState } from "react";
import { serviceCategories } from "../../utils/contents";
import { GoSearch } from "react-icons/go";
import StustlersCard from "../../components/stustlers/StustlersCard";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  return (
    <div className="pt-[90px] md:pt-[120px] lg:pt-[150px] pb-20 container px-4">
      <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
        <div
          className={`cursor-pointer border-[2px] md:border-[3px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-xl duration-150 ${
            selectedCategory === "All"
              ? "bg-primary text-white border-primary"
              : "text-primary border-primary"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </div>
        {serviceCategories
          .filter((c) => c.value !== "cleaning")
          .map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedCategory(c.value)}
              className={`cursor-pointer border-[2px] md:border-[3px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-xl duration-150  ${
                selectedCategory === c.value
                  ? "bg-primary text-white border-primary"
                  : "text-primary border-primary"
              }`}
            >
              {c.title}
            </div>
          ))}
      </div>

      <div className="mt-10 md:mt-12 lg:mt-16">
        <div className="relative">
          <GoSearch className="absolute top-[50%] left-[10px] translate-y-[-50%] md:left-[16px] md:text-2xl text-[#aaa]/50 text-xl" />
          <input
            type="text"
            className="h-[45px] md:h-[60px] pl-[35px] md:pl-[50px] pr-[10px]  py-[10px] rounded-[10px] bg-transparent border outline-none w-full border-primary/50 text-xs md:text-lg placeholder:text-[#aaa]/50 caret-primary"
            placeholder="Search by name, category or skill"
          />
        </div>
      </div>

      {/* Featured stustler */}
      <h2 className="text-sm font-medium mt-[30px] md:mt-[50px] lg:mt-[70px] md:text-2xl">
        Featured Stustlers
      </h2>

      {/* Stustler cards will go here */}
      <div>
        <StustlersCard />
      </div>
    </div>
  );
}
