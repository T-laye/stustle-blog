"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OtherProjects from "../../../components/portfolio/OtherProjects";
import { useParams } from "next/navigation";
import { Project } from "../../../../types/sanityTypes";
import { PROJECT_QUERY } from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { serviceCategories } from "../../../utils/contents";
import Loader from "../../../components/ui/Loader";

export default function Page() {
  const [project, setProject] = useState<Project | null>(null);
  const { project: $slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await client.fetch(PROJECT_QUERY, { slug: $slug });
        setProject(projectData || null);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to fetch project");
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [$slug]);

  if (loading) {
    return (
      <div className="pt-[200px] pb-20 container px-4 text-center">
        <Loader />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pt-[200px] pb-20 container px-4 text-center">
        {error || "Project not found"}
      </div>
    );
  }

  const categoryLabel =
    serviceCategories.find((c) => c.value === project.category)?.title ||
    project.category;

  return (
    <div className="pt-[90px] pb-20 container px-4">
      <section className="flex flex-col gap-[70px] relative sm:gap-[100px] lg:flex-row lg:mt-32">
        <div className="lg:w-1/2">
          <p className="mt-4 sm:mt-12 md:mt-20 text-xl sm:text-center md:w-3/4 md:mx-auto lg:text-start lg:text-[20px] lg:mx-0 lg:w-full lg:leading-[40px]">
            {categoryLabel}
          </p>
          <h1 className="text-[48px] mt-4 font-semibold leading-[120%] sm:text-[72px] sm:text-center lg:text-start lg:text-[64px]">
            {project.title}
          </h1>

          {/* Decorative shapes */}
          <div className="absolute scale-[0.3] bottom-[300px] -right-[230px] lg:-left-[800px] lg:bottom-[200px] lg:scale-[.5]">
            <Image
              alt=""
              src="/images/dots-design.svg"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.03] bottom-[100px] -left-[230px] sm:bottom-[250px] sm:scale-[0.05] lg:-bottom-[250px]">
            <Image alt="" src="/images/Polygon.svg" height={500} width={500} />
          </div>
          <div className="absolute scale-[0.03] -top-[300px] -right-[230px] sm:-top-[100px]">
            <Image alt="" src="/images/Polygon.svg" height={500} width={500} />
          </div>
        </div>

        <div className="relative lg:w-1/2 lg:flex lg:justify-end">
          <div className="flex justify-center w-full h-[271px] md:h-[500px] overflow-hidden rounded-[10px] z-10">
            <Image
              alt={project.title}
              src={
                project.image
                  ? urlFor(project.image).width(1000).height(600).url()
                  : ""
              }
              height={600}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Decorative shapes */}
          <div className="absolute scale-[0.3] -top-[100px] -left-[290px] lg:top-[100px] lg:-left-[250px]">
            <Image
              alt=""
              src="/images/dots-design.svg"
              height={500}
              width={500}
            />
          </div>
          <div className="absolute scale-[0.03] top-[100px] -right-[230px]">
            <Image alt="" src="/images/Polygon.svg" height={500} width={500} />
          </div>
        </div>
      </section>

      <div className="mt-[30px] lg:mt-[60px] text-lg lg:text-[24px] lg:leading-[40px]">
        <p>{project.description}</p>

        {project.link && (
          <p className="mt-4">
            Preview Link:{" "}
            <a
              href={project.link}
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link}
            </a>
          </p>
        )}
      </div>

      <OtherProjects
        currentSlug={Array.isArray($slug) ? ($slug[0] ?? "") : ($slug ?? "")}
      />
    </div>
  );
}
