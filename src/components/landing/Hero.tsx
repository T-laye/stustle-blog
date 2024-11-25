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
    <div className="bg-green300 container mx-auto min-h-screen pt-28 md:pt-52 px-4">
      <div>
        <div>
          <div className="w-5/6 md:max-w-[500px]">
            <Image
              height={200}
              width={200}
              src="/images/hero-text.svg"
              alt="Stustle"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-lg md:text-xl w-5/6 md:max-w-[400px] mt-3 leading-6">
            Making life easy in terms of daily runs, school tasks and finances.
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

          <div className="flex gap-5 mt-10 max-w-[500px] flex-col sm:flex-row">
            <Button style="primary" type="button">
              Request a Service
            </Button>
            <Button style="secondary" type="button">
              Become a Stustler
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Image src="" height={500} width={500} alt="images" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
