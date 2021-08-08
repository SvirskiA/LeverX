import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuthRedirect } from "../../../../HOC/withAuthRedirect";

import "./MainUserInfo.scss";

withAuthRedirect(MainUserInfo);

const MainUserInfo = (props) => {

  return (
    <div className="main-info-wrapper">
      <Link to="/">
        <img className="back-button-in-card" src="../assets/img/Back.svg" />
      </Link>

      {!props.isEditEnabled && (
        <>
          <img
            className="vacation-indicator-in-card"
            src="../assets/img/Vacation indicator.svg"
          />

          <div className="vacation-info-in-card hidden">
            On vacation till 31 Mar 2019
          </div>
          <img
            className="avatar-in-card"
            src={`../assets/img/${props.selectedUser.avatar}`}
          />
          <p className="sex-in-card">
            -{props.selectedUser.sex === "m" ? "Mr" : "Ms"}-
          </p>
          <p className="emploee-name-in-card">
            {`${props.selectedUser.firstName} ${props.selectedUser.lastName}`}
          </p>
          <p className="emploee-native-name-in-card">
            {`${props.selectedUser.firstNameNative} ${props.selectedUser.middleNameNative} ${props.selectedUser.lastNameNative}`}
          </p>
        </>
      )}
      {props.isEditEnabled && (
        <img className="avatar-in-card" src="../assets/img/user picture.png" />
      )}
    </div>
  );
};

export default MainUserInfo;
