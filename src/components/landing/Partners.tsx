import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Partners = () => {
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
        <h2 className="font-bold text-center md:mt-20">CALL FOR PARTNERS</h2>

        <div className="mt-5">
          <p className="text-center  mx-auto max-w-2xl sm:text-lg">
            Collaborate with us to provide meaningful job opportunities,
            empowering students to gain valuable experience and contribute to
            their futures. We also look forward to training our student
            hustlers, providing monthly financial aids and empowering them with
            digital skills. We&apos;re open for partnerships and collaborations
            to make these work. Kindly contact us
          </p>

          {/* <div className="max-w-4xl mx-auto mt-6 pr-1 sm:pr-3 rounded-xl flex items-center justify-between border-2 border-primary-active">
            <input
              placeholder="Email Address"
              type="text"
              className="w-full h-14 sm:h-16 px-3 py-6 rounded-lg placeholder:text-gray-200  bg-transparent  focus:outline-none caret-primary"
            />
            <div className="">
              <Button style="primary" type="submit">
                Join Now
              </Button>
            </div>
          </div> */}
          <div className="mt-5 w-fit mx-auto">
            <Button style="primary" type="button">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
