import Image from "next/image";
import React from "react";

const SpeakerCard = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="overflow-hidden  w-[300px] h-[300px] rounded-full">
        <Image
          alt="Speaker"
          src="/images/Ellipse 63.png"
          className="h-full w-full object-cover"
          height={500}
          width={500}
        />
      </div>
      <div>
        <h5 className="font-medium text-[18px]">Speaker Name</h5>
        <span>Role/Position</span>
      </div>
    </div>
  );
};

export default SpeakerCard;
