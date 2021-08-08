import React, { useState } from "react";
import "./RadioControl.scss";

const RadioControl = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const handleChange = ({ target: { value } }) => {
    setValue({ value });
    props.onChange && props.onChange(value);
  };

  const { options, prefix, icon, heading } = props;

  return (
    <div className="radio-wrapper-in-card">
      {icon}
      <span className="radioHeading">{heading}</span>
      {!props.isEdit && (
        <span className="radioValue">{props.initialValue}</span>
      )}
      {props.isEdit &&
        options.map(({ label, value }) => (
          <div key={`itemkey-${value}`} className="radioInputWrapper">
            <input
              className="radioInput"
              type="radio"
              name={`radio-${prefix}`}
              id={`option-${prefix}-${value}`}
              value={value}
              onChange={handleChange}
              checked={value === props.initialValue}
            />
            <label htmlFor={`option-${prefix}-${value}`}>{label}</label>
          </div>
        ))}
    </div>
  );
};

export default RadioControl;
