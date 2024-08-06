"use client";
import Link from "next/link";
import React, { useEffect, useState, CSSProperties } from "react";
import { PiPencilLineLight } from "react-icons/pi";
import Dropdown from "./Dropdown";
import HamburgerMenu from "./Hamburger";
import { useContext } from "react";
import axios from "axios";
import UserPopUp from "./UserPopUp";
// import { FaRegCircleUser } from "react-icons/fa6";
import { UserContext } from "../context/UserContex";
import ClipLoader from "react-spinners/ClipLoader";

interface HeaderProps {
  fullName: string;
  profileImage: string;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Header = () => {
  const { user, loading } = useContext(UserContext);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/users",
    withCredentials: true,
  });

  const [showPopUp, setShowPopUp] = useState(false);
  // let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const handleTogglePopUp = () => {
    setShowPopUp((showPopUp) => !showPopUp);
  };

  const handleSwitchToTourGuide = () => {
    console.log("Switch to Tour Guide");
    setShowPopUp(false);
  };

  const handleSwitchToTourist = () => {
    console.log("Switch to Tour Guide");
    setShowPopUp(false);
  };

  const logout = async () => {
    try {
      await axiosInstance.get("/auth/logout");
      // setUser(null);
      console.log("Logout");
    } catch (error) {
      console.error("Logout failed", error);
    }
    setShowPopUp(false);
  };

  return (
    <div className="w-full flex justify-between py-[1.5rem] md:px-[3.85rem] md:pr-[4.5rem] border-b-[2px]">
      <div className="w-fit flex justify-start items-center pl-[0.25rem] md:pl-0 lg:pl-[0.25rem]">
        <Link href={"/"} className="text-emerald-600 font-semibold text-3xl">
          J’adoreivc
        </Link>
      </div>
      <div className="w-fit flex justify-between items-center gap-x-[0.25rem] ml-[0.2rem] md:ml-0 md:gap-x-[.95rem] text-slate-900">
        <div className="justify-center items-center hidden md:flex">
          <Link href="/">
            <h1 className="font-semibold text-[1.25rem]">Home</h1>
          </Link>
        </div>
        <div className="justify-center items-center hidden md:flex">
          <Link href={"/customTour"}>
            <h1 className="font-semibold text-[1.25rem]">Custom Tours</h1>
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
        <div className="flex justify-center items-center mr-1">
          {loading ? (
            <ClipLoader
              cssOverride={override}
              color="green" // Set your desired loader color
              loading={loading}
              size={25} // Adjust size as needed
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : user ? (
            <div
              onClick={() => setShowPopUp(!showPopUp)}
              className="cursor-pointer mx-auto"
            >
              <h1 className="font-semibold text-[1.25rem]">
                {user.fullName.split(" ")[0]}
              </h1>
              {showPopUp && (
                <UserPopUp
                  user={user}
                  fullName={user.fullName}
                  profileImage={user.profileImage}
                  onSwitchToTourGuide={handleSwitchToTourGuide}
                  onSwitchToTourist={handleSwitchToTourist}
                  onLogout={logout}
                  userType={""}
                />
              )}
            </div>
          ) : (
            <Link href={"/signUp"}>
              <h1 className="font-semibold text-[1.25rem]">Sign up</h1>
            </Link>
          )}
        </div>
        <div className="px-[0.5rem] flex justify-center items-center">
          <HamburgerMenu />
        </div>
        <div className="w-fit hidden md:flex justify-end items-center px-[1.5rem] ">
          <Link href="/planTour">
            <button
              type="submit"
              className="w-full flex justify-start items-center gap-x-[0.5rem] uppercase py-[1.3rem] px-[0.85rem] text-center font-light text-[1.rem] text-white rounded-full bg-orange-400 hover:bg-emerald-600 hover:text-white"
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
