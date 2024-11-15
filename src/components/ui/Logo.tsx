import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="h-4 sm:h-5">
      <Image
        src="/images/logo.svg"
        height={100}
        width={100}
        className="h-full w-full object-contain md:hidden"
        alt="Stustle Logo"
      />
      <Image
        src="/images/white-logo.svg"
        height={100}
        width={100}
        className="h-full w-full object-contain hidden md:block"
        alt="Stustle Logo"
      />
    </div>
  );
};

export default Logo;
