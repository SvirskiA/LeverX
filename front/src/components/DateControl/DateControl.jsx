import React, { useState } from "react";

const padNumber = (number) => ("0" + number).slice(-2);

const formatDateForInput = (date) => {
  if (!date) return "";

  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(
    date.getDate()
  )}`;
};

const formatDisplayDate = (date) => {
  if (!date) return "";

  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;
};

const parseDate = (dateString) => {
  const myDate = dateString.split("-");
  const newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);

  return newDate.getTime();
};

const DateControl = (props) => {
  const [value, setValue] = useState(new Date(props.initialValue));

  const handleChange = ({ target: { value } }) => {
    setValue(new Date(value));
    props.onChange && props.onChange(parseDate(value));
  };

  const { icon, heading } = props;

  return (
    <div className="radio-wrapper-in-card">
      {icon}
      <span className="radioHeading">{heading}</span>
      {!props.isEdit && (
        <span className="dateValue">{formatDisplayDate(value)}</span>
      )}
      {props.isEdit && (
        <div className="dateInputWrapper">
          <input
            className="radioInput"
            type="date"
            value={formatDateForInput(value)}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default DateControl;
