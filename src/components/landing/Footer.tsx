"use client";
import { getCurrentYear } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  const pathname = usePathname();
  return (
    <section
      className={` ${pathname.startsWith("/studio") && "hidden"} bg-primary text-white min-h-[20vh]`}
    >
      <div className="container mx-auto px-4 py-5">
        <h3 className="font-medium">CONTACT US</h3>

        <div className="flex justify-between gap-2 flex-wrap text-sm mt-4 sm:my-10">
          <Link href="tel:+2348115237006" className="flex gap-1 items-center">
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
          </div>
          <Link
            href="mailto:stustledev@gmail.com"
            className="flex max-sm:w-full items-center gap-1"
          >
            <MdMail size={24} />
            <span>stustledev@gmail.com</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-1 border-t-[0.5px] border-white mt-7 text-xs font-thin text-center pt-3">
          <span className="text-lg">&copy;</span>
          <span>{`${getCurrentYear()} Stustle.com. All rights reserved.`}</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
