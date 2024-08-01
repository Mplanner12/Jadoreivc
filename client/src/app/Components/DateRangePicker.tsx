import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../DateRangePicker.css";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center md:flex-row md:gap-x-4 md:pr-[0.5rem] mb-4 md:mb-0">
      <div className="flex justify-center items-center">
        <DatePicker
          className="rounded-xl"
          selected={startDate}
          onChange={(date: any) => setStartDate(date ?? undefined)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          inline
          renderCustomHeader={({
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div className="custom-header">
              <HiOutlineArrowLeft
                size={30}
                className="custom-arrow p-1 border-[0.5px] shadow-sm border-gray-700 rounded text-teal-950"
                onClick={decreaseMonth}
              />
              <span>
                {monthDate.toLocaleString("default", { month: "long" })}{" "}
                {monthDate.getFullYear()}
              </span>
              <HiOutlineArrowRight
                size={30}
                className="custom-arrow p-1 border-[0.5px] shadow-sm border-gray-700 rounded text-teal-950"
                onClick={increaseMonth}
              />
            </div>
          )}
        />
      </div>
      <div className="md:border-l-[1px] border-gray-400 md:pl-[0.7rem] flex justify-center items-center">
        <DatePicker
          className="end-date"
          selected={endDate}
          onChange={(date: any) => setEndDate(date ?? undefined)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          inline
          renderCustomHeader={({
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div className="custom-header">
              <HiOutlineArrowLeft
                size={30}
                className="custom-arrow p-1 border-[0.5px] shadow-sm border-gray-700 rounded text-teal-950"
                onClick={decreaseMonth}
              />
              <span>
                {monthDate.toLocaleString("default", { month: "long" })}{" "}
                {monthDate.getFullYear()}
              </span>
              <HiOutlineArrowRight
                size={30}
                className="custom-arrow p-1 border-[0.5px] shadow-sm border-gray-700 rounded text-teal-950"
                onClick={increaseMonth}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
