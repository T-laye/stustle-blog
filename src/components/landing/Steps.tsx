import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const Steps = () => {
  return (
    <section className="pb-20 pt-10 px-4  container mx-auto min-h-[50vh]">
      <h3 className=" flex items-center gap-2 sm:gap-4 text-primary justify-center">
        <IoIosCheckmarkCircleOutline />
        <span>WHAT DO WE OFFER</span>
      </h3>
    </section>
  );
}

export default Steps