import React from "react";
import SpeakerCard from "./SpeakerCard";
import Subtitle from "./Subtitle";

const Speakers = () => {
  return (
    <section className="bg-[#E2950710] min-h-[50vh] pb-[72px] pt-20">
      <div className="flex flex-col items-center justify-center mb-[72px]">
        <Subtitle text="Our Speakers" style="flex flex-col items-center " />
      </div>

      <div className="flex justify-center gap-12 flex-wrap">
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </div>
    </section>
  );
};

export default Speakers;
