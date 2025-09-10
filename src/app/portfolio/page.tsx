import React from "react";
import Overview from "../../components/portfolio/Overview";
import Projects from "../../components/portfolio/Projects";

const page = () => {
  return (
    <div className="pt-[90px] pb-20 container px-4">
      <Overview />
      <Projects />
    </div>
  );
};

export default page;
