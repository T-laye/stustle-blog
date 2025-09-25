/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function RoadmapOverview() {
  return (
    <section
      style={{
        backgroundImage: 'url("/images/community/community-hero-bg.png")',
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "top",
      }}
      className="pb-20 lg:pb-40 md:min-h-[90vh] px-4 pt-32 lg:pt-40"
    >
      <div className="container ">
        <div className="max-w-[977px] mx-auto mt-[5%]">
          <h1 className="text-center text-[32px] font-semibold leading-[120%] md:text-[54px] lg:text-[64px]">
            Learn your fav skill with guide from the roadmaps and resources
            delicately sourced by us.
          </h1>
          <p className="text-center lg:leading-[140%] text-xl mt-[16px] md:text-2xl lg:text-[36px] lg:mt-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            distinctio magnam! Ad hic aut amet ipsum natus saepe cupiditate
          </p>
        </div>
      </div>
    </section>
  );
}
