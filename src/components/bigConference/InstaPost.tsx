/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useImageStore } from "../../store/variables";
import { FaUserCircle } from "react-icons/fa";

const InstaPost = () => {
  const { name, previewUrl } = useImageStore();

  return (
    <div className="h-auto max-w-[360px] flex justify-center relative mx-auto lg:scale-150">
      {/* Background Instagram Post */}
      <div
        className="w-full max-w-[500px] aspect-square relative"
        id="instagram-post-preview"
      >
        <img
          className="h-full w-full object-center object-contain"
          src="/images/i_attending_intagram_post.svg"
          alt="Instagram Post"
        />

        {/* Overlay content - positioned absolutely within the image container */}
        <div className="absolute inset-x-10 inset-y-[100px] flex flex-col justify-center items-center text-center top-0">
          <div className="">
            <div className="mb-2">
              <div className="w-[106px] h-[106px] min-w-[100px] min-h-[100px] border-[4px] border-[#5C2B00] bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center shadow-xl shadow-[#5C2B00] overflow-hidden">
                {previewUrl ? (
                  <img
                    className="h-full w-full object-center object-cover"
                    src={previewUrl}
                    alt="Selected profile"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <FaUserCircle className="text-9xl text-white" />
                )}
              </div>
            </div>
            <div
              className="relative text-xs font-medium text-white px-3 -mt-8 min-w-[150px] min-h-[30px] flex justify-center items-center"
              style={{
                backgroundImage: 'url("/images/name_bg.png")',
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <span className="truncate max-w-[140px]">
                {name || "Enter your name"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPost;
