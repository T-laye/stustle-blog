"use client";
import React, { useEffect, useState } from "react";
import { IoHandRightOutline } from "react-icons/io5";
import Button from "../ui/Button";
import { RiUserAddLine } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";

const HeroInfoTab = () => {
  const style = `flex-1 flex justify-center items-center flex-col gap-5`;
  const style2 = `flex flex-col items-center justify-center gap-1`;

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
    <div className="absolute left-0 right-0 -bottom-[10%]">
      <div className="bg-[#fefefe] w-full  rounded-[20px] h-[185px] max-w-7xl shadow-lg mx-auto flex justify-between">
        <div className={`${style}`}>
          <RxTimer className="text-primary" size={40} />
          <div className="text-shadow-lg flex gap-4 ">
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
              <span className="">Minutes</span>
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
        <div className={`${style} border-l border-r border-[#eeeeee]`}>
          <IoHandRightOutline size={40} className="text-primary" />
          <span className="italic font-medium text-2xl">Free to attend</span>
        </div>
        <div className={`${style}`}>
          <RiUserAddLine size={40} className="text-primary" />

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
