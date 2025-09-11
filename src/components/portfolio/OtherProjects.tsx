"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { client } from "../../sanity/lib/client";
import { Project } from "../../../types/sanityTypes";

interface OtherProjectsProps {
  currentSlug: string;
  category?: string;
}

export default function OtherProjects({
  currentSlug,
}: OtherProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `
          *[_type == "project" && slug.current != $slug] {
            _id,
            title,
            slug,
            category,
            description,
            image,
            link
          }
        `;
        const data: Project[] = await client.fetch(query, {
          slug: currentSlug,
        });

        // Shuffle results and pick 3
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        setProjects(shuffled);
      } catch (error) {
        console.error("Error fetching other projects:", error);
      }
    };

    fetchProjects();
  }, [currentSlug]);

  if (!projects.length) return null;

  return (
    <div className="mt-[60px] lg:mt-[120px]">
      <h3 className="font-medium">OTHER PROJECTS</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-10 lg:mt-[80px]">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
