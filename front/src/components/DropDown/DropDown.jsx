import React, { useState } from "react";

import "./DropDown.scss";

const DropDown = (props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = ({ target: { value } }) => {
    setValue({ value });
    props.onChange && props.onChange(value);
  };

  const { isEdit } = props;

  return (
    <div className="dropWrapper">
      {props.icon}
      <span className="dropHeading">{props.heading}</span>
      {!isEdit && <span className="dropValue">{props.value}</span>}
      {isEdit && (
        <select
          className="select-edit"
          defaultValue={value}
          onChange={handleChange}
        >
          {props.options.map(({ label, value }) => (
            <option key={`option-${value}`} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default DropDown;
