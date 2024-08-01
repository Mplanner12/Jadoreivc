/* eslint-disable @next/next/no-img-element */
import React from "react";
import Dive from "./Dive";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="flex relative w-full h-full flex-col justify-center">
      <div className=" relative w-full h-full md:h-[32.75rem] bg-cover bg-center">
        <img
          className="absolute w-full h-full  md:h-[32.75rem] object-cover mix-blend-overlay"
          src="/image 3.jpg"
          alt=""
        />
        <div className="md:h-[32.75rem] realtive top-0 pt-[9rem] md:pt-[10rem] pb-[5rem] md:pb-[5rem] bg-cover bg-gradient-to-r from-green-900 to-orange-800">
          <div className="relative top-[2.75rem] md:top-[4.75rem] flex flex-col justify-center text-center font-bold text-white">
            <div>
              <h1
                id="hero-title1"
                className="text-[5rem] md:text-[10.5rem] tracking-normal"
              >
                Dis
                <span className="text-border">co</span>
                ver
              </h1>
            </div>
            <div className="text-[2.5rem] md:text-[3.3rem] mt-[-0.5rem] tracking-tighter md:tracking-normal relative top-[-2rem] md:top-0 md:mt-[-4.5rem] font-normal">
              <h1 id="hero-title2">the wonders of Côte d&apos;Ivoire</h1>
            </div>
          </div>
        </div>
      </div>
      <Search />
      <Dive />
    </div>
  );
};

export default Hero;
