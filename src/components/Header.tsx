"use client";
import Link from "next/link";
// import React, { useState } from "react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { MdMenu } from "react-icons/md";
import { useNavStore } from "../store/variables";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const { closeNav, isNavOpen, openNav } = useNavStore();
  // const [openMore, setOpenMore] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Your GSAP animations or timeline code goes here
    // gsap.fromTo(
    //   ".header,.nav,.image",
    //   { opacity: 0, y: -100 },
    //   { opacity: 1, duration: 1, y: 0, stagger: 0.1 }
    // );
    gsap.fromTo(
      ".li, .logo",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        // ease: "elastic.out(1, 0.4)",
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <header
      className={` ${pathname.startsWith("/studio") && "hidden"} z-50 bg-white-background md:bg-primary  h-[8vh] fixed left-0 right-0 top-0`}
    >
      <div
        onClick={closeNav}
        className={`${
          isNavOpen ? "translate-x-0" : "-translate-x-[200%]"
        } fixed md:hidden bg-[#19100090] duration-300  z-[999] top-0 bottom-0 left-0 right-0 h-screen`}
      ></div>

      <div className="container mx-auto h-full px-4 md:px-8 flex justify-between items-center ">
        <Logo />
        <nav
          className={` ${
            isNavOpen ? "max-md:translate-x-0" : "max-md:-translate-x-[200%]"
          }  max-md:fixed z-[1000] max-md:rounded-br-2xl max-md:rounded-tr-2xl max-md:bg-white-background max-md:max-w-xs top-0 left-0 bottom-0 max-md:w-7/12 max-md:px-4 duration-300`}
        >
          <div className="bg-green400 flex md:hidden my-10 mobile">
            <Logo />
          </div>
          <ul
            onClick={closeNav}
            className={`${
              isNavOpen ? "max-md:translate-x-0" : "max-md:-translate-x-[200%]"
            }  flex max-md:px-5 max-md:text-lg gap-6  lg:gap-12 md:text-white max-md:flex-col duration-300 `}
          >
            <Link href="/">
              <li className="mobile li">Home</li>
            </Link>
            <Link href="/#about" className="">
              <li className="mobile li">About us</li>
            </Link>
            <Link href="/#services">
              <li className="mobile li">Services</li>
            </Link>
            <Link href="/events">
              <li className="mobile li">Events</li>
            </Link>
            <Link href="/blog">
              <li className="mobile li">Blog</li>
            </Link>
            <Link className="max-md:hidde" href="#contact">
              <li className="mobile li">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden mobile li mt-10">
            <Button style="primary" type="button">
              Request A Service
            </Button>
          </div>
        </nav>
        <div>
          <div className="hidden md:block">
            <Button style="reverse" type="button">
              Request A Service
            </Button>
          </div>
          <MdMenu
            onClick={openNav}
            size={24}
            className="text-primary md:hidden cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
