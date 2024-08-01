// import Image from "next/image";
// import React from "react";
// import { ImLocation } from "react-icons/im";
// import { IoMdSearch } from "react-icons/io";
// import { IoMdTime } from "react-icons/io";
// import { FaCarSide } from "react-icons/fa6";

// const Search = () => {
//   return (
//     <div
//       id="search"
//       className="border-[1px] border-green-600 bg-white z-20 relative -top-[2rem] rounded-full mx-auto shadow-md w-[30rem] md:w-[53rem] h-full px-[1rem] md:px-[0.5rem] py-[0.15rem] md:py-[0.4rem] flex justify-center gap-x-[0.2rem] md:gap-x-[1.25rem]"
//     >
//       <div className="w-full flex justify-between gap-x-[0.15rem] md:gap-x-2 md:px-[1rem]">
//         <div className="rounded-full w-fit md:w-[2rem] px-[0.5rem] flex justify-center items-center mx-auto md:px-[0] md:pb-[0]">
//           <ImLocation
//             className="hidden md:block p-[0.5rem] border-[1px] rounded-full"
//             size={36}
//           />
//           <ImLocation
//             size={30}
//             className="md:hidden p-[0.3rem] border-[1px] rounded-full"
//           />
//         </div>
//         <div className="h-full flex flex-col justify-between w-fit py-[0.5rem]">
//           <h1 className="text-green-600 text-[0.75rem] md:tracking-normal md:text-base">
//             Where
//           </h1>
//           <p className="md:w-full w-full text-[0.7rem] flex my-auto md:text-xs font-light text-start">
//             search Tour guide
//           </p>
//         </div>
//       </div>
//       <div className="w-full flex justify-between gap-x-[0.25rem] md:gap-x-2 md:px-[1rem]">
//         <div className="rounded-full w-fit md:w-[2rem] px-[0.5rem] flex justify-center items-center mx-auto md:px-[0] md:pb-[0]">
//           <IoMdTime
//             className="hidden md:block p-[0.5rem] border-[1px] rounded-full"
//             size={36}
//           />
//           <IoMdTime
//             size={33}
//             className="md:hidden p-[0.25rem] border-[1px] rounded-full"
//           />
//         </div>
//         <div className="h-fit flex flex-col justify-between  py-[0.5rem]">
//           <h1 className="text-green-600 text-[0.75rem] md:tracking-normal md:text-base">
//             When
//           </h1>
//           <p className="md:w-full text-[0.7rem] tracking-[-0.075] md:text-xs font-light text-start">
//             Feb 5~March 14
//           </p>
//         </div>
//       </div>
//       <div className="w-full flex justify-between gap-x-[0.25rem] md:gap-x-2 md:px-[1rem]">
//         <div className="rounded-full w-fit md:w-[2rem] px-[0.5rem] flex justify-center items-center mx-auto md:px-[0] md:pb-[0]">
//           <FaCarSide
//             className="hidden md:block p-[0.5rem] border-[1px] rounded-full"
//             size={36}
//           />
//           <FaCarSide
//             size={35}
//             className="md:hidden p-[0.5rem] border-[1px] rounded-full"
//           />
//         </div>
//         <div className="h-fit flex flex-col justify-between  py-[0.5rem]">
//           <h1 className="text-green-600 text-[0.75rem] md:tracking-normal md:text-base">
//             Tour Type
//           </h1>
//           <p className="md:w-full text-[0.7rem] tracking-[-0.075] md:text-xs font-light text-start">
//             All Tour
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-center items-center">
//         <div className="md:flex justify-center items-center bg-orange-400 rounded-full shadow-sm px-[0.85rem] md:px-[1.1rem] py-[0.75rem] md:py-[0.85rem]">
//           <IoMdSearch className="hidden md:block" color="white" size={25} />
//           <IoMdSearch className="md:hidden" color="white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
import Image from "next/image";
import React from "react";
import { ImLocation } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaCarSide } from "react-icons/fa6";

const Search = () => {
  return (
    <div
      id="search"
      className="border-[1px] px-[0.35rem] md:px-[0.65rem] border-green-600 bg-white z-20 relative -top-[2rem] rounded-full mx-auto shadow-md w-[94%] md:w-[54%] h-full py-[0.15rem] md:py-[0.4rem] flex justify-center gap-x-[0.2rem] md:gap-x-[1.25rem]"
    >
      <div className="flex items-center gap-x-[0.15rem] md:gap-x-2 w-full">
        <div className="rounded-full w-fit md:w-[2rem] flex justify-center items-center">
          <ImLocation
            className="p-[0.5rem] border-[1px] rounded-full"
            size={33}
          />
        </div>
        <div className="flex flex-col justify-between w-fit py-[0.5rem] relative left-1 md:mt-[-0.3rem]">
          <p className="text-emerald-600 text-[0.8rem] md:tracking-normal md:text-[0.8rem]">
            Where
          </p>
          <input
            type="text"
            placeholder="Search destinations"
            className="bg-transparent w-full text-[0.6rem] md:text-[0.55rem] font-light text-start flex items-center outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-[0.25rem] md:gap-x-2 w-full">
        <div className="rounded-full w-fit md:w-[2rem] flex justify-center items-center">
          <IoMdTime
            className="p-[0.5rem] border-[1px] rounded-full"
            size={33}
          />
        </div>
        <div className="flex flex-col justify-between w-fit py-[0.5rem] relative left-1 md:mt-[-0.2rem]">
          <p className="text-emerald-600 text-[0.8rem] md:tracking-normal md:text-[0.8rem]">
            When
          </p>
          <input
            type="text"
            placeholder="Feb 5~March 14"
            className="bg-transparent w-full text-[0.6rem] md:text-[0.55rem] font-light text-start flex items-center outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-[0.25rem] md:gap-x-2 w-full">
        <div className="rounded-full w-fit md:w-[2rem] flex justify-center items-center">
          <FaCarSide
            className="p-[0.5rem] border-[1px] rounded-full"
            size={33}
          />
        </div>
        <div className="flex flex-col justify-between w-fit py-[0.5rem] relative left-1 md:mt-[-0.2rem]">
          <p className="text-emerald-600 text-[0.8rem] md:tracking-normal md:text-[0.8rem]">
            Tour Guide
          </p>
          <input
            type="text"
            placeholder="All tour guides"
            className="bg-transparent w-full text-[0.6rem] md:text-[0.55rem] font-light text-start flex items-center outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-orange-400 rounded-full shadow-sm px-[0.8rem] py-[0.75rem] md:px-[0.9rem] md:py-[0.85rem]">
          <IoMdSearch color="white" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Search;
