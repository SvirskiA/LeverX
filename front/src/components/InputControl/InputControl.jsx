import React, { useState } from "react";
import "./InputControl.scss";

const InputControl = (props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = ({ target: { value } }) => {
    setValue({ value });
    props.onChange && props.onChange(value);
  };

  return (
    <div className="inputWrapper">
      {props.icon}
      <span className="inputHeading">{props.heading}</span>
      {!props.isEdit && <span className="inputValue">{props.value}</span>}
      {props.isEdit && (
        <input
          className="input-in-card"
          onChange={handleChange}
          value={props.value}
        />
      )}
    </div>
  );
};

export default InputControl;
