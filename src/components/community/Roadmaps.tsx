"use client";
import React, { useState } from "react";
import { roadMaps } from "../../utils/roadmaps";

export default function Roadmaps() {
  const [active, setActive] = useState<string>("frontendWebDevelopment");

  // Get current roadmap by active value
  const currentRoadmap =
    roadMaps.find((item) => item.value === active)?.steps || [];

  return (
    <section className="px-4 pt-24 lg:pt-40 pb-40">
      <div className="container">
        {/* NAVIGATION */}
        <nav>
          <ul className="flex md:flex-wrap gap-[16px] max-md:overflow-auto md:gap-[30px] ">
            {roadMaps.map((item) => (
              <li
                key={item.value}
                onClick={() => setActive(item.value)}
                className={`cursor-pointer border-[2px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-xl duration-150  ${
                  active === item.value
                    ? "bg-primary text-white border-primary"
                    : "text-primary border-primary"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>

        {/* HEADING */}
        <h5 className="mt-[40px] md:mt-[70px] font-medium text-xl md:text-3xl">
          Roadmap for {roadMaps.find((item) => item.value === active)?.title}
        </h5>

        {/* ROADMAP CONTENT */}
        <div className="mt-10 max-lg:space-y-8 flex flex-col">
          {currentRoadmap.map((step, i) => (
            <div
              key={i}
              className={` ${
                i % 2 === 0 ? "" : "place-self-end"
              } border border-[#909090] bg-white rounded-[5px]  w-full md:w-1/2 lg:w-5/12 shadow`}
            >
              <h6 className="text-lg bg-primary text-white  py-[14px] sm:px-[30px] px-4">
                {step.title}
              </h6>
              <ul className="list-disc ml-[20px] px-4 sm:px-[30px] mb-3 text-base flex flex-col gap-3 py-5">
                {step.outline.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="btn max-w-[800px] mx-auto border bg-primary text-white btns whitespace-nowrap h-[50px] md:h-[100px] md:text-[32px] mt-[120px] lg:mt-[250px]"
          type="button"
        >
          Get Resources
        </button>
      </div>
    </section>
  );
}
