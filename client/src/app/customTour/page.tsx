"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import { IoFilterOutline } from "react-icons/io5";
import PaginationButtons from "../Components/Pagination";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { PlannedTourContext } from "../context/plannedTourContext";
import { useContext } from "react";

const Page = () => {
  // const customGuides = [
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  //   {
  //     image: "/offerImg.png",
  //     location: "Abidjan, Ivory Coast",
  //     noOfDays: "2",
  //     startDate: "11 july",
  //     endDate: "13 july",
  //     noOfPeople: "just me",
  //     timePosted: "3mins ago",
  //   },
  // ];

  const [showFilter, setShowFilter] = useState(false);

  const handleDaysSelect = (selectedDay: number) => {
    console.log("Selected day:", selectedDay);
  };

  const handleLocalsSelect = (selectedLocal: string) => {
    console.log("Selected local:", selectedLocal);
  };

  const handleLocationSelect = (selectedLocation: string) => {
    console.log("Selected location:", selectedLocation);
  };

  const { plannedTours, loading, fetchPlannedTours } =
    useContext(PlannedTourContext);

  if (loading) return <p>Loading...</p>;
  return (
    <main className="w-full m-0 p-0 flex flex-col justify-center items-center">
      <div className="h-full w-full">
        <img
          className="h-[20rem] md:h-[25rem] w-full"
          alt=""
          src="/tourGuides.png"
          width={100}
          height={100}
        />
      </div>
      <div className="w-full flex justify-between md:py-[2rem] items-center mb-1 md:mb-[2rem] mt-[2rem] md:mt-[0] md:pl-[6rem] px-[2.5rem]">
        <h1 className="w-full text-[1.75rem] md:text-[2.25rem] text-teal-950 md:text-start font-semibold">
          Find Custom Tours
        </h1>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="p-2 md:hidden"
        >
          <IoFilterOutline size={30} />
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:px-[4rem]">
        <div className="w-full p-2 md:w-[38.5%] px-[1.5rem] md:px-[0.5rem] md:pr-[5rem] lg:w-[47%] pt-[2rem]">
          <div className="hidden md:block md:w-[100%] lg:w-[100%]">
            <Filter
              daysOptions={[]} // Pass your custom options here
              locationOptions={[]} // Pass your custom options here
              onDaysSelect={handleDaysSelect}
              onLocalsSelect={handleLocalsSelect}
              onLocationSelect={handleLocationSelect}
            />
          </div>
          {showFilter && (
            <div className="md:hidden flex justify-center items-center">
              <Filter
                daysOptions={[]} // Pass your custom options here
                locationOptions={[]} // Pass your custom options here
                onDaysSelect={handleDaysSelect}
                onLocalsSelect={handleLocalsSelect}
                onLocationSelect={handleLocationSelect}
              />
            </div>
          )}
        </div>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-y-[1.5rem] md:gap-x-[7rem] py-[2rem] px-[1.85rem] md:px-[0.5rem] md:pr-[2rem] justify-center md:justify-start items-center">
          {plannedTours?.map((tour: any) => {
            const startDate = new Date(tour.startDate);
            const endDate = new Date(tour.endDate);
            // Formating the date using the toLocaleDateString method
            const formattedStartDate = startDate.toLocaleDateString("en-US", {
              weekday: "short", // Add weekday: 'long' for full day name
              month: "short", // Use 'long' for full month name
              day: "numeric", // Include the day number
            });
            const formattedEndDate = endDate.toLocaleDateString("en-US", {
              weekday: "short", // Add weekday: 'long' for full day name
              month: "short", // Use 'long' for full month name
              day: "numeric", // Include the day number
            });

            return (
              <Link
                key={tour.image}
                className="p-0 m-0 w-full h-full"
                href={"/makeOffer"}
              >
                <div className="w-full flex md:w-fit flex-col justify-start items-center py-[1.5rem] md:py-[1.2rem] px-[0.85rem] md:px-[1.25rem] md:pr-[0.7rem] bg-slate-50">
                  <div className="relative w-full gap-x-[1.3rem] md:gap-x-[1rem] flex justify-start items-center py-[0.85rem] pr-[2rem]">
                    <div className="w-full flex justify-start items-center gap-[0.85rem] md:gap-x-[1.7rem]">
                      <div className="w-fit md:relative md:top-[0.8rem] flex justify-center items-center">
                        <img
                          src={`/offerImg.png`}
                          alt=""
                          width={65}
                          className="md:w-[4rem]"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <p className="relative w-full text-start font-[500] text-[1.35rem] md:text-[1.2rem] text-teal-950">
                          {tour.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-normal items-center">
                      <MdOutlineMail size={28} className="text-teal-900" />
                    </div>
                  </div>
                  <div className="mt-[-1rem] px-[0.25rem] md:pl-[4.75rem] w-full flex flex-col justify-start items-center gap-x-[2rem] py-[1rem] md:pt-0">
                    <div className="w-full flex justify-start items-center gap-x-[2rem]">
                      <p className="w-full text-[1.1rem] md:text-[1rem] md:hidden text-start text-gray-600">
                        Posted {tour.time}
                      </p>
                    </div>
                    <div className="w-full flex justify-start items-center gap-x-[0.75rem] py-[0.5rem] text-[1rem] md:text-[0.9rem] text-gray-500">
                      <div>{tour.noOfDays}days *</div>
                      <div>
                        {formattedStartDate} - {formattedEndDate} *
                      </div>
                      <div>{tour.numberOfPeople}</div>
                    </div>
                  </div>
                  <div className="w-full flex justify-start gap-[0.75rem] md:justify-center md:gap-x-[0.5rem] items-center px-[0rem] md:pl-[4.5rem] md:px-[1.25rem] text-[0.85rem] font-semibold mt-[-0.5rem]">
                    <div className="flex justify-center items-center gap-x-[0.5rem]">
                      {tour.localGuide.map((local: any) => (
                        <button
                          key={local.id}
                          className="p-[0.65rem] md:p-[0.7rem] py-[0.6rem] rounded-full text-[0.8rem] bg-slate-50 hover:bg-emerald-600 hover:text-white active:bg-emerald-600 active:text-white border focus:bg-emerald-600 focus:text-white border-emerald-600 text-emerald-600"
                        >
                          {local}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full mx-auto hidden md:flex justify-start py-[1.75rem] items-center gap-x-[2rem]">
                    <p className="w-full text-[1rem] justify-start pl-[4.75rem] flex text-center text-gray-500">
                      Posted {tour.time}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full py-[4rem] pb-[6rem] flex justify-center items-center">
        <PaginationButtons />
      </div>
    </main>
  );
};

export default Page;
