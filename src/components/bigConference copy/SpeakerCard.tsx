import Image from "next/image";
import React from "react";

const SpeakerCard = ({
  name,
  img,
  role,
}: {
  name: string;
  img: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="overflow-hidden  w-[300px] h-[300px] rounded-full bg-[#fff]">
        <Image
          alt="Speaker"
          src={img}
          className="h-full w-full object-cover object-top"
          height={500}
          width={500}
        />
      </div>
      <div>
        <h5 className="font-medium text-[18px] text-center">{name}</h5>
        <p className="text-center">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
