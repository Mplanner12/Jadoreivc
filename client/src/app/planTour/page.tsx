"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { MdCheckBox } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import Link from "next/link";
import DateRangePicker from "../Components/DateRangePicker";
import TimePicker from "../Components/TimePicker";
import { UserProvider } from "../context/UserContex";

interface tourProps {
  onLocalsSelect: (selectedLocal: string) => void;
  onPersonSelect: (selectedPersons: string) => void;
}

const Page = ({ onLocalsSelect, onPersonSelect }: tourProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null); // State for selected location
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState<string | null>(null); // Now a single string
  //   const [localsOptions, setLocalsOptions] = useState<string[]>([]);
  const [selectedLocals, setSelectedLocals] = useState<string[]>([]);

  const peopleDropdownRef = useRef<HTMLUListElement>(null); // Reference to the dropdown
  const localsDropdownRef = useRef<HTMLUListElement>(null); // Reference to the dropdown

  const toggleDropdown = () => {
    setPeopleOpen((isDropdownOpen) => !isDropdownOpen); // Toggle dropdown state
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(event.target.value); // Update selectedLocation state
    // selectedLocation && onLocationSelect(event.target.value);
  };

  const peopleOptions = [
    "Just me",
    "2 persons",
    "3 persons",
    "4 persons",
    "5 persons",
    "more",
  ];
  const localsOptions = [
    "Man",
    "Woman",
    "Couple",
    "Family",
    "Couple Of Friends",
  ];

  const handlePersonSelect = (person: string) => {
    setSelectedPersons(person); // Directly set the selected person
    setPeopleOpen(false); // Close the dropdown after selection
  };

  const handleLocalsSelect = (local: string) => {
    if (selectedLocals.includes(local)) {
      setSelectedLocals(selectedLocals.filter((l) => l !== local));
    } else {
      setSelectedLocals([...selectedLocals, local]);
    }
    // onLocalsSelect(local);
    // setLocalsOpen(false);
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      peopleDropdownRef.current &&
      !peopleDropdownRef.current.contains(event.target as Node) &&
      // Check if the click is on the button itself
      !((event.target as HTMLElement)?.closest("button") || false)
    ) {
      setPeopleOpen(false); // Close the dropdown
    }
    if (
      localsDropdownRef.current &&
      !localsDropdownRef.current.contains(event.target as Node) &&
      // Check if the click is on the button itself
      !((event.target as HTMLElement)?.closest("button") || false)
    ) {
      setPeopleOpen(false); // Close the dropdown
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <UserProvider>
    <main className="m-0 p-0 flex flex-col justify-center items-center">
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
      <div className="w-full flex flex-col justify-center md:py-[2rem] items-center mb-1 md:mb-[2rem] mt-[2rem] px-[1rem] md:px-[2.5rem]">
        <div className="w-full h-full flex flex-col justify-center items-center py-[1rem] pb-[3.85rem]">
          <div className="flex justify-center items-center py-[0.75rem]">
            <h1 className="text-[2.5rem] text-teal-950 font-semibold">
              Plan your Journey
            </h1>
          </div>
          <div className="px-[2rem]">
            <p className="text-[1.3rem] font-normal text-teal-950 text-center">
              Save time by planning your journey and receiving offers from
              locals
            </p>
          </div>
        </div>
        <div className="w-full h-full md:w-full flex px-[1.75rem] md:px-0 flex-col justify-center items-center py-[0.5rem] pb-[1rem]">
          <div className="w-full md:w-fit relative flex flex-col justify-center md:justify-start items-center -mt-[0.45rem]">
            <label
              htmlFor="destination"
              className="w-full flex justify-start items-center text-teal-950 text-[1.25rem] p-1.5 rounded"
            >
              Where are you going?
            </label>
            <input
              type="text"
              className="w-[95%] md:w-[100%] text-[1.25rem] p-2 px-[0.9rem] shadow-sm my-[0.7rem] bg-gray-100 border-gray-300 rounded outline-emerald-600 text-black"
              value={
                selectedLocation !== null ? selectedLocation.toString() : ""
              } // Set input value from state
              onChange={handleLocationChange} // Handle input change
              placeholder="Ivory Co"
            />
          </div>
        </div>
        <div className="w-fit h-full flex flex-col justify-start items-center pb-[1.5rem] px-[2rem] pr-[2rem] md:pr-[2rem] mb-[2rem] md:mb-0 md:pt-[0]">
          <div className="w-full pb-[1rem] flex text-start md:text-center px-[0.16rem] text-teal-900 text-[1.1rem] font-[500] justify-start md:justify-center md:ml-[-15.5rem] items-center">
            <h1>Date</h1>
          </div>
          <div className="w-full md:fit h-full flex flex-col md:flex-row justify-center items-center md:py-[0.5rem] shadow-sm rounded-[0.5rem] border-[0.5px] pt-[0.3rem] md:pt-[0.1rem] md:pb-0 pr-[0.5rem] md:pr-[0.5rem] border-emerald-700 pb-[0.1rem] px-[.5rem] md:px-[0.5rem]">
            <DateRangePicker />
            <div className="w-full flex md:px-[0.25rem] justify-start items-center">
              <TimePicker />
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit h-full flex flex-col justify-start items-center -mt-[1rem] md:mt-0 py-[0.5rem] pb-[1.25rem]">
          <div className="w-full px-[2.7rem] md:w-fit flex flex-col justify-start items-center relative">
            <label
              htmlFor=""
              className="py-[0rem] w-full text-start text-[1.2rem] font-[500] text-teal-900"
            >
              Number of People
            </label>
            <button
              className="flex w-full text-[1.225rem] font-[500] text-teal-900 bg-slate-100 border-none justify-between gap-x-[7rem] items-center p-2.5 mt-[0.85rem] px-[1.25rem] rounded md:w-fit"
              onClick={toggleDropdown}
            >
              {selectedPersons ? selectedPersons : "Just me"}
              <HiOutlineChevronDown size={30} className="text-teal-800" />
            </button>
            {peopleOpen && (
              <ul
                ref={peopleDropdownRef} // Attach the reference to the dropdown
                className="relative bg-slate-100 w-full md:w-fit flex flex-col justify-center items-center mt-[0rem] z-20  border-gray-300 rounded shadow-md"
              >
                {peopleOptions.map((person) => (
                  <li
                    key={person}
                    className="w-full p-2 hover:bg-gray-200 cursor-pointer flex justify-center gap-x-[0.45rem] items-center border border-gray-300"
                    onClick={() => handlePersonSelect(person)}
                  >
                    {person}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-full px-[1.9rem] md:w-fit h-full flex flex-col justify-center md:justify-start items-center font-[400] py-[0rem] pb-[1.85rem] mb-[2.5rem] md:mb-0">
          <div className="w-fit md:w-full px-[1.2rem] md:px-[3.75rem] flex flex-col justify-center items-center relative">
            <label
              htmlFor=""
              className="w-full py-[0.35rem] pl-[0.3rem] font-[500] text-[1.25rem] text-start text-teal-900"
            >
              Looking for a local
            </label>
            <ul
              ref={localsDropdownRef} // Attach the reference to the dropdown
              className="w-full mt-1 flex flex-col justify-start items-start"
            >
              {localsOptions.map((local) => (
                <li
                  key={local}
                  className="p-1 hover:bg-gray-200 text-teal-900 text-[1rem] cursor-pointer flex justify-start gap-x-[0.7rem] items-center"
                  onClick={() => handleLocalsSelect(local)}
                >
                  {selectedLocals.includes(local) ? ( // Check if local is selected
                    <MdCheckBox
                      size={31}
                      className="text-teal-900 mr-2 border-none"
                    /> // Show blue tick if selected
                  ) : (
                    <RiCheckboxBlankLine
                      className="text-teal-950 font-extralight rounded-[3rem] border-[0px]"
                      size={27}
                      // color="grey"
                    />
                  )}
                  <p className="text-[1.1rem] capitalize text-teal-900 font-[500]">
                    {local}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-fit h-full mt-[2rem] pb-[4rem] flex justify-center items-center">
            <Link href={""}>
              <input
                type="submit"
                value="plan new Journey"
                className="uppercase w-full h-full flex justify-center items-center p-[0.75rem] px-[3.85rem] md:px-[5.85rem] font-[500] text-[1.3rem] text-center bg-orange-400 rounded-full text-white"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
    // </UserProvider>
  );
};

export default Page;
