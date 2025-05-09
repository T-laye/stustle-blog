"use client";
import React, { useEffect, useState } from "react";
import { IoHandRightOutline } from "react-icons/io5";
import Button from "../ui/Button";
import { RiUserAddLine } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";

const HeroInfoTab = () => {
  const style = `flex-1 flex justify-center items-center flex-col gap-5 p-2`;
  const style2 = `flex flex-col items-center justify-center gap-1`;
  const textShadowStyle = { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 4, 31, 23, 59, 59); // May 31st, 11:59:59 PM
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }

      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    };

    setTimeLeft(calculateTimeLeft()); // Ensure client gets correct initial value
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-14 lg:absolute left-0 right-0 -bottom-[10%] sm:px-4">
      <div className="bg-[#fefefe] w-full  rounded-[20px] min-h-[185px] max-w-7xl shadow-lg mx-auto flex max-lg:flex-col justify-between max-lg:p-10 max-lg:gap-10">
        <div className={`${style}`}>
          <RxTimer className="text-primary text-3xl md:text-5xl " />
          <div className="text-shadow-lg flex gap-4" style={textShadowStyle}>
            <div className={style2}>
              <span className="font-digitNumbers text-2xl">
                {timeLeft.days}
              </span>
              <span className="">Days</span>
            </div>
            <span className="text-4xl">:</span>
            <div className={style2}>
              <span className="font-digitNumbers text-2xl">
                {timeLeft.hours}
              </span>
              <span className="">Hours</span>
            </div>
            <span className="text-4xl">:</span>
            <div className={style2}>
              <span className="font-digitNumbers text-2xl">
                {timeLeft.minutes}
              </span>
              <span>Minutes</span>
            </div>
            <span className="text-4xl">:</span>
            <div className={style2}>
              <span className="font-digitNumbers text-2xl">
                {timeLeft.seconds}
              </span>
              <span className="">Seconds</span>
            </div>
          </div>
        </div>
        <div className={`${style} md:border-l md:border-r border-[#eeeeee]`}>
          <IoHandRightOutline className="text-primary text-3xl md:text-5xl " />
          <span className="md:italic font-medium text-2xl">Free to attend</span>
        </div>
        <div className={`${style}`}>
          <RiUserAddLine className="text-primary text-3xl md:text-5xl " />

          <div className="w-[250px]">
            <Button style="primary" type="button">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfoTab;
