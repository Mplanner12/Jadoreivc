/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import ReviewsCarousel from "../../Components/ReviewsCarousel";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MdChevronRight } from "react-icons/md";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Header />
      <div className="w-full h-full flex flex-col justify-center box-border pt-[2rem] px-[1.35rem] md:px-[3rem]">
        <div className="hidden md:flex font-[500] justify-start items-center mb-[1.5rem] gap-x-[0.5rem]">
          <div className="flex text-[0.85rem] text-teal-950 justify-center items-center">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="flex text-[0.85rem] text-teal-950 justify-center items-center">
            <div className="flex justify-center items-center">
              <MdChevronRight />
            </div>
            <div
              className={`flex justify-center items-center text-yellow-500
              `}
            >
              News
            </div>
          </div>
        </div>
        <div className="w-full h-full border-none flex justify-center items-center md:gap-x-[0.5rem] md:mb-[1.5rem]">
          <div
            id="big"
            className="hidden md:flex w-full h-fit py-[0.25rem] rounded-2xl md:w-[230%] items-center" // Add flex items-center
          >
            <img
              src="/tourGuideOverviewImg1.png"
              alt="image"
              className="object-cover w-fit h-fit"
              width={500}
            />{" "}
          </div>
          <div className="flex flex-col h-[10rem] pt-[0.25rem] justify-start md:gap-y-[0.4rem] items-center w-full md:h-fit rounded-lg">
            <div className="w-full h-full rounded-2xl flex justify-center items-center object-cover">
              <img src="/tourGuideOverviewImg2.png" alt="image" />
            </div>
            <div className="hidden md:flex justify-center items-center md:w-full rounded-2xl">
              <img src="/tourGuideOverviewImg3.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="box-border m-0 w-full h-full flex flex-col-reverse md:flex md:flex-row justify-center md:justify-between md:items-start">
          <div className="box-border w-full flex flex-col justify-center items-center md:-mt-[1.85rem] md:w-[250%]">
            <div className="box-border w-full md:pr-[1.5rem]">
              <div className="box-border w-full text-teal-800 border-b-[2px] py-[2rem] font-[500]">
                <h1 className="box-border w-full text-[1.85rem] tracking-wide md:pb-[4.25rem] text-teal-950 font-semibold py-[1rem]">
                  Discover Abijan with Grace
                </h1>
                <p className="box-border w-full text-[1rem] text-teal-900 leading-[2rem]">
                  Explore the vibrant culture, rich history, and stunning
                  landscapes of Côte d&apos;Ivoire with our immersive day tour.
                  Led by an expert local guide, this tour will take you on a
                  journey through bustling markets, historical landmarks, and
                  picturesque villages, offering a unique glimpse into the life
                  and traditions of the Ivorian people.
                </p>
                <h1 className="box-border w-full text-[1.25rem] py-[1.5rem] tracking-wider text-teal-900 font-semibold">
                  Tour Highlights
                </h1>
                <div className="box-border w-full text-[1rem] leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border w-full text-teal-900">
                    Professional Local Guide
                  </p>
                </div>
                <div className="box-border w-full text-[1rem] leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border w-full text-teal-900">
                    Comfortable, air-conditioned vehicle for all transfers
                  </p>
                </div>
                <div className="box-border w-full text-[1rem] leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border w-full text-teal-900">
                    Admission to all Includede attractions and sites
                  </p>
                </div>
                <div className="box-border w-full text-[1rem] leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="w-full">
                    Traditional Ivorian lunch at a local resturant
                  </p>
                </div>
              </div>
            </div>
            <div className="box-border w-full">
              <div className="box-border w-full border-b-[2px] py-[2rem]">
                <h1 className="box-border w-full text-start text-[1.85rem] pb-[1.5rem] text-teal-950 font-semibold">
                  About Me
                </h1>
                <p className="box-border w-full text-[1rem] text-teal-900 tracking-wider leading-[2rem] font-[500]">
                  I am an adventurous life enthusiast, passionate traveler, and
                  dedicated volunteer. <br /> I&apos;ve hitchhiked around Côte
                  d&apos;Ivoire, explored hidden trails, and immersed myself in
                  local culture. Adore Abidjan! I am your travel companion here
                  for any adventure. <br /> However, I don&apos;t expect to find
                  any romantic relationships through this platform. If that’s
                  your goal, I&apos;m not the right person for you. 🤍
                </p>
              </div>
            </div>
            <div className="box-border w-full">
              <div className="w-full border-b-[2px] py-[2rem] font-[500] text-teal-800 flex flex-col justify-start items-center">
                <h1 className="w-full text-[2rem] pb-[1.5rem] font-semibold text-start text-teal-950">
                  Languages
                </h1>
                <p className=" text-teal-900 w-full text-start">
                  French, English, Spanish
                </p>
              </div>
            </div>
            <div className="box-border w-full">
              <div className="box-border w-full py-[2rem] text-teal-900 font-[500]">
                <h1 className="box-border w-full text-start text-[2rem] pb-[1.35rem] font-semibold text-teal-950">
                  Things to Do
                </h1>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Explore The Pleateu District
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Visit St Paul&apos;s Cathedral
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Wander around Banco National park
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Relax at Bessam Beach
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Shop at Treichville Market
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Tour the Abidjan Zoo
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Enjoy nightlife in Zone 4
                  </p>
                </div>
                <div className="box-border text-[1rem] w-full leading-[2rem] gap-x-[0.75rem] flex justify-start items-center">
                  &bull;
                  <p className="box-border text-sm w-full">
                    Explore the Museum of Civilizations of Côte d&apos;Ivoire
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="gray"
            className="box-border w-full md:w-fit h-full flex flex-col justify-center items-center pb-[0rem] md:pb-[3rem] py-[3.5rem] md:pr-[3rem] md:pl-[1rem]"
          >
            <div className="box-border px-[1.5rem] w-full mb-[1.5rem] md:mb-0 flex justify-between items-center md:px-[0rem] text-teal-900 text-[1.5rem] font-semibold">
              <div className="box-border w-fit md:w-full flex justify-start items-center gap-x-[0.75rem] md:px-[0.25rem]">
                <div className="box-border font-bold">$200</div>
                <div className="box-border w-[8rem] md:w-full font-[500]">
                  Per Hour
                </div>
              </div>
            </div>
            <div className="border-[1px] bg-slate-100 border-emerald-600 rounded-3xl box-border w-full md:w-fit flex flex-col justify-center items-center md:mt-[1.75rem] pb-[5.5rem] md:px-[2rem]">
              <div className="w-full flex justify-center items-center p-[2rem] md:px-[0.5rem]">
                <div className="w-full flex justify-center items-center border-b-[2px] pb-[2rem]">
                  <div className="box-border w-full flex justify-start items-center text-[1.15rem] font-semibold">
                    12 Reviews
                  </div>
                  <div className="flex h-full justify-end items-center gap-x-[0.35rem]">
                    <div>
                      <p className="text-[1.3rem]">4.5</p>
                    </div>
                    <div className="flex justify-center items-start">
                      <FaStar size={25} color="orange" fill="orange" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-[2rem] md:pt-[0.5rem] w-full flex justify-center items-center text-teal-900 text-[1.15rem]">
                <p className="font-[500]">
                  Contact <span className="font-bold">Grace </span>
                  directly
                </p>
              </div>
              <div className="w-[80%] pb-[1.35rem] flex justify-center items-center">
                <Link
                  href={"/makeOffer"}
                  className="w-full flex justify-center items-center text-emerald-600 font-[500] border-emerald-600 border-[1px] rounded-full text-[1.35rem] bg-slate-50 shadow-sm p-[0.85rem] px-[10rem]"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center p-[2rem] px-[0.85rem]">
              <p className="text-start font-[500] text-teal-950 leading-[1.75rem] text-[1rem] tracking-tighter">
                &quot;Thanks to this platform, I planned my trip effortlessly
                and discovered amazing local experiences I would have never
                found on my own!&quot;
              </p>
            </div>
          </div>
        </div>
        <ReviewsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
