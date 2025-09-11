import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <>
      <section className="flex flex-col gap-[70px] relative sm:gap-[100px] lg:flex-row lg:mt-32">
        <div className="lg:w-1/2">
          <h1 className="text-[48px] font-semibold leading-[130%] sm:text-[72px] sm:text-center sm:mt-12 md:mt-20 lg:text-start lg:text-[64px]">
            Dive further into what we&apos;re all about
          </h1>
          <p className="mt-4 text-sm sm:text-lg sm:text-center md:w-3/4 md:mx-auto lg:text-start lg:text-[20px] lg:mx-0 lg:w-full lg:leading-[40px]">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          </p>
          <div className="absolute scale-[0.3] bottom-[300px] -right-[230px] lg:-left-[800px] lg:bottom-[200px] lg:scale-[.5]">
            <Image
              alt="cleaning lady"
              src="/images/dots-design.svg"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.03] bottom-[150px] -left-[230px] sm:bottom-[250px] sm:scale-[0.05] lg:-bottom-[250px]">
            <Image
              alt="cleaning lady"
              src="/images/Polygon.svg"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.03] -top-[300px] -right-[230px] sm:-top-[100px]">
            <Image
              alt="cleaning lady"
              src="/images/Polygon.svg"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="relative lg:w-1/2 lg:flex lg:justify-end">
          <div className="flex justify-center lg:w-11/12 lg:justify-end">
            <Image
              alt="cleaning lady"
              src="/images/portfolio-hero-img.png"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.3] -top-[100px] -left-[290px] lg:top-[100px] lg:-left-[250px]">
            <Image
              alt="cleaning lady"
              src="/images/dots-design.svg"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.03] top-[100px] -right-[230px]">
            <Image
              alt="cleaning lady"
              src="/images/Polygon.svg"
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-20 pt-20 flex flex-wrap gap-y-10 gap-x-[140px] md:gap-y-[70px] justify-center">
        {[
          "WEB DEVELOPMENT",
          "Product Design (UI/UX)",
          "WRITING",
          "CLEANING",
          "VIRTUAL ASSISTANCE",
          "GRAPHICS DESIGN",
        ].map((s, i) => (
          <p
            key={i}
            className="hover:text-primary duration-150 text-xl md:text-2xl"
          >{`"${s.toUpperCase()}"`}</p>
        ))}
      </section>
    </>
  );
};

export default Overview;
