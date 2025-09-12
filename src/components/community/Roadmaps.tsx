"use client";
import React, { useState } from "react";
import {
  roadMapNavs,
  frontendWebDevelopment,
  uiUxDesign,
  graphicsDesign,
  socialMediaManagement,
  dataAnalysis,
  writing,
  virtualAssistance,
} from "../../utils/roadmaps";

export default function Roadmaps() {
  const [active, setActive] = useState<string>("frontendWebDevelopment");

  // Map roadmap value -> data
  const roadmapData: Record<string, { title: string; outline: string[] }[]> = {
    frontendWebDevelopment,
    uiUxDesign,
    graphicsDesign,
    socialMediaManagement,
    dataAnalysis,
    writing,
    virtualAssistance,
  };

  const currentRoadmap = roadmapData[active] || [];

  return (
    <section className="px-4 pt-[60px] md:pt-[120px] pb-40">
      <div className="container">
        {/* NAVIGATION */}
        <nav>
          <ul className="flex md:flex-wrap gap-[16px] max-md:overflow-auto md:gap-[30px] ">
            {roadMapNavs.map((item) => (
              <li
                key={item.value}
                onClick={() => setActive(item.value)}
                className={`cursor-pointer border-[2px] md:border-[3px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-2xl duration-150  ${
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
        <h5 className="mt-[60px] md:mt-[70px] font-medium text-xl md:text-3xl">
          Roadmap for {roadMapNavs.find((item) => item.value === active)?.title}
        </h5>

        {/* ROADMAP CONTENT */}
        <div className="mt-10 space-y-8">
          {currentRoadmap.map((step, i) => (
            <div
              key={i}
              className="border border-[#909090] bg-white rounded-[5px]"
            >
              <h6 className="text-xl bg-primary text-white text-center py-[14px]">
                {step.title}
              </h6>
              <ul className="list-disc ml-7 mb-3 text-sm flex flex-col gap-3 py-5">
                {step.outline.map((point, j) => (
                  <li key={j}>{point.toUpperCase()}</li>
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
