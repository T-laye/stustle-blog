import React from "react";
import { BsBriefcase, BsGlobe2 } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { CiMicrophoneOn } from "react-icons/ci";

interface ContentProps {
  icon: React.ReactNode;
  text: string;
}

const Content: React.FC<ContentProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-white">
      {icon}
      <span className="text-lg sm:text-xl">{text}</span>
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
  ];

  return (
    <section className="px-4 sm:px-8 bg-primary pt-10 pb-20">
      <div className="container">
        <h2 className="mb-4 font-semibold text-center text-xl sm:text-2xl text-white">
          What Else to Expect
        </h2>
        <div className="flex justify-evenly max-sm:flex-col items-center sm:items-end mt-16 flex-wrap gap-16">
          {contents.map((content, index) => (
            <Content key={index} icon={content.icon} text={content.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
