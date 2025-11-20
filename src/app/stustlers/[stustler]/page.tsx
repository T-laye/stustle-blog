"use client";
import Image from "next/image";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import Button from "../../../components/ui/Button";
import { useParams, useRouter } from "next/navigation";
import { mockStustlers } from "../../../utils/mockStustlers";
import { capitalizeWords } from "../../../utils/helpers";

export default function Page() {
  const router = useRouter();
  const { stustler } = useParams();

  const stustlerDetails = mockStustlers.find(
    (s) => s.slug.current === stustler
  );

//   console.log("Stustler Details:", stustlerDetails);
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
      {stustlerDetails && (
        <>
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
            <div className="text-xl lg:text-2xl font-medium line-clamp-1">
              {capitalizeWords(stustlerDetails.name || "")}
            </div>
            <div className=" rounded-[20px] lg:text-lg line-clamp-1 text-primary bg-primary/10 text-sm px-5 py-1 font-medium">
              {capitalizeWords(stustlerDetails.subCategory)}
            </div>
            <div className="text-xs md:text-base font-medium text-[#5b5b5b] line-clamp-1">
              {capitalizeWords(stustlerDetails.category)}
            </div>
          </div>

          <div className="max-w-[250px] mx-auto md:max-w-[460px]">
            <Button style="primary" type="button">
              Hire this Stustler
            </Button>
          </div>

          <div className="text-sm md:text-[20px] lg:text-[24px] mt-[60px] space-y-[50px] lg:space-y-[120px] md:leading-[30px] lg:leading-[45px]">
            <p>
              <span className="font-semibold">Bio:</span> {stustlerDetails.bio}
            </p>

            <p>
              <span className="font-semibold">View Jobs/Portfolio:</span>{" "}
              <a href={stustlerDetails.link} className="text-[#0082DF]">
                Click to view
              </a>
            </p>

            <p>
              <span className="font-semibold">Tools Used:</span>{" "}
              {stustlerDetails.toolsUsed}
            </p>

            <p>
              <span className="font-semibold">Experience Level:</span>{" "}
              {stustlerDetails.experienceLevel}
            </p>

            <p>
              <span className="font-semibold">Price Range:</span>{" "}
              {stustlerDetails.priceRange}
            </p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className={`text-[#1FAF38]`}>Available</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
