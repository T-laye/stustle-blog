import React from "react";
import { BsBriefcase, BsGlobe2 } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { CiMicrophoneOn } from "react-icons/ci";
import Subtitle from "./Subtitle";

interface ContentProps {
  icon: React.ReactNode;
  text: string;
}

const Content: React.FC<ContentProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4 h-[179px] w-[222px] bg-[#E2950710] rounded-[10px]">
      {icon}
      <span className="text-lg sm:text-xl text-center">{text}</span>
    </div>
  );
};

export default function WhatElse() {
  const contents = [
    {
      icon: <CiMicrophoneOn size={30} />,
      text: "Pitch Battles",
    },
    {
      icon: <BsGlobe2 size={30} />,
      text: "Web2 & Web3 Challenges",
    },
    {
      icon: <LiaNetworkWiredSolid size={36} className=" sm:text-2xl" />,
      text: "Networking & Mentorship",
    },
    {
      icon: <BsBriefcase size={30} className="sm:text-2xl" />,
      text: "Business display & Spotlight",
    },
    // {
    //   icon: <BsBriefcase size={30} className="sm:text-2xl" />,
    //   text: "Business display & Spotlight",
    // },
  ];

  return (
    <section className="px-4 sm:px-8 pt-20 pb-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-[72px]">
          <Subtitle
            text="What else to expect"
            style="flex flex-col items-center "
          />
        </div>

        <div className="flex justify-evenly max-sm:flex-col items-center sm:items-end mt-16 flex-wrap gap-16">
          {contents.map((content, index) => (
            <Content key={index} icon={content.icon} text={content.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
