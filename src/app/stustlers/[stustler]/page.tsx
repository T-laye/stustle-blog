"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import Button from "../../../components/ui/Button";
import { useParams, useRouter } from "next/navigation";
import { capitalizeWords } from "../../../utils/helpers";

import { client } from "../../../sanity/lib/client";
import { STUSTLER_QUERY, STUSTLERS_QUERY } from "../../../sanity/lib/queries";
import { Stustler } from "../../../../types/sanityTypes";
import { stustlerCategories } from "../../../utils/contents";
import StustlersCard from "../../../components/stustlers/StustlersCard";

export default function Page() {
  const router = useRouter();
  const { stustler } = useParams(); // slug from URL

  // state
  const [data, setData] = useState<Stustler | null>(null);
  const [related, setRelated] = useState<Stustler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // -------------------------------
  // 🔥 FETCH MAIN STUSTLER + RELATED
  // -------------------------------
  useEffect(() => {
    if (!stustler) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        // fetch this stustler
        const stustlerData: Stustler | null = await client.fetch(
          STUSTLER_QUERY,
          { slug: String(stustler) }
        );

        setData(stustlerData);

        // fetch all (for future: related list, recommended list etc.)
        const all: Stustler[] = await client.fetch(STUSTLERS_QUERY);
        setRelated(all);
      } catch (err) {
        console.error("Error fetching:", err);
        setError("Failed to fetch stustler");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stustler]);

  // -------------------------------
  // SHARE FUNCTION
  // -------------------------------
  const shareProfile = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";

    const shareData = {
      title: data?.name || "Stustler",
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
        window.prompt("Copy this link:", url);
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  // -------------------------------
  // UI STATES
  // -------------------------------
  if (loading) {
    return (
      <div className="pt-[120px] text-center text-gray-500">Loading...</div>
    );
  }

  if (error || !data) {
    return (
      <div className="pt-[120px] text-center text-gray-500">
        Failed to load Stustler.
      </div>
    );
  }

  // -------------------------------
  // MAIN UI
  // -------------------------------
  return (
    <div className="pt-[90px] md:pt-[120px] lg:pt-[150px] pb-20 container px-5">
      {/* HEADER */}
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

      {/* PROFILE IMAGE */}
      <div className="bg-[#FFF1DC] min-w-[270px] min-h-[270px] w-[270px] h-[270px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden flex items-center justify-center mx-auto mt-[30px]">
        <Image
          height={500}
          width={500}
          // You can replace this with actual sanity image later
          src={data.imageLink || "/placeholder-profile.png"}
          alt={data.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* BASIC INFO */}
      <div className="flex flex-col justify-center items-center mt-[18px] md:mt-[10px] space-y-[10px] md:space-y-[10px] mb-[30px] lg:mb-[60px]">
        <div className="text-xl lg:text-2xl font-medium line-clamp-1">
          {capitalizeWords(data.name)}
        </div>

        <div className="rounded-[20px] lg:text-lg line-clamp-1 text-primary bg-primary/10 text-sm px-5 py-1 font-medium max-w-4/5">
          {capitalizeWords(data.subCategory)}
        </div>

        <div className="text-xs md:text-base font-medium text-[#5b5b5b] line-clamp-1">
          {stustlerCategories.find((cat) => cat.value === data.category)?.title}
        </div>
      </div>

      {/* BUTTON */}
      <div className="max-w-[250px] mx-auto md:max-w-[460px]">
        <Button style="primary" type="button">
          Hire this Stustler
        </Button>
      </div>

      {/* DETAILS */}
      <div className="text-sm md:text-[20px] lg:text-[24px] mt-[60px] space-y-[50px] lg:space-y-[120px] md:leading-[30px] lg:leading-[45px]">
        <p>
          <span className="font-semibold">Bio:</span> {data.bio}
        </p>

        <p>
          <span className="font-semibold">View Jobs/Portfolio:</span>{" "}
          <a href={data.link ?? "#"} className="text-[#0082DF]">
            Click to view
          </a>
        </p>

        <p>
          <span className="font-semibold">Tools Used:</span> {data.toolsUsed}
        </p>

        <p>
          <span className="font-semibold">Experience Level:</span>{" "}
          {capitalizeWords(data.experienceLevel)}
        </p>

        <p>
          <span className="font-semibold">Price Range:</span> {data.priceRange}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className="text-[#1FAF38]">Available</span>
        </p>
      </div>

      {related.length > 1 && (
        <div className="mt-20">
          <h3 className="mb-10 text-start text-sm font-medium lg:text-[40px]">
            Similar Stustlers
          </h3>

          <div>
            {related
              .filter((s) => s._id !== data._id)
              .map((s, i) => (
                <StustlersCard key={i} stustler={s} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
