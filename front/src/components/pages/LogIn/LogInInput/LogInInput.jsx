import React from "react";
import { withRouter } from "react-router-dom";

const LogInInput = (props) => {
  return (
      <input
        type={props.type}
        placeholder={props.placeHolder}
        className="login-input"
        value={props.email}
        onChange={props.onChange}
      />
  );
};

export default withRouter(LogInInput);
