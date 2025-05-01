/* eslint-disable @next/next/no-img-element */
import React from "react";

const CountDown = () => {
  return (
    <div className="w-full p-4 relative mx-auto max-w-[509px] h-[120px] sm:h-[177px] rounded-xl border border-primary shadow-md">
      <img alt="" className="absolute -top-12 right-16" src="/images/pin.svg" />
      <img alt="" className="absolute -top-12 left-16" src="/images/pin.svg" />
    </div>
  );
};

export default CountDown;
