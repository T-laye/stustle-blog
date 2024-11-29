"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <div className="w-3/4 sm:w-1/2">
        <Image
          src="/images/not-found.png"
          alt="not found"
          height={1000}
          width={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Page Not Found</p>
        <Button fn={goBack} style="primary" type="button">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
