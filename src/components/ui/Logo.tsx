import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="logo h-4 lg:h-5">
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
    </Link>
  );
};

export default Logo;
