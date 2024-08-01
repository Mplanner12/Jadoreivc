/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface FeaturedGuidesProps {
  guideCount: number; // Add a prop to control the number of guides
}

const FeaturedGuides = ({ guideCount }: FeaturedGuidesProps) => {
  const GuideInfo = [
    {
      image: "/smilingGirl.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide2.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide3.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide4.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide5.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide6.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide7.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide12.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide8.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide9.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide10.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
    {
      image: "/Guide11.png",
      name: "Grace Jennings",
      location: "Abidjan, Cote d Ivoire",
      rating: "4.5",
      noofreviews: "(243)",
      quote: '"Grace made our trip unforgettable!"',
      languages: ["French", "English"],
    },
  ];
  const guidesToDisplay = GuideInfo.slice(0, guideCount);

  return (
    <div className="px-[1rem] py-[2rem] md:px-[4rem] pt-[1rem] md:pt-[2rem] pb-[1rem] w-full flex flex-col justify-center mb-[4rem] md:mb-[4.5rem]">
      <div className="w-full flex justify-between items-center md:mb[1.5rem]">
        <div className="py-[1.25rem]">
          <h1
            id="mini-header"
            className="font-semibold text-[1.7rem] md:text-[1.8rem] tracking-wide md:text-lg text-teal-950"
          >
            Featured Guides
          </h1>
        </div>
        <Link href="/tourguides">
          <button
            id="viewMore"
            className="md:relative h-fit text-white text-[1rem] md:text-sm tracking-wider font-extralight bg-orange-400 uppercase rounded-[2rem] gap-y-1 px-[1rem] md:px-[1.75rem] py-[0.75rem] md:py-[1rem]"
          >
            View More
          </button>
        </Link>
      </div>
      <div className="block">
        <div className="md:gap-x-6 md:h-fit w-full h-fit flex flex-col justify-center md:grid md:grid-cols-4 items-center ">
          {guidesToDisplay.map((guide) => (
            <Link href={"/tourguides/tourOverview"} key={guide.image}>
              <div className="mt-[1.75rem] mb-[0.75rem] flex flex-col justify-center h-full">
                <div className="mb-[0.85rem] w-full h-full">
                  <img
                    className="rounded-xl w-full md:h-fit"
                    src={guide.image}
                    alt="image"
                  />
                </div>
                <div className="w-full h-full flex justify-between items-start">
                  <div className="w-full h-fit pb-[0.5rem] pt-[0.2rem] space-y-[0.25rem] text-teal-950 tracking-wide">
                    <p className="text-[1rem] font-semibold">{guide.name}</p>
                    <div className="w-fit gap-x-[0.3rem] text-base font-normal flex justify-between items-center">
                      <HiOutlineLocationMarker size={17} />{" "}
                      <p className="text-[0.725rem] tracking-tighter font-[500]">
                        {guide.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-[0.5rem] py-[0.3rem]">
                    <div className="w-fit gap-x-[0.5rem] flex justify-center items-center">
                      <div className="text-[0.85rem] font-semibold text-blue-950">
                        {guide.rating}
                      </div>
                      <div className="flex justify-center w-fit gap-x-[0.10rem] md:gap-x-1">
                        <FaStar color="orange" size={15} />
                        {/* <CiStar size={13} /> */}
                      </div>
                      <div className="text-[0.825rem] font-[500] text-blue-950">
                        {guide.noofreviews}
                      </div>
                    </div>
                    <div className="flex h-fit py-0.5 text-[0.7rem] justify-center items-center gap-x-[0.25rem]">
                      <div className="text-teal-950">{guide.languages[0]}</div>
                      {guide.languages.length > 1 && (
                        <div className="text-teal-950 border-l-[1.5px] border-teal-700 pl-[0.25rem]">
                          {guide?.languages[1]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-fit flex justify-start text-[0.75rem] italic font-[500] text-slate-900">
                  {guide.quote}
                </div>
                <div className="text-teal-950 md:gap-x-[4rem] md:w-full flex justify-between pt-[1.35rem] md:pt-[1.5rem]">
                  <p className="w-full text-sm md:text-sm font-[500]">
                    4 Reviews
                  </p>
                  <p className="text-sm md:text-sm font-[500]">
                    From
                    <span className="text-sm text-emerald-600 text-[0.8rem] font-[500] px-[0.25rem]">
                      $189.25
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="md:hidden">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full mt-[1.75rem] flex flex-col justify-center">
            <div className="w-full mb-[1.5rem]">
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-full rounded-xl"
                  src="/smilingGirl.png"
                  alt="image"
                />
              </div>
              <div className="pb-[0.5rem] pt-[1.75rem] text-teal-950 tracking-wide">
                <p className="text-[1.35rem] font-bold">Name</p>
                <p className="text-[1.35rem] font-bold">Location</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex justify-center w-fit gap-x-[0.35rem] md:gap-x-1">
                  <FaStar color="green" size={12} />
                  <FaStar color="green" size={12} />
                  <FaStar color="green" size={12} />
                  <FaStar color="green" size={12} />
                  <CiStar size={13} />
                </div>
                <div className="relative">
                  <p className="text-[1rem] font-semibold">4.8 ((243))</p>
                </div>
                <div className="justify-end text-[1rem] font-semibold">
                  &quot;One quote from review&quot;
                </div>
              </div>
            </div>
            <div className="text-teal-950 md:gap-x-[12rem] md:w-fit flex justify-between pt-[1.5rem] border-t-[0.25px] border-black">
              <p className="text-sm md:text-sm font-semibold">4 Reviews</p>
              <p className="text-sm md:text-sm font-semibold">
                From
                <span className="text-sm text-emerald-600 text-[0.8rem] font-semibold px-[0.25rem]">
                  $189.25
                </span>
              </p>
            </div>
          </div>
          <div className="w-full mt-[1.75rem] flex flex-col justify-center">
            <div className="w-full mb-[1.5rem]">
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-full rounded-xl"
                  src="/smilingGirl.png"
                  alt="image"
                />
              </div>
              <div className="pb-[0.5rem] pt-[1.75rem] text-teal-950 tracking-wide">
                <p className="text-[1.35rem] font-bold">Name</p>
                <p className="text-[1.35rem] font-bold">Location</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex justify-center w-fit gap-x-[0.35rem] md:gap-x-1">
                  <FaStar color="green" size={12} />
                  <FaStar color="green" size={12} />
                  <FaStar color="green" size={12} />
                  <FaStar color="green" size={12} />
                  <CiStar size={13} />
                </div>
                <div className="relative">
                  <p className="text-[1rem] font-semibold">4.8 ((243))</p>
                </div>
                <div className="justify-end text-[1rem] font-semibold">
                  &quot;One quote from review&quot;
                </div>
              </div>
            </div>
            <div className="text-teal-950 md:gap-x-[12rem] md:w-fit flex justify-between pt-[1.5rem] border-t-[0.25px] border-black">
              <p className="text-sm md:text-sm font-semibold">4 Reviews</p>
              <p className="text-sm md:text-sm font-semibold">
                From
                <span className="text-sm text-emerald-600 text-[0.8rem] font-semibold px-[0.25rem]">
                  $189.25
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedGuides;
