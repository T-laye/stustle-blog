/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { RxTimer } from "react-icons/rx";

const CountDown = () => {
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
    <div className="w-full p-4 relative mx-auto max-w-[509px] min-h-[120px] sm:min-h-[177px] rounded-xl border border-primary shadow-md">
      <img alt="" className="absolute -top-12 right-16" src="/images/pin.svg" />
      <img alt="" className="absolute -top-12 left-16" src="/images/pin.svg" />
      <div className={`${style}`}>
        <RxTimer className="text-primary text-2xl md:text-4xl " />
        <div
          className="text-shadow-lg flex gap-2 sm:gap-4"
          style={textShadowStyle}
        >
          <div className={style2}>
            <span className="font-digitNumbers text-2xl">{timeLeft.days}</span>
            <span className="">Days</span>
          </div>
          <span className="text-4xl">:</span>
          <div className={style2}>
            <span className="font-digitNumbers text-2xl">{timeLeft.hours}</span>
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
    </div>
  );
};

export default CountDown;
