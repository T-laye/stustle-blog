"use client";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { MdMenu } from "react-icons/md";
import { useNavStore } from "../../store/variables";

const Header = () => {
  const { closeNav, isNavOpen, openNav } = useNavStore();

  return (
    <header className="md:bg-primary  h-[8vh] fixed left-0 right-0 top-0">
      <div
        onClick={closeNav}
        className={`${
          isNavOpen ? "translate-x-0" : "-translate-x-[200%]"
        } fixed md:hidden bg-[#19100090] duration-700  z-40 top-0 bottom-0 left-0 right-0 h-screen`}
      ></div>

      <div className="container mx-auto h-full px-4 flex justify-between items-center">
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
            }  flex max-md:px-5 max-md:text-lg gap-5  md:gap-12 md:text-white max-md:flex-col duration-700 `}
          >
            <Link href="#">
              <li className="nav-link">Home</li>
            </Link>
            <Link href="#">
              <li>About us</li>
            </Link>
            <Link href="#">
              <li>Services</li>
            </Link>
            <Link href="#">
              <li>Blog</li>
            </Link>
            {/* <select className="select-class" name="" id="">
              <option className="" value="">
                Hello
              </option>
            </select> */}
            {/* <Link href="#">
              <li>Events</li>
            </Link> */}
            {/* <Link href="#">
              <li>Contact</li>
            </Link> */}
          </ul>
          <ul className="md:hidden">
            {/* <Button style="reverse" type="button">
              Request A Service
            </Button> */}
          </ul>
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
