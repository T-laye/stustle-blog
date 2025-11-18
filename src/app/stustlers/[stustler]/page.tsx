"use client";
import Image from "next/image";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import Button from "../../../components/ui/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // share function: uses Web Share API when available, falls back to clipboard/prompt
  const shareProfile = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: "Stustler — Jane Doe",
      text: "Check out this Stustler on Stustle",
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      } else {
        // last resort for very old browsers
        // eslint-disable-next-line no-alert
        window.prompt("Copy this link:", url);
      }
    } catch (err) {
      // user probably cancelled or an error occurred — keep silent or log if needed
      console.error("Share failed:", err);
    }
  };

  return (
    <div className="pt-[90px] md:pt-[120px] lg:pt-[150px] pb-20 container px-5">
      <div className="text-primary text-2xl md:text-4xl flex justify-between items-center">
        <BiArrowBack onClick={() => router.back()} className="cursor-pointer" />
        <button
          type="button"
          onClick={shareProfile}
          aria-label="Share profile"
          className="cursor-pointer"
        >
          <GoShareAndroid />
        </button>
      </div>

      <div className="bg-[#FFF1DC] min-w-[270px] min-h-[270px] w-[270px] h-[270px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden flex items-center justify-center mx-auto mt-[30px]">
        <Image
          height={500}
          width={500}
          src="/images/obaro.jpeg"
          alt="stustler"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-[18px] md:mt-[10px] space-y-[10px] md:space-y-[10px] mb-[30px] lg:mb-[60px]">
        <div className="text-xl lg:text-2xl font-medium">Jane Doe</div>
        <div className=" rounded-[20px] lg:text-lg text-primary bg-primary/10 text-sm px-5 py-1 font-medium">
          UI/UX Designer
        </div>
        <div className="text-xs md:text-base font-medium text-[#5b5b5b]">
          Web & UI/UX Design
        </div>
      </div>

      <div className="max-w-[250px] mx-auto md:max-w-[460px]">
        <Button style="primary" type="button">
          Hire this Stustler
        </Button>
      </div>

      <div className="text-sm md:text-[20px] lg:text-[24px] mt-[60px] space-y-[50px] lg:space-y-[120px] md:leading-[30px] lg:leading-[45px]">
        <p>
          <span className="font-semibold">Bio:</span> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta dolorem exercitationem veniam
          animi quo culpa porro aspernatur nam pariatur. Culpa eius itaque
          reiciendis eveniet autem est animi mollitia facilis enim facere
          veritatis quae minima eaque ea quisquam dicta repudiandae nisi, nam
          accusantium porro laudantium nesciunt. Ratione consequatur harum ipsum
          odit!
        </p>

        <p>
          <span className="font-semibold">View Jobs/Portfolio:</span>{" "}
          <a href="#" className="text-[#0082DF]">
            Click to view
          </a>
        </p>

        <p>
          <span className="font-semibold">Tools Used:</span> Figma, Adobe XD,
          Sketch, InVision
        </p>

        <p>
          <span className="font-semibold">Experience Level:</span> Beginner
        </p>

        <p>
          <span className="font-semibold">Price Range:</span> N5,000 - N20,000
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className={`text-[#1FAF38]`}>Available</span>
        </p>
      </div>
    </div>
  );
}
