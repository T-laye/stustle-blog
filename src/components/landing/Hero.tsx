"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const Hero = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [stustlersCount, setStustlersCount] = useState(0);

  const startCounting = (
    target: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const intervalDuration = 10; // Interval duration in milliseconds

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval); // Stop the interval when target is reached
          return target;
        }
        return prevCount + 1; // Increment the count
      });
    }, intervalDuration);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  };

  useEffect(() => {
    startCounting(80, setClientsCount);
    startCounting(250, setJobsCount);
    startCounting(30, setStustlersCount);
  }, []);
  return (
    <div className="pb-20 container mx-auto min-h-screen pt-20 sm:pt-28 lg:pt-52 px-4 gap-10 sm:gap-20 flex flex-col lg:flex-row justify-between">
      <div className="w-full">
        <div className=" items-center lg:items-start flex flex-col ">
          <div className="w-5/6 sm:w-4/5  lg:max-w-[500px]">
            <Image
              height={200}
              width={200}
              src="/images/hero-text.svg"
              alt="Stustle"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-center lg:text-start text-lg md:text-xl w-5/6 lg:max-w-[400px] mt-3 leading-6">
            Making life easy for students, professionals and business owners.
          </p>

          <div className="flex space-x-8 justify-between mt-5 w-11/12 max-w-[300px] ">
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-xl md:text-2xl text-primary font-bold">
                {clientsCount}+
              </span>{" "}
              <span className="text-base md:text-lg  -mt-2">Clients</span>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-xl md:text-2xl text-primary font-bold">
                {jobsCount}+
              </span>{" "}
              <span className="text-base md:text-lg  -mt-2">Jobs done</span>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-xl md:text-2xl text-primary font-bold">
                {stustlersCount}+
              </span>{" "}
              <span className="text-base md:text-lg  -mt-2">Stustlers</span>
            </div>
          </div>

          <div className="flex gap-5 mt-10 w-full sm:max-w-[500px] flex-col sm:flex-row">
            <Button style="primary" type="button">
              Request a Service
            </Button>
            <Button style="secondary" type="button">
              Become a Stustler
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 h-fit w-full">
        <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-l-full place-self-end">
          <Image
            src="/images/test.png"
            className="h-full w-full object-cover object-center"
            height={500}
            width={500}
            alt="images"
          />
        </div>
        <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-full">
          <Image
            src="/images/test.png"
            className="h-full w-full object-cover object-center"
            height={500}
            width={500}
            alt="images"
          />
        </div>
        <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-full place-self-end">
          <Image
            src="/images/test.png"
            className="h-full w-full object-cover object-center"
            height={500}
            width={500}
            alt="images"
          />
        </div>
        <div className=" h-[120px] w-[120px] sm:h-[250px] sm:w-[250px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] overflow-hidden rounded-r-full">
          <Image
            src="/images/test.png"
            className="h-full w-full object-cover object-center"
            height={500}
            width={500}
            alt="images"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
