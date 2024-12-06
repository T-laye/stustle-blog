/* eslint-disable @next/next/no-img-element */
"use client";
import { capitalizeWords, formatDate } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import React from "react";
import { Event } from "../../../types/sanityTypes";
import { urlFor } from "@/sanity/lib/image";
// import { writeClient } from "@/sanity/lib/write-client";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // const [totalViews, setTotalViews] = useState(event.views || 0); // Initial views from the post prop
  const router = useRouter();

  const gotoEvent = () => {
    // handleCardClick();
    router.push(`/events/${event?.slug.current}`);
  };

  return (
    <div
      onClick={gotoEvent}
      className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[390px] lg:h-[380px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow relative"
    >
      <div className="h-1/2 min-h-[200px] bg-primary-activeCard rounded-xl overflow-hidden">
        <img
          height={400}
          width={400}
          src={urlFor(event?.image).url()} // Fallback image
          alt="event image"
          className="object-cover object-center h-full w-full hover:scale-105 duration-150"
        />
      </div>
      <div className="px-4 py-3 flex flex-col gap-1 justify-between h-full ">
        <div>
          <h3 className="text-xl font-medium line-clamp-1 text-start">
            {capitalizeWords(event?.theme)}
          </h3>
          <div className="line-clamp-4 text-sm text-gray-300">
            <p>{event?.description} </p>
          </div>
          <p className="text-xs mt-1 text-gray-300">
            {formatDate(event?.date)}
            <br />
            {event?.time} WAT
          </p>
        </div>
        <div>
          <p className="text-sm font-medium  text-end text-primary">{`${event?.registrations?.length || 0} Registered`}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
