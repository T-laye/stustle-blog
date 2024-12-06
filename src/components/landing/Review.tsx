/* eslint-disable @next/next/no-img-element */
"use client";
import { client } from "@/sanity/lib/client";
import { REVIEWS_QUERY } from "@/sanity/lib/queries";
import React, { useRef, useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import type { Review } from "../../../types/sanityTypes";
import Loader from "../ui/Loader";
import { urlFor } from "@/sanity/lib/image";

const ReviewCard: React.FC<Review> = ({ comment, image, role, name }) => {
  return (
    <div className="min-w-[310px] lg:min-w-[528px] h-[242px] rounded-lg p-4 lg:p-8 bg-primary-light shadow-md flex flex-col justify-between">
      <div className="flex gap-2">
        <div className="h-12 min-w-12 rounded-full bg-gray-200 overflow-hidden">
          <img
            height={400}
            width={400}
            src={urlFor(image).url()} // Fallback image
            alt="event image"
            className="object-cover object-center h-full w-full hover:scale-105 duration-150"
          />
        </div>
        <div>
          <p className="text-center line-clamp-5">{comment}</p>
        </div>
      </div>
      <div>
        <p>{name}</p>
        <p className="text-primary">{role}</p>
      </div>
    </div>
  );
};

const Review: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<number | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null); // Type posts as array or null
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const posts = await client.fetch(REVIEWS_QUERY);
      // console.log("Fetched Posts:", JSON.stringify(posts, null, 2));
      setReviews(posts); // Set posts as raw data
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -322,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 322,
        behavior: "smooth",
      });
    }
  };

  const startAutoScroll = (): void => {
    autoScrollInterval.current = window.setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

        scrollContainerRef.current.scrollBy({
          left: atEnd ? -scrollWidth : 312,
          behavior: "smooth",
        });
      }
    }, 5000); // Adjust interval time as needed
  };

  const stopAutoScroll = (): void => {
    if (autoScrollInterval.current !== null) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Clean up interval on unmount
  }, []);

  return (
    <section
      id="review"
      className="pb-20 pt-10 px-4 container mx-auto min-h-[50vh]"
    >
      <h3 className="flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>MEET OUR SATISFIED CLIENTS</span>
      </h3>

      {loading ? (
        <div className=" my-20 w-full mx-auto flex justify-center">
          <Loader />
        </div> // Loading state
      ) : error ? (
        <div>{error}</div> // Error state
      ) : (
        <div
          ref={scrollContainerRef}
          className="mt-8 sm:mt-16 flex gap-4 md:gap-8 overflow-x-auto scroll-snap-x-mandatory scroll-smooth pb-10"
          onMouseEnter={stopAutoScroll} // Pause auto-scroll on hover
          onMouseLeave={startAutoScroll} // Resume auto-scroll when leaving
        >
          {reviews?.map((r) => (
            <ReviewCard
              key={r._id}
              _createdAt={r._createdAt}
              image={r.image}
              comment={r.comment}
              role={r.role}
              name={r.name}
              _id={r._id}
            />
          ))}
        </div>
      )}
      {/* <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard /> */}

      <div className="flex justify-center items-center gap-4 ">
        <button
          className="h-8 w-8 text-gray-500 rounded-full bg-gray-100 flex justify-center items-center active:bg-primary-light active:text-primary duration-150"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <GoArrowLeft size={24} />
        </button>
        <button
          className="h-8 w-8 text-gray-500 rounded-full bg-gray-100 flex justify-center items-center active:bg-primary-light active:text-primary duration-150"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <GoArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Review;
