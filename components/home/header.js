"use client";
import Image from "next/image";
import { Cormorant_SC, Great_Vibes, Cinzel, DM_Sans } from "next/font/google";
import { useState } from "react";

const cormorant = Cormorant_SC({
  weight: "400",
  subsets: ["cyrillic"],
});
const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["greek-ext"],
});
const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin-ext"],
});
const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <div>
      <div className="w-full h-[600px] relative">
        <Image src={"/home/header_img.png"} fill alt="restaurant image" />
        <div className="absolute inset-0 bg-custom-radial"></div>
        <div
          className={`w-[90%] absolute top-5 left-4 md:left-24 right-10 flex justify-between items-center`}
        >
          <Image
            src={"/home/logo_res.png"}
            height={82}
            width={82}
            alt="logo resturant"
          />

          <ul
            className={`${cormorant.className} hidden md:flex space-x-6 text-white`}
          >
            <li className="relative group">
              <a className="hover:text-customYellow1" href={"/menu/menu.pdf"}>
                MENU
              </a>
              <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <a className="hover:text-customYellow1" href={"#dining"}>
                FINE DINING
              </a>
              <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <a className="hover:text-customYellow1" href={"#about"}>
                ABOUT
              </a>
              <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
            </li>
            <li className="relative group">
              <a className="hover:text-customYellow1" href={"#contact"}>
                CONTACT
              </a>
              <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
            </li>
          </ul>
          <div className="hidden md:block border border-customYellow1 px-3 py-2 shadow-yellow-glow">
            <div className="flex justify-center items-center space-x-2">
              <span className="block text-base  text-customYellow1 font-medium">
                RESERVATION
              </span>
              <div className="h-[0.8px] w-8 bg-customYellow1 mt-1" />
            </div>
          </div>
          <Image
            onClick={handleOpen}
            src={"/menu/menu.png"}
            height={33}
            width={55}
            alt="menu icon"
            className="block md:hidden"
          />
          {isOpen && (
            <div
              onClick={handleOpen}
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
            ></div>
          )}
          <div
            className={`z-50 top-0 right-0 fixed h-full w-64 pt-10 pl-5 pr-5 space-y-5 bg-customBgColor ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform`}
          >
            <ul
              className={`${cormorant.className} flex flex-col space-y-3 text-white`}
            >
              <li className="relative group">
                <a
                  onClick={handleOpen}
                  className="hover:text-customYellow1"
                  href={"/menu/menu.pdf"}
                >
                  MENU
                </a>
                <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
              </li>
              <li className="relative group">
                <a
                  onClick={handleOpen}
                  className="hover:text-customYellow1"
                  href={"#dining"}
                >
                  FINE DINING
                </a>
                <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
              </li>
              <li className="relative group">
                <a
                  onClick={handleOpen}
                  className="hover:text-customYellow1"
                  href={"#about"}
                >
                  ABOUT
                </a>
                <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
              </li>
              <li className="relative group">
                <a
                  onClick={handleOpen}
                  className="hover:text-customYellow1"
                  href={"#contact"}
                >
                  CONTACT
                </a>
                <div className="absolute bottom-0 left-0 h-[2px] w-[0] bg-customYellow1 transition-all group-hover:w-full"></div>
              </li>
            </ul>
            <div
              onClick={handleOpen}
              className="border border-customYellow1 px-3 py-2 shadow-yellow-glow"
            >
              <div className="flex justify-center items-center space-x-2">
                <span className="block text-base  text-customYellow1 font-medium">
                  RESERVATION
                </span>
                <div className="h-[0.8px] w-8 bg-customYellow1 mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-44 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center">
          <p
            className={`${greatVibes.className} text-2xl text-white text-center tracking-[5px]`}
          >
            Best sushi in town
          </p>
          <h1
            className={`${cinzel.className} text-3xl text-customYellow2 uppercase mt-3 text-center`}
          >
            Taste the rich flavor of
          </h1>
          <h1
            className={`${cinzel.className} text-3xl text-customYellow2 uppercase  text-center mt-5 md:mt-0 md:leading-[80px]`}
          >
            high quality sushi
          </h1>
          <div className="flex justify-center items-center text-customTextColor mt-5 md:mt-0">
            <p
              className={`${dmsans.className} w-[300px] text-center text-lg leading-6`}
            >
              We only use the five star quality for our menu, come and get the
              richness in every food we serve.
            </p>
          </div>
          <div className="bg-customYellow1 px-5 py-2 mt-10 flex justify-center items-center space-x-2  shadow-yellow-glow">
            <p className={`${cormorant.className} uppercase font-xl`}>
              <a href="/menu/menu.pdf"> Go To Menu</a>
            </p>
            <div className="h-[2px] w-8 bg-black mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
