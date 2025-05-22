/* eslint-disable @next/next/no-img-element */
import { capitalizeWords } from "@/utils/helpers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BigCard = () => {
  const router = useRouter();

  const gotoEvent = () => {
    // handleCardClick();
    router.push(`/events/big-conference`);
  };

  return (
    <div
      onClick={gotoEvent}
      className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[390px] lg:h-[380px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow relative"
    >
      <div className="h-1/2 min-h-[200px] bg-primary-activeCard rounded-xl overflow-hidden">
        <Image
          height={400}
          width={400}
          src="/images/eventCardImage.png" // Fallback image
          alt="event image"
          className="object-cover object-center h-full w-full hover:scale-105 duration-150"
        />
      </div>
      <div className="px-4 py-3 flex flex-col gap-1 justify-between h-full ">
        <div>
          <h3 className="text-xl font-medium line-clamp-1 text-start">
            {capitalizeWords("B.I.G Conference 1.0")}
          </h3>
          <div className="line-clamp-4 mt-2 text-sm text-gray-300">
            <p>
              If you&apos;re a student or young graduate with big dreams, this
              is where you need to be.
            </p>
          </div>
          <p className="text-xs mt-2 font-bold text-gray-300">
            August 2025
            {/* <br /> */}
            {/* {event?.time} WAT */}
          </p>
        </div>
        <div>
          {/* <p className="text-sm font-medium  text-end text-primary">{`${event?.attendees ||  event?.registrations?.length  || 0} `}</p> */}
          {/* <p className="text-sm font-medium  text-end text-primary">{`${(event?.attendees && event?.attendees + " " + "Attended") || (event?.registrations?.length && event?.registrations?.length + " " + "Registered") || 0 + " " + "Registered"} `}</p> */}
        </div>
      </div>
    </div>
  );
};

export default BigCard;
