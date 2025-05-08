import React, { FC } from "react";

interface SubtitleProps {
  text: string; // Correct type for text prop
}


const Subtitle: FC<SubtitleProps>  = ({ text }) => {
  return (
    <div>
      <div className="rounded-md bg-primary w-[110px] h-[7px] mb-5"></div>
      <h2 className="text-2xl font-medium mb-1">{text}</h2>
    </div>
  );
};

export default Subtitle;
