import React from "react";
import SpeakerCard from "./SpeakerCard";
import Subtitle from "./Subtitle";
import { speakers } from "../../utils/contents";

const Speakers = () => {
  return (
    <section className="bg-[#E2950710] min-h-[50vh] pb-[72px] pt-20 mt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center ">
          <Subtitle text="Our Speakers" style="flex flex-col items-center " />
        </div>

        <p className="text-center text-[18px] sm:text-[20px] max-w-[800px]  mt-4 font-medium mx-auto mb-[72px]">
          Thank you to our amazing speakers.
        </p>

        <div className="flex justify-center gap-12 flex-wrap">
          {speakers.map((s, i) => (
            <SpeakerCard key={i} img={s.img} name={s.name} role={s.role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
