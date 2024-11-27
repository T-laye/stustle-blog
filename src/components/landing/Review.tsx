'use client'
import React, { useRef, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ReviewCard: React.FC = () => {
  return (
    <div className="min-w-[300px] lg:min-w-[528px] h-[242px] rounded-lg p-4 lg:p-8 bg-primary-light shadow-md flex flex-col justify-between">
      <div className="flex gap-5">
        <div className="h-10 min-w-10 rounded-full bg-gray-200"></div>
        <div>
          <p className="text-center line-clamp-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            sequi, similique quis quisquam ad excepturi sunt nemo iusto minus
            libero?
          </p>
        </div>
      </div>
      <div>
        <p>Daramola Debby</p>
        <p className="text-primary">Stustler</p>
      </div>
    </div>
  );
};

const Review: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<number | null>(null);

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -312,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 312,
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
    <section id="review" className="pb-20 pt-10 px-4 container mx-auto min-h-[50vh]">
      <h3 className="flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>MEET OUR SATISFIED CLIENTS</span>
      </h3>

      <div
        ref={scrollContainerRef}
        className="mt-8 sm:mt-16 flex gap-4 md:gap-8 overflow-x-auto scroll-snap-x-mandatory scroll-smooth pb-10"
        onMouseEnter={stopAutoScroll} // Pause auto-scroll on hover
        onMouseLeave={startAutoScroll} // Resume auto-scroll when leaving
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

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
