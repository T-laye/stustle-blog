"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { MdMenu } from "react-icons/md";
import { useNavStore } from "../store/variables";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";

const Header = () => {
  const { closeNav, isNavOpen, openNav } = useNavStore();
  const pathname = usePathname();
  // const router = useRouter();

  const requestAService = () => {
    window.open(
      "https://wa.me/2348115237006?text=Hi%2C%20I%27m%20interested%20in%20your%20service.%20(Please%20specify%20the%20service)",
      "_blank" // Opens the link in a new tab
    );
  };

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
      className={` ${pathname.startsWith("/studio") && "hidden"} z-50 bg-white-background lg:bg-primary  h-[8vh] fixed left-0 right-0 top-0`}
    >
      <div
        onClick={closeNav}
        className={`${
          isNavOpen ? "translate-x-0" : "-translate-x-[200%]"
        } fixed lg:hidden bg-[#19100090] duration-300  z-[999] top-0 bottom-0 left-0 right-0 h-screen`}
      ></div>

      <div className="container mx-auto h-full px-4 lg:px8 flex justify-between items-center ">
        <Logo />
        <nav
          className={` ${
            isNavOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-[200%]"
          }  max-lg:fixed z-[1000] max-lg:rounded-br-2xl max-lg:rounded-tr-2xl max-lg:bg-white-background max-lg:max-w-xs top-0 left-0 bottom-0 max-lg:w-7/12 max-lg:px-4 duration-300`}
        >
          <div className="bg-green400 flex lg:hidden my-10 mobile">
            <Logo />
          </div>
          <ul
            onClick={closeNav}
            className={`${
              isNavOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-[200%]"
            }  flex max-lg:px-5 max-lg:text-lg gap-6  lg:gap-12 lg:text-white max-lg:flex-col duration-300 `}
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
            <Link className="max-lg:hidde" href="/#contact">
              <li className="mobile li">Contact</li>
            </Link>
          </ul>
          <div className="lg:hidden mobile li mt-10">
            <Button style="primary" type="button" fn={requestAService}>
              Request A Service
            </Button>
          </div>
        </nav>
        <div>
          <div className="hidden lg:block">
            <Button style="reverse" type="button" fn={requestAService}>
              Request A Service
            </Button>
          </div>
          <MdMenu
            onClick={openNav}
            size={24}
            className="text-primary lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
