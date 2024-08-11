import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

interface DateRangePickerProps {
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onStartDateChange,
  onEndDateChange,
}) => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    onStartDateChange(date);
    console.log("Start Date Selected:", date); // Log the selected start date
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    onEndDateChange(date);
    console.log("End Date Selected:", date); // Log the selected end date
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:gap-x-4 md:pr-[0.5rem] mb-4 md:mb-0">
      <div className="flex justify-center items-center">
        <DatePicker
          className="rounded-xl"
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          inline
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
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
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          inline
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
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
