import { services } from "@/utils/contents";
import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface ServiceProps {
  title: string;
  image: string;
  color: string;
}

const ServiceCards: React.FC<ServiceProps> = (s) => {
  return (
    <div
      style={{ backgroundColor: s.color }}
      className={` h-[94px] w-full flex gap-2 items-center rounded-lg max-w-[448px] p-4`}
    >
      <div className="min-w-[70px] w-[70px] h-[70px] rounded-full overflow-hidden">
        <Image
          className="h-full w-full object-cover object-center "
          src={s.image}
          alt={s.title}
          height={100}
          width={100}
        />
      </div>

      <div className="flex-1 text-center text-[18px] ">
        {s.title.toUpperCase()}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="pb-20 pt-10 px-4  container mx-auto min-h-[50vh]">
      <h3 className=" flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>WHAT DO WE OFFER</span>
      </h3>

      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 sm:mt-16">
        {services.map((s, i) => (
          <ServiceCards
            key={i}
            color={s.color}
            title={s.title}
            image={s.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
