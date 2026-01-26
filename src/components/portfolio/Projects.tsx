"use client";
import React, { useEffect, useState } from "react";
import { serviceCategories } from "../../utils/contents";
import ProjectCard from "./ProjectCard";
import { client } from "../../sanity/lib/client";
import { PROJECTS_BY_CATEGORY_QUERY } from "../../sanity/lib/queries";
import { Project } from "../../../types/sanityTypes";
import Loader from "../ui/Loader";

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const fetchProjects = async (category: string) => {
    try {
      setLoading(true);
      const data = await client.fetch(PROJECTS_BY_CATEGORY_QUERY, { category });
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  // console.log(projects);

  useEffect(() => {
    fetchProjects(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="mt[60px] lg:mt-[120px]">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between lg:gap-[200px]">
        <div>
          <div>
            <div className="rounded-md bg-primary w-[110px] h-[3px] md:h-[7px] mb-3"></div>
            <h2 className="text-2xl font-medium mb-1 lg:text-[40px] leading-[100%]">
              Latests Projects
            </h2>
          </div>
        </div>
        <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
          <div
            className={`whitespace-nowrap cursor-pointer duration-150 ${
              selectedCategory === "All" ? "text-primary" : "text-[#191000]/50"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </div>
          {serviceCategories.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedCategory(c.value)}
              className={`whitespace-nowrap cursor-pointer duration-150 ${
                selectedCategory === c.value
                  ? "text-primary"
                  : "text-[#191000]/50"
              }`}
            >
              {c.title}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="mt-36 w-full mx-auto flex justify-center">
          <Loader />
        </div>
      ) : error ? (
        <div className="container">{error}</div>
      ) : projects?.length === 0 ? (
        <div className="text-center w-full container text-2xl py-40 text-gray-700">
          No Projects Available
        </div>
      ) : (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-10 lg:mt-[80px]">
          {projects?.map((p) => <ProjectCard key={p._id} project={p} />)}
        </section>
      )}
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { serviceCategories } from "../../utils/contents";
// import ProjectCard from "./ProjectCard";
// import { client } from "../../sanity/lib/client";
// import { PROJECTS_QUERY } from "../../sanity/lib/queries";
// import { Project } from "../../../types/sanityTypes";
// import Loader from "../ui/Loader";

// export default function Projects() {
//   const [projects, setProjects] = useState<Project[] | null>(null); // Type posts as array or null
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state
//   const [error, setError] = useState<string | null>(null); // Track error state

//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const projects = await client.fetch(PROJECTS_QUERY);
//       // console.log("Fetched Posts:", JSON.stringify(posts, null, 2));
//       setProjects(projects); // Set posts as raw data
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setError("Failed to fetch posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   console.log(projects);

//   return (
//     <div className="mt-[60px] lg:mt-[120px]">
//       <div className="flex flex-col gap-6 md:flex-row md:justify-between lg:gap-[200px]">
//         <div>
//           <div className="">
//             <div className="rounded-md bg-primary w-[110px] h-[3px] md:h-[7px] mb-3"></div>
//             <h2 className="text-2xl font-medium mb-1 lg:text-[40px] leading-[100%]">
//               {/* Latest <br className="max-lg:hidden" />  */}
//               Projects
//             </h2>
//           </div>
//         </div>
//         <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
//           <div className="whitespace-nowrap text-[#191000]/50 hover:text-primary duration-150 cursor-pointer">
//             All
//           </div>
//           {serviceCategories.map((c, i) => (
//             <div
//               key={i}
//               className="whitespace-nowrap text-[#191000]/50 hover:text-primary cursor-pointer duration-150"
//             >
//               {c.title}
//             </div>
//           ))}
//         </div>
//       </div>

//       {loading ? (
//         <div className="mt-36 w-full mx-auto flex justify-center">
//           <Loader />
//         </div> // Loading state
//       ) : error ? (
//         <div className="container">{error}</div> // Error state
//       ) : projects?.length === 0 ? (
//         <div className="text-center w-full container">No Projects Available</div>
//       ) : (
//         <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-10 lg:mt-[80px]">
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//         </section>
//       )}
//     </div>
//   );
// }
