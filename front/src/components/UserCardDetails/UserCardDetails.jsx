import React from "react";
import { withRouter } from "react-router-dom";

import "./UserCardDetails.scss";

const UserCardDetails = (props) => {
  let wrapperItemClassName;
  let textClassName;

  if (props.isViewGrid && props.isRowViewOnly) {
    wrapperItemClassName = "emploee-footer-item hidden";
  } else {
    wrapperItemClassName = "emploee-footer-item";
  }
  if (props.isLargeField) {
    textClassName = "emploee-footer-text emploee-footer-text-phone";
  } else {
    textClassName = "emploee-footer-text";
  }

  return (
    <div className={wrapperItemClassName}>
      <img className="emploee-footer-icon" src={props.iconSrc} />
      <p className={textClassName}>{props.heading}</p>
    </div>
  );
};

export default withRouter(UserCardDetails);
