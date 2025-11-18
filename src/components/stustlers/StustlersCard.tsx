import Image from "next/image";
import React from "react";

const StustlersCard = () => {
  return (
    <div className="bgred-400 w-fit">
      <div className="bg-[#FFF1DC] min-w-[250px] min-h-[250px] w-[250px] h-[250px] rounded-full overflow-hidden flex items-center justify-center">
        <Image
          height={500}
          width={500}
          src="/images/obaro.jpeg"
          alt="stustler"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[5px] space-y-[7px]">
        <div className="text-xl font-medium">Jane Doe</div>
        <div className=" rounded-[20px] text-primary bg-primary/10 text-sm px-5 py-1 font-medium">
          UI/UX Designer
        </div>
        <div className="text-xs font-medium text-[#5b5b5b]">
          Web & UI/UX Design
        </div>
      </div>
    </div>
  );
};

export default StustlersCard;
