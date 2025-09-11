"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { Project } from "../../../types/sanityTypes";
import { urlFor } from "../../sanity/lib/image";
import { serviceCategories } from "../../utils/contents";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  const gotoProject = () => {
    router.push(`/portfolio/${project?.slug?.current}`);
  };

  const categoryLabel =
    serviceCategories.find((c) => c.value === project?.category)?.title ||
    project?.category;

  return (
    <div
      onClick={gotoProject}
      className="hover:text-primary duration-150 cursor-pointer"
    >
      <div className="w-full overflow-hidden h-[300px] rounded-[5px] lg:h-[250px]">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-150"
          alt={project?.title || "project image"}
          src={
            project?.image
              ? urlFor(project.image).width(800).height(600).url()
              : "/images/designer.jpg"
          }
          width={800}
          height={600}
        />
      </div>
      <div className="text-2xl flex flex-col gap-[5px] mt-[10px]">
        <h5 className="line-clamp-1">{categoryLabel}</h5>
        <h4 className="font-semibold line-clamp-1">{project?.title}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
