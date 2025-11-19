"use client";
import React, { useEffect, useMemo, useState } from "react";
import { stustlerCategories } from "../../utils/contents";
import { GoSearch } from "react-icons/go";
import StustlersCard from "../../components/stustlers/StustlersCard";
import { mockStustlers } from "../../utils/mockStustlers";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  //   const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6; // adjust to your UI

  const processedStustlers = useMemo(() => {
    const filtered = mockStustlers.filter((s) => {
      const matchesCategory =
        selectedCategory === "All" || s.category === selectedCategory;

      const matchesSearch =
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.bio.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // Stable shuffle (reshuffles only when filters change)
    return filtered.sort(() => Math.random() - 0.5);
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(processedStustlers.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return processedStustlers.slice(start, end);
  }, [currentPage, processedStustlers]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Scroll to top when pagination changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  //   const filteredAndShuffled = useMemo(() => {
  //     return [...mockStustlers]
  //       .filter(
  //         (s) => selectedCategory === "All" || s.category === selectedCategory
  //       )
  //       .sort(() => Math.random() - 0.5);
  //   }, [selectedCategory]);

  return (
    <div className="pt-[90px] md:pt-[120px] lg:pt-[150px] pb-20 container px-4">
      <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
        <div
          className={`cursor-pointer border-[2px] md:border-[3px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-xl duration-150 ${
            selectedCategory === "All"
              ? "bg-primary text-white border-primary"
              : "text-primary border-primary"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </div>
        {stustlerCategories.map((c, i) => (
          <div
            key={i}
            onClick={() => setSelectedCategory(c.value)}
            className={`cursor-pointer border-[2px] md:border-[3px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-xl duration-150  ${
              selectedCategory === c.value
                ? "bg-primary text-white border-primary"
                : "text-primary border-primary"
            }`}
          >
            {c.title}
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12 lg:mt-16">
        <div className="relative">
          <GoSearch className="absolute top-[50%] left-[10px] translate-y-[-50%] md:left-[16px] md:text-2xl text-[#aaa]/50 text-xl" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-[45px] md:h-[60px] pl-[35px] md:pl-[50px] pr-[10px]  py-[10px] rounded-[10px] bg-transparent border outline-none w-full border-primary/50 text-xs md:text-lg placeholder:text-[#aaa]/50 caret-primary"
            placeholder="Search by name, category or skill"
          />
        </div>
      </div>

      {/* Featured stustler */}
      <h2 className="text-sm font-medium mt-[30px]  sm:mt-[50px] lg:mt-[70px] sm:text-xl md:text-2xl">
        Featured Stustlers
      </h2>

      {processedStustlers.length === 0 && (
        <div className="text-center py-40 text-gray-500 text-lg">
          No stustler found. Try adjusting your search or filters.
        </div>
      )}

      {/* Stustler cards will go here */}
      {processedStustlers.length > 0 && (
        <>
          <div className="min-h-[50vh] grid min-[550px]:grid-cols-2 md:grid-cols-3 px-4  gap-[50px] lg:gap-[95px]  mx-auto pt-[37px] lg:pt-[60px]">
            {paginatedData.map((stustler) => (
              <StustlersCard key={stustler._id} stustler={stustler} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
