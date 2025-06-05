"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import CountDown from "./CountDown";
// import { useRouter } from "next/navigation";
// import Decors from "../ui/Decors";
// import HeroInfoTab from "./HeroInfoTab";
// import Button from "../ui/Button";

export default function Hero() {

  const registerNow = () => {
    window.open("https://forms.gle/5c6fMUpYzayLpZai8", "_blank");
  };
  const joinVolunteers = () => {
    window.open("https://forms.gle/zVy2CJeuHe52ies18", "_blank");
  };

  return (
    <section className="pt-[90px] pb-10 hero_bg max-md:hero_bg_conference relative">
      {/* <Decors shape="dots" className="-left-24 max-sm:hidden" />
      <Decors shape="polygon" className="right-0" /> */}
      <div className="min-h-[80vh] lg:max-hscreen flex max-lg:flex-col">
        <div className=" flex-1 flex justify-center items-center max-sm:m-10 sm:px-8">
          <div className="mt-[10%]">
            <div>
              <Image
                alt="Stustlers"
                src="/images/hero_text.svg"
                height={1000}
                width={1000}
                className="object-contain w-full h-full max-[300px]:max-h-[100px] max-[350px]:max-h-[120px]"
              />
            </div>
            {/* <div className="text-2xl md:text-[64px]  font-medium flex flex-col max-w-3xl ">
              <span className="">Your Next</span>
              <div className="text-5xl whitespace-nowrap md:text-[96px] items-center flex italic -mb-1 -mt-1 md:-mt-7 md:-mb-7 lg:mt-1 lg:mb-1 font-semibold place-self-center text-primary">
                <span className="-mr-4">&apos;BIG STEP&apos;</span>
                <div className="w-16 md:w-40">
                  <Image
                    alt="step icon"
                    src="/images/step_icon.svg"
                    height={200}
                    width={200}
                    className="h-full w-full object-contain "
                  />
                </div>
              </div>
              <span className="place-self-end">Starts Here</span>
            </div> */}
            <p className="max-lg:text-center text-lg md:text-2xl font-normal mt-4 sm:mt-14 max-w-2xl">
              If you&apos;re a student or young graduate with big dreams, this
              is where you need to be.
            </p>
            <div className="flex gap-4 mt-8 sm:mt-14 max-lg:justify-center max-sm:flex-wrap">
              <Button style="primary" type="button" fn={registerNow}>
                Register
              </Button>
              <Button style="secondary" type="button" fn={joinVolunteers}>
                Volunteer
              </Button>
            </div>
            <div className="mt-20  max-lg:justify-center flex">
              <CountDown />
            </div>
          </div>
        </div>
        <div className="lg:flex-1">
          <div className=" w-full h[50vh] lg:h-full">
            <Image
              alt="Stustlers"
              src="/images/eventHeroImage.svg"
              height={1000}
              width={1000}
              className="object-cover object-top lg:object-top w-full h-full max-lg:hidden"
            />
            <Image
              alt="Stustlers"
              src="/images/mobileHero.svg"
              height={1000}
              width={1000}
              className="object-contain object-top lg:object-top w-full lg:hidden "
            />
          </div>
        </div>
      </div>

      {/* <HeroInfoTab /> */}
    </section>
  );
}
