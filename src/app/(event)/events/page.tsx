/* eslint-disable @next/next/no-img-element */
"use client";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { capitalizeWords } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { Event } from "../../../../types/sanityTypes";
import Loader from "@/components/ui/Loader";
import { urlFor } from "@/sanity/lib/image";
import EventCard from "@/components/ui/EventCard";
// import EventRegisterModal from "@/components/EventRegisterModal";

const Page = () => {
  const [events, setEvents] = useState<Event[] | null>(null); // Type posts as array or null
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state
  // const [randomNumber, setRandomNumber] = useState<number>(0); // State for the random index

  // Fetch posts with error and loading handling
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const events = await client.fetch(EVENTS_QUERY);
      console.log("Fetched Posts:", events);
      setEvents(events); // Set posts as raw data
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  // Function to update the random number every 2 seconds
  // const changeBackground = () => {
  //   if (events && events.length > 0) {
  //     const randomIndex = getRandomIndex(events.length);
  //     setRandomNumber(randomIndex);
  //   }
  // };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Set interval to change the background and title every 2 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     changeBackground();
  //   }, 2000); // Change every 2 seconds

  //   // Clean up interval on component unmount
  //   return () => clearInterval(intervalId);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [events]); // Re-run effect when posts change

  // Dynamically generate background images based on posts
  const getBackgroundImage = (index: number) => {
    return events && events[index]
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(events[index].image).url() || ""})`
      : "";
  };

  const getTitle = (index: number) => {
    return events && events[index] ? events[index].theme : "";
  };

  const renderEvents = events?.map((e) => <EventCard key={e._id} event={e} />);

  return (
    <div className="pt-[76px] pb-20">
      {/* Header Section */}
      {events && (
        <div
          className="h-[20vh] sm:h-[35vh] duration-150 transition-all ease-in-out"
          style={{
            backgroundImage: getBackgroundImage(0), // Use the random index for background
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="blog-header text-center duration-150 transition-all ease-in-out">
            {capitalizeWords(getTitle(0))}{" "}
            {/* Display the title of the random post */}
          </h1>
        </div>
      )}

      {/* events Section */}
      {loading ? (
        <div className=" mt-36 w-screen flex justify-center ">
          <Loader />
        </div> // Loading state
      ) : error ? (
        <div>{error}</div> // Error state
      ) : (
        <div className=" min-h-[50vh] grid min-[510px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-8 pt-10 container ">
          {renderEvents}
        </div>
      )}
    </div>
  );
};

export default Page;
