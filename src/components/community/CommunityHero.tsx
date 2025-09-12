/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CommunityHero() {
  const pics = [
    "/images/Stustle_pic-1.jpg",
    "/images/stustle1.jpg",
    "/images/Stustle_pic-1.jpg",
    "/images/stustle1.jpg",
    "/images/Stustle_pic-1.jpg",
    "/images/stustle1.jpg",
    "/images/Stustle_pic-1.jpg",
    "/images/stustle1.jpg",
    "/images/Stustle_pic-1.jpg",
    "/images/stustle1.jpg",
  ];

  return (
    <section
      style={{
        backgroundImage: 'url("/images/community/community-hero-bg.png")',
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "top",
      }}
      className="min-h-screen pb-40 md:min-h-[50vh] px-4 pt-12 md:pt-24 lg:pt-32 md:pb-[327px]"
    >
      <div className="container">
        <div className="max-w-[977px] mx-auto">
          <h1 className="text-center text-[44px] font-semibold leading-[120%] md:text-[54px] lg:text-[64px]">
            Grow Your Skills To Advance Your Career Path.
          </h1>
          <p className="text-center text-xl mt-[16px] md:text-2xl lg:text-3xl lg:mt-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            distinctio magnam! Ad hic aut amet ipsum natus saepe cupiditate
            fugit voluptates nostrum quisquam rem, illum in et libero! Eos,
            aliquid.
          </p>
          <p className="font-semibold text-xl text-center mt-[20px] lg:text-[32px] lg:mt-[40px]">
            365+ Stustled Students
          </p>

          <div className="flex justify-center items-center mt-6 mb-9 lg:mt-12 lg:mb-16">
            {pics.map((p, i) => (
              <div
                key={i}
                className="h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] rounded-full overflow-hidden border border-primary -ml-[10px]"
              >
                <img
                  src={p}
                  alt="images"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center max-w-[800px] mx-auto">
            <button
              className="btn bg-primary text-white btns whitespace-nowrap h-[50px] md:h-[100px] md:text-[32px]"
              type="button"
            >
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
