"use client";
import Image from "next/image";
import React from "react";
// import Button from "../ui/Button";

const Partners = () => {
  // const joinStustle = () => {
  //   window.open(
  //     "https://wa.me/2348115237006?text=Hi%2C%20My%20name%20is%20_______%20I%27d%20love%20to%20work%20with%20you%20guys.",
  //     "_blank" // Opens the link in a new tab
  //   );
  // };

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
          CALL FOR PARTNERS, MENTORS & SPONSORS
        </h2>

        <div className="mt-5">
          <p className="text-justify  mx-auto max-w-2xl sm:text-lg">
            We&apos;re building the Stustle Talent Community, a platform where
            students and young graduates can learn, earn, and grow through
            skills development, mentorship, and real job opportunities.
            We&apos;re inviting forward-thinking brands, organisations, and
            leaders to partner with us in shaping this movement from the ground
            up.
            <br />
            <br />
            We&apos;re also opening early conversations for sponsorship and
            partnerships for the B.I.G Conference 2026, where thousands of young
            people will gather to build, innovate, and grow. By joining us,
            you&apos;re not only investing in youth empowerment but also gaining
            meaningful visibility and connection with a vibrant, impact-driven
            audience.
            <br />
            <br />
            Let&apos;s create opportunities, transform lives, and build the next
            generation together. Contact us today to explore partnership,
            mentorship, or sponsorship opportunities. Send mail to{" "}
            {/* <br /> */}
            {/* <div className=""> */}
            <a
              href="mailto:jane@stustle.com"
              className="text-blue-500  underline underline-offset-4"
            >
              jane@stustle.com
            </a>
            ,{" "}
            <a
              href="mailto:stustledev@gmail.com"
              className="text-blue-500  underline underline-offset-4"
            >
              stustledev@gmail.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:08115237006"
              className="text-blue-500 underline underline-offset-4"
            >
              08115237006
            </a>.
            {/* </div> */}
          </p>

          {/* <div className="mt-7 w-fit mx-auto">
            <Button fn={joinStustle} style="primary" type="button">
              Join Now
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
