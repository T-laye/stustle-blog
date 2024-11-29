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

const Page = () => {
  const [event, setEvent] = useState<Event | null>(null); // Handle the post state as Post | null
  const { eventSlug: $slug } = useParams();

  const { openEventModal } = useEventModalStore();

  // console.log(event);

  const fetchEvent = async () => {
    try {
      const eventData = await client.fetch(EVENT_QUERY, { slug: $slug });
      // console.log("Fetched Post:", eventData);
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

  return (
    <div className="max-md:pt-16  pt-[77px] pb-20 ">
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
        <div className="flex justify-between px-4  text-white w-full">
          <GoBack />
          <p className="text-primary font-medium">
            {`${event?.registrations?.length}` || 0}{" "}
            <span className="text-sm">Registered</span>
          </p>
        </div>
        <h1 className="blog-header text-center mt-10 sm:mt-16">
          {capitalizeWords(event?.theme)}
        </h1>
      </div>

      <div className="px-4 md:px-8 pt-4 md:pt-8 container">
        <div className="text-lg">
          <p>{event.description}</p>
        </div>

        <section className=" text-justify">
          <p className="mt-7 text-gray-300 text-sm text-end">{`${formatDate(event.date)} at ${event.time} WAT`}</p>{" "}
        </section>

        <div className="mt-5 md:mt-10 max-w-md mx-auto ">
          <Button fn={openEventModal} style="primary" type="button">
            Register Now
          </Button>
        </div>
      </div>
      <EventRegisterModal eventId={event?._id} event={event} />
    </div>
  );
};

export default Page;
