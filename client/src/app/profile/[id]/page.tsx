/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Link from "next/link";
import { MdCheckBox, MdKeyboardArrowDown } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";
import { FaXmark, FaCheck, FaStar } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { UserProvider } from "../../context/UserContex";

const Page = () => {
  const [selectedLocals, setSelectedLocals] = useState<string[]>([]);

  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]); // Default language
  const languageDropdownRef = useRef<HTMLUListElement>(null); // Reference to the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [profileImage, setProfileImage] = useState<File | null>(null); // State for profile image

  const [about, setAbout] = useState("");
  const [motto, setMotto] = useState("");
  const [selectedThingsToDo, setSelectedThingsToDo] = useState<string[]>([]);

  const localsOptions = [
    "MAN",
    "WOMAN",
    "COUPLE",
    "FAMILY",
    "COUPLE OF FRIENDS",
  ];

  const languageOptions = ["English", "French"]; // Available languages

  const thingsToDoOptions = [
    "Explore The Pleateu District",
    "Visit St Paul's Cathedral",
    "Wander around Banco National park",
    "Relax at Bessam Beach",
    "Shop at Treichville Market",
    "Tour the Abidjan Zoo",
    "Enjoy nightlife in Zone 4",
    "Explore the Museum of Civilizations of Côte d'Ivoire",
  ];

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
  ];

  const handleLocalsSelect = (local: string) => {
    if (selectedLocals.includes(local)) {
      setSelectedLocals(selectedLocals.filter((l) => l !== local));
    } else {
      setSelectedLocals([...selectedLocals, local]);
    }
    // onLocalsSelect(local);
    // setLocalsOpen(false);
  };

  const handleThingsToDoSelect = (thingToDo: string) => {
    if (selectedThingsToDo.includes(thingToDo)) {
      setSelectedThingsToDo(selectedThingsToDo.filter((t) => t !== thingToDo));
    } else {
      setSelectedThingsToDo([...selectedThingsToDo, thingToDo]);
    }
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage((prevSelectedLanguages) => {
      if (prevSelectedLanguages.includes(language)) {
        // Remove language if already selected
        return prevSelectedLanguages.filter((l) => l !== language);
      } else {
        // Add language to the array
        return [...prevSelectedLanguages, language];
      }
    });
    // setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // close Language Dropdown
  const handleLanguageDropdownToggle = () => {
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen); // Toggle dropdown state
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target as Node) &&
      // Check if the click is on the button itself
      !((event.target as HTMLElement)?.closest("button") || false)
    ) {
      setIsDropdownOpen(false); // Close the dropdown
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // Here, you can handle the form data and submit it to your backend
    console.log("Form submitted!");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(event.target.files[0]);
    }
  };

  return (
    // <UserProvider>
    <main className="w-full m-0 p-0 flex flex-col justify-center items-center">
      {/* <Header /> */}
      <div className="w-full flex flex-col justify-center items-center pt-[2rem]">
        <div className="flex flex-col justify-center items-center py-[2rem]">
          <h1 className="text-center text-[1.85rem] font-semibold text-teal-950">
            Complete Your Profile
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:mt-[3rem] md:mb-[11rem]">
          <div className="w-full flex md:h-full md:px-[10rem] md:pr-[7rem] md:border-r-[1.5px] border-gray-300">
            {" "}
            <form
              onSubmit={handleSubmit}
              action=""
              className="w-full bg-none border-0 px-[1.75rem]"
            >
              <div className="w-full flex flex-col justify-center gap-y-[0.85rem]">
                <div className="w-full h-fit flex flex-col justify-between">
                  <label
                    className="py-[0.35rem] text-[1rem] text-slate-500"
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
                  <input
                    className="p-[1rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[1rem]"
                    type="text"
                    name="fullname"
                    id=""
                    placeholder="David Goliath"
                  />
                </div>
                {/* <div className="w-full h-fit flex flex-col justify-between">
                  <label
                    className="py-[0.35rem] text-[0.8rem] text-gray-600"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="p-[0.7rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[0.85rem]"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Create your password"
                  />
                </div> */}
                <div className="w-full h-fit flex flex-col justify-center items-center relative">
                  <label
                    className="w-full text-start py-[0.35rem] text-[1rem] text-slate-500"
                    htmlFor="profileImage"
                  >
                    Profile Image
                  </label>
                  <div className="w-full h-[12.7rem] border-2 border-gray-4300 rounded-xl flex flex-col justify-center items-center relative">
                    <BsCamera className="text-gray-400 text-[3rem]" />
                    <p className="text-[0.9rem] mt-[1rem] text-gray-600">
                      Input profile image
                    </p>
                    <input
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      name="profileImage"
                      id="profileImage"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="w-full md:mt-[0.7rem]  flex flex-col justify-center items-center relative">
                  <label
                    htmlFor=""
                    className="py-[0rem] w-full text-start text-[1rem] text-slate-500"
                  >
                    Languages
                  </label>
                  <button
                    className="w-full flex bg-white border border-gray-500 justify-between gap-x-[10rem] items-center py-[1rem] md:py-[0.8rem] mt-[0.85rem] px-[1.25rem] rounded"
                    onClick={handleLanguageDropdownToggle}
                  >
                    {" "}
                    {/* {selectedLanguage ? (
                      <p className="px-[2rem]">
                        {selectedLanguage
                          .slice(0, 1)
                          .map((language) => selectedLanguage)}
                      </p>
                    ) : ( */}
                    <p>Select Languages</p>
                    {/* )} */}
                    <MdKeyboardArrowDown size={32} className="text-gray-600" />
                  </button>
                  {/* Dropdown for language selection */}
                  <ul
                    ref={languageDropdownRef}
                    className={`w-full px-[1.5rem] flex flex-col justify-start md:pt-[1rem] items-center rounded ${
                      isDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    {languageOptions.map((language) => (
                      <li
                        key={language}
                        className="w-full p-1 text-[1.1rem] text-teal-950 cursor-pointer flex justify-between items-center"
                        onClick={() => handleLanguageChange(language)}
                      >
                        {language}
                        {selectedLanguage.includes(language) ? (
                          <FaXmark className="text-teal-900" />
                        ) : (
                          <FaCheck className="text-teal-900" />
                        )}
                        {/* <FaXmark className="text-teal-900" /> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full h-fit flex flex-col justify-between">
                  <label
                    className="py-[0.35rem] text-[1rem] text-gray-600"
                    htmlFor="about"
                  >
                    About Me
                  </label>
                  <textarea
                    className="p-[1rem] h-[8rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[0.9rem]"
                    name="about"
                    id="about"
                    placeholder="Write a little more about your personality"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
                <div className="w-full h-fit flex flex-col justify-between">
                  <label
                    className="py-[0.35rem] text-[1rem] text-gray-600"
                    htmlFor="motto"
                  >
                    Motto
                  </label>
                  <textarea
                    className="p-[1rem] h-[8rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[0.9rem]"
                    name="motto"
                    id="motto"
                    placeholder="Write a short text describing why your visitors should choose you"
                    value={motto}
                    onChange={(e) => setMotto(e.target.value)}
                  />
                </div>
                <div className="w-full mt-[1rem] px-[0rem] flex flex-col justify-center items-center relative">
                  <label
                    htmlFor=""
                    className="w-full py-[0rem] text-[1.2rem] text-start text-teal-900"
                  >
                    Things to Do
                  </label>
                  <ul className="w-full mt-1 flex flex-col justify-start items-cente">
                    {thingsToDoOptions.map((thingToDo) => (
                      <li
                        key={thingToDo}
                        className="p-1 hover:bg-gray-200 text-[1rem] cursor-pointer flex justify-start gap-x-[0.45rem] items-center"
                        onClick={() => handleThingsToDoSelect(thingToDo)}
                      >
                        {selectedThingsToDo.includes(thingToDo) ? ( // Check if local is selected
                          <MdCheckBox size={22} className="text-emerald-900" /> // Show blue tick if selected
                        ) : (
                          <ImCheckboxUnchecked
                            size={20}
                            className="text-emerald-900 mr-2"
                          />
                        )}
                        <p className="text-[0.9rem] text-teal-900">
                          {thingToDo}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full flex flex-col justify-start items-center">
                  <label
                    className="w-full text-start py-[0.5rem] text-[0.9rem] text-gray-600"
                    htmlFor="offer"
                  >
                    Hourly Rate
                  </label>
                  <input
                    type="number"
                    name="offer"
                    id=""
                    className="w-full p-[0.8rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[1rem]"
                    placeholder="$100"
                  />
                </div>
                <div className="w-full h-fit flex flex-col justify-between">
                  <label
                    className="py-[0.35rem] text-[1rem] text-gray-600"
                    htmlFor="email"
                  >
                    Contact Information
                  </label>
                  <input
                    className="p-[1rem] shadow-sm rounded-lg border-2 hover:border-emerald-600 active:border-emerald-600 outline-emerald-600 text-[1rem]"
                    type="email"
                    name="fullname"
                    id=""
                    placeholder="Jamie124@gmail.com"
                  />
                </div>
                <div className="w-full h-full mt-[1rem] mb-[3rem] md:mb-0">
                  <input
                    type="button"
                    value="SAVE AND CONTINUE"
                    className="w-full h-full p-[0.75rem] font-[500] text-[0.9rem] text-center bg-orange-400 rounded-full text-white"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-[88%] mt-[1rem] md:px-[12rem] mb-[5.75rem] px-[1.5rem] flex flex-col justify-center h-full">
            <div className="mb-[0.85rem] w-full h-full">
              <img
                className="rounded-xl w-full md:h-fit"
                // src={guide.image}
                src="/smilingGirl.png"
                alt="image"
              />
            </div>
            <div className="w-full h-full flex justify-between items-start">
              <div className="w-full h-fit pb-[0.5rem] pt-[0.2rem] space-y-[0.25rem] text-teal-950 tracking-wide">
                <p className="text-[1rem] font-semibold">
                  {/* {guide.name} */}
                  Grace Jennings
                </p>
                <div className="w-fit gap-x-[0.3rem] text-base font-normal flex justify-between items-center">
                  <HiOutlineLocationMarker size={17} />
                  <p className="text-[0.725rem] tracking-tighter font-[500]">
                    {/* {guide.location} */}
                    Abidjan, Cote d Ivoire
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-[0.5rem] py-[0.3rem]">
                <div className="w-fit gap-x-[0.5rem] flex justify-center items-center">
                  <div className="text-[0.9rem] font-semibold text-blue-950">
                    {/* {guide.rating} */}
                    4.5
                  </div>
                  <div className="flex justify-center w-fit gap-x-[0.10rem] md:gap-x-1">
                    <FaStar color="orange" size={15} />
                    {/* <CiStar size={13} /> */}
                  </div>
                  <div className="text-[0.8rem] font-[500] text-blue-950">
                    {/* {guide.noofreviews} */}
                    (243)
                  </div>
                </div>
                <div className="w-full flex h-fit py-0.5 text-[0.7rem] font-semibold justify-start items-center gap-x-[0.25rem]">
                  <div className="w-full text-teal-900">
                    {/* {guide.languages[0]}</div> */}English
                  </div>
                  {/* {guide.languages.length > 1 && ( */}
                  <div className="text-teal-900 border-l-[1.5px] border-teal-700 pl-[0.25rem]">
                    {/* {guide?.languages[1]} */}
                    French
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
            <div className="w-fit flex justify-start text-[0.75rem] italic font-[500] text-slate-900">
              {/* {guide.quote} */}
              &quot;Grace made our trip unforgettable!&quot;
            </div>
            <div className="text-teal-950 md:gap-x-[4rem] md:w-full flex justify-between pt-[1.35rem] md:pt-[1.5rem]">
              <p className="w-full text-sm md:text-sm font-[500]">4 Reviews</p>
              <p className="text-sm md:text-sm font-[500]">
                From
                <span className="text-sm text-emerald-600 text-[0.8rem] font-[500] px-[0.25rem]">
                  $189.25
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
    // </UserProvider>
  );
};

export default Page;
