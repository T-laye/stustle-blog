"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectCard = () => {
  const router = useRouter();

  const gotoProject = () => {
    router.push(`/portfolio/slug`);
  };

  return (
    <div
      onClick={gotoProject}
      className="hover:text-primary duration-150 cursor-pointer"
    >
      <div className="w-full overflow-hidden h-[300px] rounded-[5px] lg:h-[250px]">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-150"
          alt="name"
          src="/images/designer.jpg"
          height={500}
          width={500}
        />
      </div>
      <div className="text-2xl flex flex-col gap-[5px] mt-[10px] ">
        <h5 className="line-clamp-1">Events</h5>
        <h4 className="font-semibold line-clamp-1">BIG Conference</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
