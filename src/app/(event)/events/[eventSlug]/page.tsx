/* eslint-disable @next/next/no-img-element */
"use client";
import { client } from "@/sanity/lib/client";
import { EVENT_QUERY } from "@/sanity/lib/queries";
import { capitalizeWords, formatDate } from "@/utils/helpers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Event } from "../../../../../types/sanityTypes";
import Loader from "@/components/ui/Loader";
import GoBack from "@/components/ui/GoBack";
import { urlFor } from "@/sanity/lib/image";
import EventRegisterModal from "@/components/EventRegisterModal";
import Button from "@/components/ui/Button";
import { useEventModalStore } from "@/store/variables";
import { MdShare } from "react-icons/md";
import markdownit from "markdown-it";
import Link from "next/link";

const Page = () => {
  const [event, setEvent] = useState<Event | null>(null); // Handle the post state as Post | null
  const { eventSlug: $slug } = useParams();
  const md = markdownit();

  const parsedContent = md.render(event?.post || "");
  const { openEventModal } = useEventModalStore();

  // console.log(event?.registrations);

  const fetchEvent = async () => {
    try {
      const eventData = await client.fetch(EVENT_QUERY, { slug: $slug });
      // console.log("Fetched Event:", eventData);
      setEvent(eventData || null); // Ensure the post is set or null if not found
    } catch (error) {
      console.error("Error fetching Event:", error);
      setEvent(null); // Set to null in case of error
    }
  };

  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$slug]); // Fetch post when the ID changes

  if (!event) {
    return (
      <div className="mt-64">
        <Loader />
      </div>
    ); // Display loading state or error message
  }

  // SHARE
  const handleShare = () => {
    const url = window.location.href; // Get the current URL
    if (navigator.share) {
      // Use the Web Share API if available
      navigator
        .share({
          title: "Check out this event!",
          text: "Here's an event you might be interested in:",
          url,
        })
        .then(() => console.log("Content shared successfully"))
        .catch((error) => console.error("Error sharing content", error));
    } else {
      // Fallback: Copy the URL to the clipboard
      navigator.clipboard
        .writeText(url)
        .then(() => alert("URL copied to clipboard"))
        .catch((error) => console.error("Error copying URL", error));
    }
  };

  return (
    <div className="max-md:pt-16  pt-[90px] pb-20 ">
      <div
        className="h-[20vh] sm:h-[35vh] flex flex-col pt-3 sm:pt-7"
        style={{
          backgroundImage: event?.image
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(event?.image).url()})`
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/default-image.jpg')", // Fallback to a default image if post.image is not available
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div className="flex justify-between px-4 sm:px-8  text-white w-full container mx-auto">
          <GoBack />
          <div className="flex items-center space-x-3">
            {/* <p className="sm:text-lg font-medium">
              {event?.registrations?.length || 0}{" "}
              <span className="text-sm">Registered</span>
            </p> */}
            <p className="sm:text-lg font-medium">{`${(event?.attendees > 0 && event?.attendees + " " + "Attended") || (event?.registrations?.length > 0 && event?.registrations?.length + " " + "Registered") || 0 + " " + "Registered"} `}</p>

            <button onClick={handleShare} aria-label="Share">
              <MdShare size={28} />
            </button>
          </div>
        </div>
        <h1 className="blog-header text-center my-auto sm:mt-16">
          {capitalizeWords(event?.theme)}
        </h1>
      </div>

      <div className="px-4 md:px-8 pt-4 md:pt-8 container">
        <div className="px-4 md:px-8 pt-10 container">
          <div className="text-lg flex gap-2 mb-4">
            <h4 className="font-medium">Event Link :</h4>
            <Link className="text-primary" target="_blank" href={event?.link}>
              {event?.link}
            </Link>
          </div>
          <section className="mb-20 text-justify">
            {event.post && parsedContent ? (
              <article dangerouslySetInnerHTML={{ __html: parsedContent }} />
            ) : (
              <p>{event?.description}</p>
            )}
          </section>
        </div>

        <section className=" text-justify">
          <p className="mt-7 text-gray-300 text-sm text-end">{`${formatDate(event.date)} at ${event.time} WAT`}</p>{" "}
        </section>

        <div className="mt-5 md:mt-10 max-w-md mx-auto ">
          {event?.status === "opened" && (
            <Button fn={openEventModal} style="primary" type="button">
              Register Now
            </Button>
          )}
        </div>
      </div>
      <EventRegisterModal eventId={event?._id} event={event} />
    </div>
  );
};

export default Page;
