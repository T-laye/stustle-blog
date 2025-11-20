"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { GoSearch } from "react-icons/go";
import Fuse from "fuse.js";
import StustlersCard from "../../components/stustlers/StustlersCard";
import { mockStustlers } from "../../utils/mockStustlers";
import { stustlerCategories } from "../../utils/contents";

/**
 * Infinite scroll configuration
 */
const ITEMS_PER_LOAD = 9;
const SKELETON_COUNT = ITEMS_PER_LOAD; // how many skeleton cards to show initially

export default function Page() {
  // filters & search
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // shuffled list is set on client only to avoid SSR randomness/hydration mismatch
  const [shuffled, setShuffled] = useState<typeof mockStustlers>([]);
  const [isClientReady, setIsClientReady] = useState(false);

  // infinite scroll state
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // -------------------------
  // Client-only initialization
  // -------------------------
  useEffect(() => {
    // run only on client after hydration
    setIsClientReady(true);

    // shuffle mockStustlers on client only
    const shuffledCopy = [...mockStustlers].sort(() => Math.random() - 0.5);
    setShuffled(shuffledCopy);

    // reset visible count (in case user navigated back)
    setVisibleCount(ITEMS_PER_LOAD);
  }, []);

  // -------------------------
  // Fuse (fuzzy search) setup
  // -------------------------
  const fuse = useMemo(() => {
    if (!shuffled.length) return null;

    return new Fuse(shuffled, {
      keys: ["name", "subCategory", "bio", "toolsUsed", "category"],
      threshold: 0.35, // tweak sensitivity (0 = exact, 1 = fuzzy)
      distance: 100,
      minMatchCharLength: 1,
      ignoreLocation: true,
    });
  }, [shuffled]);

  // -------------------------
  // Derived filtered list
  // -------------------------
  const filtered = useMemo(() => {
    // While client isn't ready, return empty array so SSR and initial client render match (skeletons shown)
    if (!isClientReady) return [];

    // start from shuffled (client-randomized)
    let base = shuffled;

    // category filter
    if (selectedCategory !== "All") {
      base = base.filter((s) => s.category === selectedCategory);
    }

    // search — if there's a query and fuse is ready, use fuzzy search
    const q = searchTerm.trim();
    if (q.length > 0 && fuse) {
      const results = fuse.search(q);
      // map to items
      base = results.map((r) => r.item);

      // if after fuse we still want category filtering ensure it's applied (fuse searches across all)
      if (selectedCategory !== "All") {
        base = base.filter((s) => s.category === selectedCategory);
      }
    }

    return base;
  }, [isClientReady, shuffled, selectedCategory, searchTerm, fuse]);

  // -------------------------
  // Show more (infinite load)
  // -------------------------
  const hasMore = visibleCount < filtered.length;

  const loadMore = useCallback(() => {
    if (!hasMore) return;
    setIsLoadingMore(true);
    // small simulated delay to show loading UX
    setTimeout(() => {
      setVisibleCount((c) => Math.min(c + ITEMS_PER_LOAD, filtered.length));
      setIsLoadingMore(false);
    }, 400);
  }, [hasMore, filtered.length]);

  // IntersectionObserver to detect when the sentinel is visible
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !isClientReady) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasMore && !isLoadingMore) {
            loadMore();
          }
        });
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [sentinelRef, hasMore, isLoadingMore, isClientReady, loadMore]);

  // reset visibleCount & scroll to top when category or search changes
  useEffect(() => {
    if (!isClientReady) return;
    setVisibleCount(ITEMS_PER_LOAD);
    // smooth scroll to top of list
    window.scrollTo({
      top: -100,
      behavior: "smooth",
    });
  }, [selectedCategory, searchTerm, isClientReady]);

  // displayed items for current infinite scroll viewport
  const visibleItems = filtered.slice(0, visibleCount);

  // -------------------------
  // Helpers / UI
  // -------------------------
