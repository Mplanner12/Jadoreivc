/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import PaginationButtons from "../Components/Pagination";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FeaturedGuides from "../Components/FeaturedGuides";
import { UserProvider } from "../context/UserContex";

const Buttons = [
  { text: "City Tours", href: "" },
  { text: "Cultural Tours", href: "" },
  { text: "Day Cruises", href: "" },
  { text: "Bus Tours", href: "" },
  { text: "Beach Tours", href: "" },
  { text: "Food Tours", href: "" },
];

const page = () => {
  return (
    // <UserProvider>
    <main className="w-full m-0 p-0 flex flex-col justify-center">
      {/* <Header /> */}
      <div className="h-full w-full">
        <img
          className="h-[20rem] md:h-[25rem] w-full"
          alt=""
          src="/tourGuides.png"
          width={100}
          height={100}
        />
      </div>
      <div className="h-full w-full py-[2.75rem] px-[1rem] flex flex-col justify-center items-center">
        <h1 className="md:pl-[3.5rem] w-full tracking-tighter md:tracking-normal text-[1.75rem] text-center md:text-start md:text-[2.5rem] md:mt-[2.75rem] font-semibold text-teal-950 mb-[3rem]">
          Tour Guides in Côte d’Ivoire
        </h1>
        <div className="md:hidden w-full">
          <Carousel className="w-full h-full py-[1.75rem]">
            <CarouselContent className="w-full h-fit gap-x-[3rem]">
              {Buttons.map((button) => (
                <CarouselItem
                  key={button.text}
                  className="w-full h-fit basis-[23%]"
                >
                  <div className="">
                    <Card className="w-full h-fit flex justify-center items-center">
                      <CardContent className="w-full h-fit flex aspect-square items-center justify-center p-2 py-1">
                        <div className="w-fit h-fit mb-[1.5rem] flex flex-col justify-center items-center rounded-md gap-y-1.5">
                          <button className="w-fit py-[0.65rem] p-[1.85rem] uppercase font-[500] text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 outline-none active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
                            {button.text}
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
        <CarouselNext /> */}
          </Carousel>
        </div>
        <div className="hidden md:flex m-0 w-full relative h-fit md:justify-start justify-between items-start gap-x-[1.5rem] px-[1.2rem] md:pl-[3rem]">
          <button className="py-[1rem] p-[1.5rem] uppercase font-bold text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
            City Tours
          </button>
          <button className="py-[1rem] p-[1.5rem] uppercase font-bold text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
            Cultural Tours
          </button>
          <button className="py-[1rem] p-[1.5rem] uppercase font-bold text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
            Day Cruises
          </button>
          <button className="py-[1rem] p-[1.5rem] uppercase font-bold text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
            Bus Tours
          </button>
          <button className="py-[1rem] p-[1.5rem] uppercase font-bold text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
            Beach Tours
          </button>
          <button className="py-[1rem] p-[1.5rem] uppercase font-bold text-emerald-600 bg-slate-50 rounded-full active:bg-emerald-600 active:text-white text-[0.85rem] border-[1px] border-emerald-600 hover:bg-emerald-600 hover:text-white">
            Food Tours
          </button>
        </div>
        <FeaturedGuides guideCount={12} />
      </div>
      <div className="flex justify-center items-center py-[2.5rem] mb-[5rem] md:px-[4rem]">
        <PaginationButtons />
      </div>
      {/* <Footer /> */}
    </main>
    // </UserProvider>
  );
};

export default page;
