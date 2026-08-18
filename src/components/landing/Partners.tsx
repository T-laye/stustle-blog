'use client'
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Partners = () => {

   const joinFreeCommunity = () => {
     window.open(
        "https://wa.me/2348115237006?text=Hi%2C%20I%27d%20like%20to%20join%20the%20free%20Stustle%20community.",
       "_blank" // Opens the link in a new tab
     );
   };

   const explorePaidPrograms = () => {
     window.open(
        "https://wa.me/2348115237006?text=Hi%2C%20I%27m%20interested%20in%20Stustle%27s%20paid%20programs%20(Masterclasses%2FCohort%20Program).%20Please%20share%20more%20details.",
       "_blank" // Opens the link in a new tab
     );
   };

   const partnerWithUs = () => {
     window.open(
        "https://wa.me/2348115237006?text=Hi%2C%20my%20organization%20is%20interested%20in%20partnering%20with%20Stustle%20(sponsoring%20a%20cohort%2C%20content%2C%20or%20talent%20pipeline).",
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
        <h2 className="font-bold text-center md:mt-20">
          JOIN THE STUSTLE MOVEMENT
        </h2>

        <div className="flex justify-center gap-8 sm:gap-14 mt-5">
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl text-primary font-bold">
              2,000+
            </span>
            <span className="text-base md:text-lg">Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl text-primary font-bold">
              40+
            </span>
            <span className="text-base md:text-lg">Careers Transformed</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="mt-5 flex flex-wrap gap-4 w-fit mx-auto justify-center">
            <Button fn={joinFreeCommunity} style="primary" type="button">
              Join Free Community
            </Button>
            <Button fn={explorePaidPrograms} style="secondary" type="button">
              Explore Paid Programs
            </Button>
          </div>

          <div className="mt-10 border-t border-primary-active pt-8 max-w-2xl mx-auto">
            <h3 className="font-semibold text-center">
              For Partners & Companies
            </h3>
            <p className="text-center mx-auto max-w-2xl sm:text-lg mt-3">
              Organizations can sponsor cohorts, create exclusive content, and
              build talent pipelines with us.
            </p>

            <div className="mt-5 w-fit mx-auto">
              <Button fn={partnerWithUs} style="reverse" type="button">
                Partner With Us
              </Button>
            </div>

            <p className="text-center mt-4 text-sm sm:text-base">
              Or reach out directly:{" "}
              <a
                href="mailto:partnerships@stustle.com"
                className="text-primary font-semibold hover:underline"
              >
                partnerships@stustle.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
