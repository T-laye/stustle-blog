import Image from "next/image";
import React from "react";
import OtherProjects from "../../../components/portfolio/OtherProjects";

export default function Page() {
  return (
    <div className="pt-[90px] pb-20 container px-4">
      <section className="flex flex-col gap-[70px] relative sm:gap-[100px] lg:flex-row lg:mt-32">
        <div className="lg:w-1/2">
          <p className="mt-4 sm:mt-12 md:mt-20 text-xl sm:text-center md:w-3/4 md:mx-auto lg:text-start lg:text-[20px] lg:mx-0 lg:w-full lg:leading-[40px]">
            Cleaning
          </p>
          <h1 className="text-[48px] mt-4 font-semibold leading-[120%] sm:text-[72px] sm:text-center lg:text-start lg:text-[64px]">
            Big conference venue cleanup
          </h1>
          <div className="absolute scale-[0.3] bottom-[300px] -right-[230px] lg:-left-[800px] lg:bottom-[200px] lg:scale-[.5]">
            <Image
              alt="cleaning lady"
              src="/images/dots-design.svg"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.03] bottom-[100px] -left-[230px] sm:bottom-[250px] sm:scale-[0.05] lg:-bottom-[250px]">
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
          <div className="flex justify-center w-full h-[271px] md:h-[500px] overflow-hidden rounded-[10px] z-10">
            <Image
              alt="cleaning lady"
              src="/images/designer.jpg"
              height={500}
              width={500}
              className="h-full w-full object-cover"
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

      <div className="mt-[30px] lg:mt-[60px] text-lg lg:text-[24px] lg:leading-[40px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil
          pariatur, soluta voluptatum autem neque officia illum aliquam culpa
          eveniet.
        </p>
        <p className="mt-4 text-primary">
          Preview Link : https://bigconference.com
        </p>
      </div>

      <OtherProjects />
    </div>
  );
}
