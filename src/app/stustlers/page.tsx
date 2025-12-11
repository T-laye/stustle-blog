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
import { stustlerCategories } from "../../utils/contents";
import { client } from "../../sanity/lib/client";
import { STUSTLERS_QUERY } from "../../sanity/lib/queries";
import { Stustler } from "../../../types/sanityTypes";

/** Infinite scroll config */
const ITEMS_PER_LOAD = 9;
const SKELETON_COUNT = ITEMS_PER_LOAD;

export default function Page() {
  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Sanity data
  const [stustlers, setStustlers] = useState<Stustler[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // Client hydration
  const [isClientReady, setIsClientReady] = useState<boolean>(false);

  // Shuffle & display
  const [shuffled, setShuffled] = useState<Stustler[]>([]);

  // Infinite scroll
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  /**
   * FETCH SANITY DATA
   */
  useEffect(() => {
    const fetchStustlers = async () => {
      try {
        const data: Stustler[] = await client.fetch(STUSTLERS_QUERY);
        setStustlers(data);
      } catch (err) {
        console.error("Error fetching stustlers:", err);
        // setError("Failed to fetch stustlers");
      } finally {
        setLoading(false);
      }
    };

    fetchStustlers();
  }, []);

  /**
   * CLIENT-ONLY SETUP (handles shuffle + hydration safety)
   */
  useEffect(() => {
    if (loading) return;

    setIsClientReady(true);

    // use Sanity if available, otherwise fallback to mock
    // const source = stustlers;

    const shuffledCopy = [...stustlers].sort(() => Math.random() - 0.5);
    setShuffled(shuffledCopy);

    setVisibleCount(ITEMS_PER_LOAD);
  }, [loading, stustlers]);

  /**
   * FUSE SEARCH
   */
  const fuse = useMemo(() => {
    if (!shuffled.length) return null;

    return new Fuse(shuffled, {
      keys: ["name", "bio", "subCategory", "toolsUsed", "category"],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, [shuffled]);

  /**
   * FILTER + SEARCH
   */
  const filtered: Stustler[] = useMemo(() => {
    if (!isClientReady) return [];

    let base = shuffled;

    // Category filter
    if (selectedCategory !== "All") {
      base = base.filter((s) => s.category === selectedCategory);
    }

    // Search
    const q = searchTerm.trim();
    if (q.length > 0 && fuse) {
      const results = fuse.search(q).map((r) => r.item);

      // Preserve category filter post-search
      if (selectedCategory !== "All") {
        return results.filter((s) => s.category === selectedCategory);
      }

      return results;
    }

    return base;
  }, [isClientReady, shuffled, selectedCategory, searchTerm, fuse]);

  /**
   * INFINITE SCROLL
   */
  const hasMore = visibleCount < filtered.length;

  const loadMore = useCallback(() => {
    if (!hasMore) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + ITEMS_PER_LOAD, filtered.length)
      );
      setIsLoadingMore(false);
    }, 400);
  }, [hasMore, filtered.length]);

  // intersection observer
  useEffect(() => {
    if (!isClientReady) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isClientReady, sentinelRef, hasMore, isLoadingMore, loadMore]);

  // Reset scroll on filter/search change
  useEffect(() => {
    if (!isClientReady) return;

    setVisibleCount(ITEMS_PER_LOAD);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory, searchTerm, isClientReady]);

  const visibleItems = filtered.slice(0, visibleCount);

  /**
   * SKELETON COMPONENT
   */
  const SkeletonCard = () => (
    <div className="w-fit place-self-center p-2 md:p-4 rounded-[15px] animate-pulse">
      <div className="bg-[#FFF1DC] w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full" />
      <div className="flex flex-col items-center mt-3 space-y-2">
        <div className="h-5 w-40 bg-gray-200 rounded-md" />
        <div className="h-6 w-28 bg-gray-200 rounded-full" />
        <div className="h-3 w-20 bg-gray-200 rounded-md" />
      </div>
    </div>
  );

  return (
    <div className="pt-[90px] md:pt-[120px] lg:pt-[150px] pb-20 container px-4">
      {/* CATEGORY TABS */}
      <div className="flex gap-5 overflow-auto items-center text-lg lg:text-2xl">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`cursor-pointer border-2 rounded-[12px] px-6 py-2 whitespace-nowrap duration-150
          ${
            selectedCategory === "All"
              ? "bg-primary text-white border-primary"
              : "text-primary border-primary"
          }`}
        >
          All
        </button>

        {stustlerCategories.map((c) => (
          <button
            key={c.value}
            onClick={() => setSelectedCategory(c.value)}
            className={`cursor-pointer border-2 rounded-[12px] px-6 py-2 whitespace-nowrap duration-150
            ${
              selectedCategory === c.value
                ? "bg-primary text-white border-primary"
                : "text-primary border-primary"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-3">
        <div className="relative w-full md:max-w-xl">
          <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#aaa]/50" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-[45px] md:h-[60px] pl-[40px] border focus:border-2 border-primary/50 focus:border-primary/50 rounded-[10px] w-full bg-transparent duration-150 outline-none px-4 md:text-lg placeholder:text-gray-300"
            placeholder="Search by name, category or skill..."
          />
        </div>
      </div>

      <h2 className="text-sm font-medium mt-[30px] md:text-2xl">
        Featured Stustlers
      </h2>

      {/* SKELETON (LOADING OR NOT READY) */}
      {(loading || !isClientReady) && (
        <div className="grid min-[550px]:grid-cols-2 md:grid-cols-3 gap-[50px] pt-[37px]">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && isClientReady && filtered.length === 0 && (
        <div className="text-center py-40 text-gray-500">
          No stustler found.
        </div>
      )}

      {/* ITEMS */}
      {!loading && isClientReady && filtered.length > 0 && (
        <>
          <div className="grid min-[550px]:grid-cols-2 lg:grid-cols-3 gap-[50px] pt-[37px]">
            {visibleItems.map((s) => (
              <StustlersCard key={s._id} stustler={s} />
            ))}

            {/* Loading placeholders */}
            {isLoadingMore &&
              Array.from({
                length: Math.min(
                  ITEMS_PER_LOAD,
                  filtered.length - visibleItems.length
                ),
              }).map((_, i) => <SkeletonCard key={`load-${i}`} />)}
          </div>

          <div ref={sentinelRef} />

          <div className="flex justify-center mt-10 text-gray-600">
            {isLoadingMore
              ? "Loading more..."
              : hasMore
                ? "Scroll to load more"
                : "You reached the end"}
          </div>
        </>
      )}
    </div>
  );
}
