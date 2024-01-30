import React, { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ onDateChange, title, dateValue }) => {
  useEffect(() => {
    if (dateValue) {
      onDateChange(dateValue);
    }
  }, [dateValue]);
  return (
    <>
      <div className="filter">
        <span className="filter-title">{title}</span>
        <input
          type="date"
          id="datepicker"
          name="datepicker"
          className="filter-input"
          onChange={(e) => onDateChange(e.target.value)}
          value={dateValue}
        />
      </div>
    </>
  );
};

export default DatePicker;
