"use client";
import Image from "next/image";
import React from "react";
import HeroInfoTab from "./HeroInfoTab";
// import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="pt-[90px] bgred-300 relative">
      <div className="min-h-[80vh] flex max-lg:flex-col-reverse">
        <div className=" flex-1 flex justify-center mt-10 lg:mt-20 sm:px-8 px-4">
          <div className="w-fit">
            <div className="text-2xl md:text-[64px]  font-medium flex flex-col max-w-3xl">
              <span className="">Your Next</span>
              <div className="text-5xl whitespace-nowrap md:text-[96px] items-center flex italic -mb-1 -mt-1 md:-mt-7 md:-mb-7 lg:mt-1 lg:mb-1 font-semibold place-self-center text-primary">
                <span className="-mr-4">&apos;BIG STEP&apos;</span>
                <div className="w-16 md:w-40">
                  <Image
                    alt="step icon"
                    src="/images/step_icon.svg"
                    height={200}
                    width={200}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <span className="place-self-end">Starts Here</span>
            </div>
            <p className="max-lg:text-center text-lg md:text-2xl font-normal mt-4 sm:mt-14 max-w-2xl">
              If you&apos;re a student or young graduate with big dreams, this
              is where you need to be.
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <div className=" w-full h-[50vh] lg:h-full">
            <Image
              alt="Stustlers"
              src="/images/eventHeroImage.svg"
              height={1000}
              width={1000}
              className="object-cover object-bottom lg:object-cover w-full h-full lg:object-center"
            />
          </div>
        </div>
      </div>

      <HeroInfoTab />
    </section>
  );
}