//   const clearFilters = () => {
//     setSelectedCategory("All");
//     setSearchTerm("");
//   };

  // Skeleton card component (simple placeholder)
  const SkeletonCard = () => (
    <div className="w-fit place-self-center p-2 md:p-4 rounded-[15px]">
      <div className="bg-[#FFF1DC] min-w-[250px] min-h-[250px] w-[250px] h-[250px] xl:h-[300px] xl:w-[300px] rounded-full overflow-hidden flex items-center justify-center animate-pulse" />
      <div className="flex flex-col justify-center items-center mt-[10px] space-y-[8px]">
        <div className="h-5 w-40 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-6 w-28 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-3 w-20 rounded-md bg-gray-200 animate-pulse" />
      </div>
    </div>
  );

  return (
    <div className="pt-[90px] md:pt-[120px] lg:pt-[150px] pb-20 container px-4">
      {/* Category tabs */}
      <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSelectedCategory("All")}
          className={`cursor-pointer border-[2px] md:border-[3px] whitespace-nowrap font-semibold rounded-[8px] md:rounded-[20px] px-6 py-2 md:px-[30px] md:py-4 text-sm md:text-xl duration-150 ${
            selectedCategory === "All"
              ? "bg-primary text-white border-primary"
              : "text-primary border-primary"
          }`}
        >
          All
        </div>

        {stustlerCategories.map((c) => (
          <div
            key={c.value}
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

      {/* Search + Clear */}
      <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
        <div className="relative w-full md:max-w-xl">
          <GoSearch className="absolute top-[50%] left-[10px] translate-y-[-50%] md:left-[16px] md:text-2xl text-[#aaa]/50 text-xl" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-[45px] md:h-[60px] pl-[35px] md:pl-[50px] pr-[10px] py-[10px] rounded-[10px] bg-transparent border outline-none w-full border-primary/50 text-xs md:text-lg placeholder:text-[#aaa]/50 caret-primary"
            placeholder="Search by name, category or skill (fuzzy search enabled)"
          />
        </div>

        {/* <div className="flex items-center gap-3">
          <button
            onClick={clearFilters}
            className="px-4 py-2 border rounded bg-white text-sm md:text-base"
          >
            Clear
          </button>
        </div> */}
      </div>

      {/* Header */}
      <h2 className="text-sm font-medium mt-[30px] sm:mt-[50px] lg:mt-[70px] sm:text-xl md:text-2xl">
        Featured Stustlers
      </h2>

      {/* Empty / Skeleton handling */}
      {!isClientReady && (
        <div className="min-h-[50vh] grid min-[550px]:grid-cols-2 md:grid-cols-3 px-4 gap-[50px] lg:gap-[95px] mx-auto pt-[37px] lg:pt-[60px]">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={`sk-${i}`} />
          ))}
        </div>
      )}

      {isClientReady && filtered.length === 0 && (
        <div className="text-center py-40 text-gray-500 text-lg">
          No stustler found. Try adjusting your search or filters.
        </div>
      )}

      {/* Grid of cards */}
      {isClientReady && filtered.length > 0 && (
        <>
          <div className="min-h-[50vh] grid min-[550px]:grid-cols-2 md:grid-cols-3 px-4 gap-[50px] lg:gap-[95px] mx-auto pt-[37px] lg:pt-[60px]">
            {visibleItems.map((stustler) => (
              <StustlersCard key={stustler._id} stustler={stustler} />
            ))}

            {/* If still loading more, show skeleton placeholders at the end */}
            {isLoadingMore &&
              Array.from({
                length: Math.min(
                  ITEMS_PER_LOAD,
                  filtered.length - visibleItems.length
                ),
              }).map((_, i) => <SkeletonCard key={`load-sk-${i}`} />)}
          </div>

          {/* Sentinel for infinite scroll */}
          <div ref={sentinelRef} />

          {/* Load indicator */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {isLoadingMore ? (
              <div className="text-gray-600">Loading more...</div>
            ) : hasMore ? (
              <div className="text-gray-600">Scroll to load more</div>
            ) : (
              <div className="text-gray-600">You have reached the end</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
