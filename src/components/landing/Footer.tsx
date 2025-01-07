"use client";
import { getCurrentYear } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  // const pathname = usePathname();
  return (
    <section id="contact" className="min-h-[20vh] bg-primary text-white">
      <div className="container mx-auto px-4 py-10">
        {/* <div className="flex justify-between mb-10 max-sm:flex-cl max-sm:items-center max-sm:gap-10"> */}
        <div className="grid max-sm:grid-cols-3 grid-cols-4 gap-4 max-[300px]:flex max-[300px]:flex-col max-[300px]:gap-10">
          <div className="min-h-7 h-7 bg-red300  place-self-start max-sm:min-h-5 max-sm:h-7 min-w-80 max-sm:col-span-3 ">
            <Link href="/" className="inline-block h-full ">
              <Image
                src="/images/white-logo.svg"
                height={500}
                width={500}
                className="h-full w-full object-contain"
                alt="Stustle Logo"
              />
            </Link>
          </div>

          <div className="bggreen-300 w-fit flex flex-col justify-center max-sm:items-center gap-5">
            <h5 className="font-medium">Information</h5>

            <div className="flex-col flex gap-4 text-sm  whitespace-nowrap">
              <Link href="/#about">About us</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/">FAQ</Link>
            </div>
          </div>
          {/* 
          <div className="bg-red-300 flex flex-col justify-self-center justify-center w-full whitespace-nowrap text-center ">
            Join our community
          </div> */}
          <div className="w-full bg-blue300 place-self-center max-sm:order-3 max-sm:col-span-3 px-2  ">
            <Link href="#">Join our community</Link>
          </div>

          <div className="bgred-300 max-sm:order-2 w-fit place-self-end max-[300px]:place-self-start gap-6 flex flex-col justify-center max-sm:gap-4 max-sm:items-center max-[300px]:items-start max-sm:col-span-2 ">
            <h5 className="font-medium">Contact us</h5>

            <div className="flex flex-col gap-4 text-sm max-sm:items-center max-[300px]:items-start ">
              <Link
                href="mailto:contact@stustle.com"
                className="flex max-sm:w-full items-center gap-1"
              >
                <MdMail size={24} />
                <span>contact@stustle.com</span>
              </Link>

              <Link
                href="tel:+2348115237006"
                className="flex gap-1 items-center"
              >
                <MdLocalPhone size={24} />
                <span>+234 811 5237 006</span>
              </Link>

              <div className="flex gap-4 sm:gap-8">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/stustle_official/profilecard/?igsh=czgzeDUzNnQ3Zml2"
                  className="flex  "
                >
                  <div className="min-w-6 min-h-6 h-6 w-6">
                    <Image
                      src="/images/skill-icons_instagram.png"
                      height={100}
                      width={100}
                      className="min-w-6 min-h-6 object-contain"
                      alt="insta"
                    />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://x.com/stustle?t=oUhSdft2m5friz4KZjAeng&s=09"
                  className="flex "
                >
                  <FaXTwitter size={24} className="text-[#333]" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/stustle/"
                  className="flex "
                >
                  <div className="min-w-6 min-h-6 h-6 w-6">
                    <Image
                      src="/images/devicon_linkedin.png"
                      height={100}
                      width={100}
                      className=" object-contain"
                      alt="linkedIn"
                    />
                  </div>
                </Link>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 border-t-[0.5px] border-white mt-7 text-xs font-thin text-center pt-3">
          <span className="text-lg">&copy;</span>
          <span>{`${getCurrentYear()} Stustle.com. All rights reserved.`}</span>
        </div>
      </div>
    </section>
    // <section
    //   className={` ${pathname.startsWith("/studio") && "hidden"} bg-primary text-white min-h-[20vh]`}
    // >
    //   <div className="container mx-auto px-4 py-5">
    //     <h3 className="font-medium">CONTACT US</h3>

    //     <div className="flex justify-between gap-2 flex-wrap text-sm mt-4 sm:my-10">
    //       <Link href="tel:+2348115237006" className="flex gap-1 items-center">
    //         <MdLocalPhone size={24} />
    //         <span>+234 811 5237 006</span>
    //       </Link>

    //       <div className="flex gap-4 sm:gap-8">
    //         <Link
    //           target="_blank"
    //           href="https://www.instagram.com/stustle_official/profilecard/?igsh=czgzeDUzNnQ3Zml2"
    //           className="flex  "
    //         >
    //           <div className="min-w-6 min-h-6 h-6 w-6">
    //             <Image
    //               src="/images/skill-icons_instagram.png"
    //               height={100}
    //               width={100}
    //               className="min-w-6 min-h-6 object-contain"
    //               alt="insta"
    //             />
    //           </div>
    //         </Link>
    //         <Link
    //           target="_blank"
    //           href="https://x.com/stustle?t=oUhSdft2m5friz4KZjAeng&s=09"
    //           className="flex "
    //         >
    //           <FaXTwitter size={24} className="text-[#333]" />
    //         </Link>
    //         <Link
    //           target="_blank"
    //           href="https://www.linkedin.com/company/stustle/"
    //           className="flex "
    //         >
    //           <div className="min-w-6 min-h-6 h-6 w-6">
    //             <Image
    //               src="/images/devicon_linkedin.png"
    //               height={100}
    //               width={100}
    //               className=" object-contain"
    //               alt="linkedIn"
    //             />
    //           </div>
    //         </Link>
    //       </div>
    //       <Link
    //         href="mailto:stustledev@gmail.com"
    //         className="flex max-sm:w-full items-center gap-1"
    //       >
    //         <MdMail size={24} />
    //         <span>stustledev@gmail.com</span>
    //       </Link>
    //     </div>

    //     <div className="flex items-center justify-center gap-1 border-t-[0.5px] border-white mt-7 text-xs font-thin text-center pt-3">
    //       <span className="text-lg">&copy;</span>
    //       <span>{`${getCurrentYear()} Stustle.com. All rights reserved.`}</span>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Footer;
