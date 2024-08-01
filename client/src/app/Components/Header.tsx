import Link from "next/link";
import React from "react";
import { PiPencilLineLight } from "react-icons/pi";
import Dropdown from "./Dropdown";
import HamburgerMenu from "./Hamburger";
import { useUser } from "../context/UserContext";

const Header = () => {
  // const { user } = useUser();
  // console.log("User:", user);

  return (
    <div className="w-full flex justify-between py-[1.5rem] md:px-[3.85rem] md:pr-[4.5rem] border-b-[2px]">
      <div className="w-fit flex justify-start items-center pl-[0.75rem] lg:pl-[0.25rem]">
        <h1 className="text-emerald-600 font-semibold text-3xl">J’adoreivc</h1>
      </div>
      <div className="w-fit flex justify-between items-center gap-x-[0.9rem] ml-[0.2rem] md:ml-0 md:gap-x-[1.25rem] text-slate-900">
        <div className="justify-center items-center hidden md:flex">
          <Link href="/">
            <h1 className="font-semibold text-[1.25rem]">Home</h1>
          </Link>
        </div>
        <div className="justify-center items-center hidden md:flex">
          <Link href={"/customTour"}>
            <h1 className="font-semibold text-[1.25rem]">About</h1>
          </Link>
        </div>
        <div className="justify-center items-center hidden md:flex">
          <Link href={"/profile"}>
            <h1 className="font-semibold text-[1.25rem]">Blog</h1>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Dropdown />
        </div>
        <div className="flex justify-center items-center">
          {/* {user ? (
            <Link href={"/profile"}>
              <h1 className="font-semibold text-[1.25rem]">{user}</h1>
            </Link>
          ) : ( */}
          <Link href={"/signUp"}>
            <h1 className="font-semibold text-[1.25rem]">Sign up</h1>
          </Link>
          {/* )} */}
        </div>
        <div className="px-[0.5rem] flex justify-center items-center">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex justify-center items-center px-[1.5rem] ">
          <Link href="/planTour">
            <button
              type="submit"
              className="flex justify-start items-center gap-x-[0.5rem] uppercase w-[13rem] py-[1.3rem] px-[0.85rem] text-center font-light text-[1.rem] text-white rounded-full bg-orange-400 hover:bg-emerald-600 hover:text-white"
            >
              <PiPencilLineLight size={30} color="white" className="" />
              <p className="uppercase">Plan your Tour</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
