'use client'
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Partners = () => {

   const joinStustle = () => {
     window.open(
        "https://wa.me/2348115237006?text=Hi%2C%20My%20name%20is%20_______%20I%27d%20love%20to%20work%20with%20you%20guys.",
       "_blank" // Opens the link in a new tab
     );
   };

  return (
    <section
      id="contact"
      className="sm:mt-10 pb-20 mb-20 pt-10 px-4 relative z-10 min-h-[50vh] bg-primary-light overflow-hidden flex items-center"
    >
      <div className="z-10 h-20 w-20 sm:h-32 sm:w-32 lg:w-40 lg:h-40 absolute -top-1 -right-1">
        <Image
          src="/images/partners_1.png"
          alt=""
          height={400}
          width={400}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className=" z-10 h-16 w-16 sm:h-32 sm:w-32 lg:w-40 lg:h-40 absolute -top-2 -left-1">
        <Image
          src="/images/partners_2.png"
          alt=""
          height={400}
          width={400}
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="container mx-auto">
        <h2 className="font-semibold text-center mt-10 md:mt-20">
          CALL FOR PARTNERS AND SPONSORS
        </h2>

        <div className="mt-5">
          <p className="text-center  mx-auto max-w-2xl sm:text-lg">
            We&apos;re calling on brands, organizations, and individuals to partner
            with us for the BIG Conference 2025, a powerful gathering of
            students and young graduates across the country ready to build,
            innovate, and grow. 
            <br />
            <br />
            As a sponsor or partner, you&apos;ll not only support
            youth empowerment but also gain direct visibility by showcasing your
            products or services to a dynamic student audience. Let&apos;s build the
            next generation together.
          </p>

          <div className="mt-7 w-fit mx-auto">
            <Button fn={joinStustle} style="primary" type="button">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
