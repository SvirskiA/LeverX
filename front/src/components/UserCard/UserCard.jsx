import React from "react";
import { withRouter } from "react-router-dom";

import UserCardDetails from "../UserCardDetails/UserCardDetails";

import DepartmentIcon from "../../public/assets/img/Group 38.svg";
import RoomIcon from "../../public/assets/img/room.svg";
import MobileIcon from "../../public/assets/img/Group.svg";
import InternalIcon from "../../public/assets/img/phone 1.svg";
import CNumberIcon from "../../public/assets/img/c-number.svg";

import "./UserCard.scss";

const UserCard = (props) => {
  let handleCardClick = () => {
    props.history.push(`/user/${props.user.id}`);
    props.onChangeSelectedUser(props.user);
  };

  let wrapperClassName;
  let avatarClassName;
  let namesClassName;
  let footerClassName;

  if (props.isViewGrid) {
    wrapperClassName = "emploee-wrapper emploee-wrapper-grid";
    avatarClassName = "avatar";
    namesClassName = "names-wrapper";
    footerClassName = "emploee-footer";
  } else {
    wrapperClassName = "emploee-wrapper emploee-wrapper-row";
    avatarClassName = "avatar avatar-row";
    namesClassName = "names-wrapper names-wrapper-row";
    footerClassName = "emploee-footer emploee-footer-row";
  }

  const { user } = props;

  return (
    <div className={wrapperClassName} onClick={handleCardClick}>
      <div className="avatar-wrapper">
        <img className={avatarClassName} src={`assets/img/${user.avatar}`} />
      </div>
      <div>
        <div className={namesClassName}>
          <p className="emploee-name">{`${user.firstName} ${user.lastName}`}</p>
          <p className="emploee-native-name">{`${user.firstNameNative} ${user.lastNameNative}`}</p>
        </div>
        <div className={footerClassName}>
          <UserCardDetails
            isViewGrid={props.isViewGrid}
            iconSrc={DepartmentIcon}
            heading={user.department}
            isRowViewOnly={false}
            isLargeField={false}
          />
          <UserCardDetails
            isViewGrid={props.isViewGrid}
            iconSrc={RoomIcon}
            heading={user.room}
            isRowViewOnly={false}
            isLargeField={false}
          />
          <UserCardDetails
            isViewGrid={props.isViewGrid}
            iconSrc={MobileIcon}
            heading={user.mobilePhone}
            isRowViewOnly={true}
            isLargeField={true}
          />
          <UserCardDetails
            isViewGrid={props.isViewGrid}
            iconSrc={InternalIcon}
            heading={user.internalPhone}
            isRowViewOnly={true}
            isLargeField={false}
          />
          <UserCardDetails
            isViewGrid={props.isViewGrid}
            iconSrc={CNumberIcon}
            heading={user.cNumber}
            isRowViewOnly={true}
            isLargeField={false}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserCard);
