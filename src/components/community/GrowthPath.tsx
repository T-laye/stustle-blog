/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function GrowthPath() {
  const path = [
    { icon: "/images/community/join.svg", text: "Join" },
    { icon: "/images/community/learn.svg", text: "Learn" },
    { icon: "/images/community/build-cv.svg", text: "Build CV" },
    { icon: "/images/community/earn.svg", text: "Earn" },
    { icon: "/images/community/grow.svg", text: "Grow" },
  ];

  return (
    <section className="px-4 bg-primary/20 pb-20 md:pb-40">
      <div className="container">
        <h2 className="text-center text-primary text-xl mb-[30px] sm:text-2xl md:text-[48px] md:mb-[60px]">
          STUSTLE GROWTH PATHWAY
        </h2>
        <div className="flex flex-col gap-y-8 gap-x-1 lg:flex-row items-center">
          {path.map((p, i) => (
            <div key={i} className="flex">
              <div className="flex flex-col items-center gap-5">
                <div className="">
                  <img src={p.icon} alt={p.text} />
                </div>
                <p className="font-medium text-black/50 text-[32px] whitespace-nowrap">
                  {p.text}
                </p>
                {i !== path.length - 1 && (
                  <div className="h-[60px] bg-[#909090] w-[1px] lg:hidden"></div>
                )}
              </div>
              {i !== path.length - 1 && (
                <div className="h-[1px] bg-[#909090] w-[102px] max-lg:hidden mt-[80px]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-[60px] md:mt-[120px] gap-[30px] max-sm:w-1/2 mx-auto sm:flex-row md:gap-[129px]">
          <button
            className="btn hover:bg-primary border  hover:text-white border-primary text-primary btns whitespace-nowrap h-[50px] md:h-[100px] md:text-[32px]"
            type="button"
          >
            Learn
          </button>

          <button
            className="btn border hover:bg-primary  hover:text-white border-primary text-primary btns whitespace-nowrap h-[50px] md:h-[100px] md:text-[32px]"
            type="button"
          >
            Build CV
          </button>

          <button
            className="btn border hover:bg-primary  hover:text-white border-primary text-primary btns whitespace-nowrap h-[50px] md:h-[100px] md:text-[32px]"
            type="button"
          >
            Earn
          </button>
        </div>
        {/* <div className="flex flex-col mt-[60px] md:mt-[120px] gap-[30px] max-sm:w-1/2 mx-auto sm:flex-row">
          <Button style="primary" type="button">
            Learn
          </Button>
          <Button style="secondary" type="button">
            Build CV
          </Button>
          <Button style="secondary" type="button">
            Earn
          </Button>
        </div> */}
      </div>
    </section>
  );
}
