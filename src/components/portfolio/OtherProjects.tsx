import React from "react";
import ProjectCard from "./ProjectCard";

export default function OtherProjects() {
  return (
    <div className="mt-[60px] lg:mt-[120px]">
      <h3 className="font-medium">OTHER PROJECTS</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-10 lg:mt-[80px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
