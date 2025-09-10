import React from "react";
import { serviceCategories } from "../../utils/contents";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="mt-[60px] lg:mt-[120px]">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between lg:gap-[200px]">
        <div>
          <div className="">
            <div className="rounded-md bg-primary w-[110px] h-[3px] md:h-[7px] mb-3"></div>
            <h2 className="text-2xl font-medium mb-1 lg:text-[40px] leading-[100%]">
              Latest <br className="max-lg:hidden" /> Projects
            </h2>
          </div>
        </div>
        <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
          <div className="whitespace-nowrap text-[#191000]/50 hover:text-primary duration-150 cursor-pointer">
            All
          </div>
          {serviceCategories.map((c, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-[#191000]/50 hover:text-primary cursor-pointer duration-150"
            >
              {c.title}
            </div>
          ))}
        </div>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-10 lg:mt-[80px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  );
}
