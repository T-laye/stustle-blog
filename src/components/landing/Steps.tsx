import { steps } from "@/utils/contents";
import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface StepsProps {
  index: number;
  text: string;
  color: string;
}

const StepCards: React.FC<StepsProps> = ({ color, index, text }) => {
  return (
    <div
      className={`min-h-fit w-full  ${index === 3 && "col-start-2 row-start-3"} ${index === 2 && "col-start-1"} ${index === 5 && "col-start-3 row-start-1"} ${index === 3 && "row-start-2"}  `}
    >
      {" "}
      <div className="w-full max-w-[428px] mx-auto flex flex-col items-center px-4 gap-8">
        <div
          style={{ backgroundColor: color }}
          className="h-[116px] w-[98px] bg-green-400 rounded-full text-[64px] flex justify-center items-center"
        >
          0{index}
        </div>
        <p className="text-center text-lg">{text}</p>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <section
      id="steps"
      className="pb-20 pt-10 px-4  container mx-auto min-h-[50vh]"
    >
      <h3 className=" flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>GET IT DONE IN 5 EASY STEPS</span>
      </h3>

      <div className="flex flex-col items-center mt-10 md:grid  grid-rows-3 grid-cols-3 gap-16">
        <div className="max-w-[250px] md:max-w-[300px] w-1/2 md:w-4/5 mx-auto row-start-1 col-start-2 row-span-2">
          <Image
            src="/images/steps_image.png"
            alt="rocket"
            height={500}
            width={500}
            className="w-full object-contain object-center"
          />
        </div>
        {steps?.map((s, i) => (
          <StepCards key={i} color={s.color} text={s.text} index={i + 1} />
        ))}
        {/* <div className="min-h-40 w-full bg-primary ">
          <StepCards  />
        </div>
        <div className="min-h-40 w-full bg-primary ">3</div>
        <div className="min-h-40 w-full bg-primary ">4</div>
        <div className="min-h-40 w-full bg-primary ">5</div>
        <div className="min-h-40 w-full bg-primary col-start-2 ">6</div> */}
      </div>
    </section>
  );
};

export default Steps;
