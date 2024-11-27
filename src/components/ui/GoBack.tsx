"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const GoBack = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div
      onClick={goBack}
      className="flex gap-2 items-center w-fit"
    >
      <BsArrowLeft size={22} />
      <span>Back</span>
    </div>
  );
};

export default GoBack;
