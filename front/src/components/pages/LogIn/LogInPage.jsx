import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import PropTypes from 'prop-types';
import {
  inputEmailActionCreater,
  inputPasswordActionCreater,
  loginUserActionCreater
} from "../../../store/login-reduser";
import LogInInput from "./LogInInput/LogInInput";
import { login, getUser } from "../../../server/users";

import "./LogInPage.scss";

withAuthRedirect(LogInPage);

const LogInPage = (props) => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.logInReduser.email);
  const password = useSelector((state) => state.logInReduser.password);

  const [wasLoginFailed, setWasLoginFailed] = useState(false);
  const [errorMessage, setErrorMessaged] = useState("");

  let handleEmailChange = (e) => {
    let body = e.target.value;
    dispatch(inputEmailActionCreater(body))
  };

  let handlePasswordChange = (e) => {
    let body = e.target.value;
    dispatch(inputPasswordActionCreater(body))
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    setWasLoginFailed(false);

    login(
      credentials,
      () => {
        getUser(
          email,
          (user) => {
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(loginUserActionCreater(JSON.parse(localStorage.getItem("user"))))
            props.history.push("/");
          },
          () => {
            setWasLoginFailed(true);
            dispatch(inputPasswordActionCreater(""))
            setErrorMessaged("Failed to load user details");
          }
        );
      },
      () => {
        setWasLoginFailed(true);
        dispatch(inputPasswordActionCreater(""))
        setErrorMessaged("Wrong combination");
      }
    );
  };

  return (
    <div className="login-form">
      <div className="wrapper">
        <form className="form" onSubmit={handleFormSubmit}>
          <LogInInput
            type="text"
            placeHolder="Enter email"
            email={email}
            onChange={handleEmailChange}
          />
          <LogInInput
            type="password"
            placeHolder="Enter password"
            password={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="submit-btn">
            Log In
          </button>
          {wasLoginFailed && <p className="errorMessage">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

LogInPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
}

export default withRouter(LogInPage);
