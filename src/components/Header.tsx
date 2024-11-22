"use client";
import Link from "next/link";
// import React, { useState } from "react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { MdMenu } from "react-icons/md";
import { useNavStore } from "../store/variables";
import { usePathname } from "next/navigation";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const { closeNav, isNavOpen, openNav } = useNavStore();
  // const [openMore, setOpenMore] = useState(false);
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <header
      className={` ${pathname.startsWith("/studio") && "hidden"} bg-white-background md:bg-primary  h-[8vh] fixed left-0 right-0 top-0`}
    >
      <div
        onClick={closeNav}
        className={`${
          isNavOpen ? "translate-x-0" : "-translate-x-[200%]"
        } fixed md:hidden bg-[#19100090] duration-700  z-40 top-0 bottom-0 left-0 right-0 h-screen`}
      ></div>

      <div className="container mx-auto h-full px-4 md:px-8 flex justify-between items-center">
        <Logo />
        <nav
          className={` ${
            isNavOpen ? "max-md:translate-x-0" : "max-md:-translate-x-[200%]"
          }  max-md:fixed z-50 max-md:rounded-br-2xl max-md:rounded-tr-2xl max-md:bg-white-background max-md:max-w-xs top-0 left-0 bottom-0 max-md:w-7/12 max-md:px-4 duration-300`}
        >
          <div className="bg-green400 flex md:hidden my-10">
            <Logo />
          </div>
          <ul
            className={`${
              isNavOpen ? "max-md:translate-x-0" : "max-md:-translate-x-[200%]"
            }  flex max-md:px-5 max-md:text-lg gap-6  lg:gap-12 md:text-white max-md:flex-col duration-700 `}
          >
            <Link href="#">
              <li className="">Home</li>
            </Link>
            <Link href="#" className="">
              <li>About us</li>
            </Link>
            <Link href="#">
              <li>Services</li>
            </Link>
            <Link href="#">
              <li>Events</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link className="max-md:hidde" href="#">
              <li>Contact</li>
            </Link>

            {/* <li className="relative cursor-pointer max-lg:hidden">
              <div
                onClick={() => setOpenMore(!openMore)}
                className="flex items-center gap-1"
              >
                <span>Learn</span>
                {openMore ? (
                  <IoIosArrowUp size={16} strokeWidth={10} className="" />
                ) : (
                  <IoIosArrowDown size={16} strokeWidth={10} className="" />
                  // <IoIosArrowDown size={16} />
                )}
              </div>

              {openMore && (
                <div
                  onClick={() => setOpenMore(false)}
                  className=" fixed top-0 bottom-0 h-screen left-0 right-0 "
                ></div>
              )}
              {openMore && (
                <div
                  onClick={() => setOpenMore(false)}
                  className="absolute top-7 bg-white-background text-black p-4 shadow rounded-md flex flex-col gap-3 min-w-32"
                >
                  <Link href="#">
                    <p className="hover:text-primary duration-150">Blog</p>
                  </Link>
                  <Link href="#">
                    <p className="whitespace-nowrap hover:text-primary duration-150">
                      Newsletter
                    </p>
                  </Link>
                  <Link href="#">
                    <p className="hover:text-primary duration-150">Updates</p>
                  </Link>
                </div>
              )}
            </li> */}

            {/* <li className="relative cursor-pointer lg:hidden">
              <div
                onClick={() => setOpenMore(!openMore)}
                className="flex items-center gap-1"
              >
                <span>More</span>
                {openMore ? (
                  <IoIosArrowUp size={16} strokeWidth={10} className="" />
                ) : (
                  <IoIosArrowDown size={16} strokeWidth={10} className="" />
                  // <IoIosArrowDown size={16} />
                )}
              </div>
              {openMore && (
                <div
                  onClick={() => setOpenMore(false)}
                  className=" fixed top-0 bottom-0 h-screen left-0 right-0"
                ></div>
              )}
              {openMore && (
                <div
                  onClick={() => setOpenMore(false)}
                  className="absolute top-7 bg-white-background text-black p-4 shadow rounded-md flex flex-col gap-3 min-w-32"
                >
                  <Link href="#">
                    <p className="hover:text-primary duration-150">About us</p>
                  </Link>
                  <Link href="#">
                    <p className="hover:text-primary duration-150">Blog</p>
                  </Link>
                  <Link href="#">
                    <p className="whitespace-nowrap hover:text-primary duration-150">
                      Newsletter
                    </p>
                  </Link>
                  <Link href="#">
                    <p className="hover:text-primary duration-150">Contact</p>
                  </Link>
                </div>
              )}
            </li> */}
          </ul>
          <div className="md:hidden mt-10">
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
