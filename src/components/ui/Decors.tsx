/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

interface DecorsProps {
  className?: string;
  shape: "ellipse" | "polygon" | "rec" | "dots";
}

const Decors: FC<DecorsProps> = ({ className, shape }) => {
  return (
    <>
      {shape === "dots" && (
        <div className={`absolute w-full h-full z-[-1] ${className}  `}>
          <img src="/images/dots-design.svg" alt="" />
        </div>
      )}
      {shape === "ellipse" && (
        <div className={`absolute w-full h-full z-[-1] ${className}`}>
          <img src="/images/Ellipse.svg" alt="" />
        </div>
      )}
      {shape === "polygon" && (
        <div className={`absolute w-full h-full z-[-1] ${className}`}>
          <img src="/images/Polygon.svg" alt="" />
        </div>
      )}
      {shape === "rec" && (
        <div className={`absolute w-full h-full z-[-1] ${className}`}>
          <img src="/images/rec.svg" alt="" />
        </div>
      )}
    </>
  );
};

export default Decors;
