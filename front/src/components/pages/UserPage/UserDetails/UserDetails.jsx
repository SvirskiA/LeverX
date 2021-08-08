import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import MainUserInfo from "../MainUserInfo/MainUserInfo";

import ControlGroup from "../../../ControlGroup/ControlGroup";
import InputControl from "../../../InputControl/InputControl";
import RadioControl from "../../../RadioControl/RadioControl";
import DropDown from "../../../DropDown/DropDown";
import DateControl from "../../../DateControl/DateControl";

import TitleImg from "../../../../public/assets/img/user.svg";
import DepartmentImg from "../../../../public/assets/img/Group 38.svg";
import RoomImg from "../../../../public/assets/img/room.svg";
import InternalImg from "../../../../public/assets/img/phone 1.svg";
import MobileImg from "../../../../public/assets/img/Group.svg";
import EmailImg from "../../../../public/assets/img/email.svg";
import SkypeImg from "../../../../public/assets/img/skype.svg";
import CNumberImg from "../../../../public/assets/img/c-number.svg";
import StatusImg from "../../../../public/assets/img/status.svg";
import VacationImg from "../../../../public/assets/img/Vacation.svg";
import RedesignImg from "../../../../public/assets/img/Redesign.svg";

import {
  setUserActionCreater,
} from "../../../../store/user-page-reduser";

import "./UserDetails.scss";

const UserDetails = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userPageReduser.user);
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  
  const loginedUser = JSON.parse(localStorage.getItem("user"));

  const handleEditDetailsClick = () => {
    setIsEditEnabled(true);
  };

  const handleCancelClick = () => {
    setIsEditEnabled(false);
  };

  const handleCreateClick = () => {
    props.onSave && props.onSave(user);
    setIsEditEnabled(false);
  };

  const handleUserChange = (name, value) => {
    user[name] = value;
    dispatch(setUserActionCreater({ ...user }));
  };

  return (
    <div className="card-wrapper">
      <MainUserInfo selectedUser={user} isEditEnabled={isEditEnabled} />
      <div className="other-info-wrapper">
        <div>
          {!isEditEnabled && loginedUser.role !== "employee" && (
            <button className="edit-button" onClick={handleEditDetailsClick}>
              Edit Details
            </button>
          )}
          {isEditEnabled && (
            <div>
              <button
                className="cancel-button button-in-edit"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="create-button button-in-edit"
                onClick={handleCreateClick}
              >
                Create
              </button>
            </div>
          )}
        </div>
        <ControlGroup groupName="General Info">
          {isEditEnabled && (
            <>
              <RadioControl
                isEdit
                icon={
                  <div className="iconWrapper">
                    <img src={TitleImg} />
                  </div>
                }
                heading="Title"
                prefix="title"
                options={[
                  { label: "Mr", value: "m" },
                  { label: "Ms", value: "w" },
                ]}
                initialValue={user.sex}
                onChange={(value) => {
                  handleUserChange("sex", value);
                }}
              />
              <InputControl
                isEdit
                icon={
                  <div className="iconWrapper">
                    <img src={""} />
                  </div>
                }
                heading="First Name*"
                value={user.firstName}
                onChange={(value) => {
                  handleUserChange("firstName", value);
                }}
              />
              <InputControl
                isEdit
                icon={
                  <div className="iconWrapper">
                    <img src={""} />
                  </div>
                }
                heading="Last Name*"
                value={user.lastName}
                onChange={(value) => {
                  handleUserChange("lastName", value);
                }}
              />
              <InputControl
                isEdit
                icon={
                  <div className="iconWrapper">
                    <img src={""} />
                  </div>
                }
                heading="First Native Name"
                value={user.firstNameNative}
                onChange={(value) => {
                  handleUserChange("firstNameNative", value);
                }}
              />
              <InputControl
                isEdit
                icon={
                  <div className="iconWrapper">
                    <img src={""} />
                  </div>
                }
                heading="Middle Name Native"
                value={user.middleNameNative}
                onChange={(value) => {
                  handleUserChange("middleNameNative", value);
                }}
              />
              <InputControl
                isEdit
                icon={
                  <div className="iconWrapper">
                    <img src={""} />
                  </div>
                }
                heading="Last Name Native"
                value={user.lastNameNative}
                onChange={(value) => {
                  handleUserChange("lastNameNative", value);
                }}
              />
            </>
          )}
          <DropDown
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={DepartmentImg} />
              </div>
            }
            heading="Department"
            options={[
              { label: "Web&Mobile", value: "Web&Mobile" },
              { label: "Design", value: "Design" },
            ]}
            value={user.department}
            onChange={(value) => {
              handleUserChange("department", value);
            }}
          />
          <DropDown
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={RoomImg} />
              </div>
            }
            heading="Room"
            options={[
              { label: "1608", value: "1608" },
              { label: "1609", value: "1609" },
              { label: "1610", value: "1610" },
            ]}
            value={user.room}
            onChange={(value) => {
              handleUserChange("room", value);
            }}
          />
        </ControlGroup>
        <ControlGroup groupName="Contacts">
          <InputControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={InternalImg} />
              </div>
            }
            heading="Internal phone"
            value={user.internalPhone}
            onChange={(value) => {
              handleUserChange("internalPhone", value);
            }}
          />
          <InputControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={MobileImg} />
              </div>
            }
            heading="Mobile phone"
            value={user.mobilePhone}
            onChange={(value) => {
              handleUserChange("mobilePhone", value);
            }}
          />
          <InputControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={EmailImg} />
              </div>
            }
            heading="Email"
            value={user.email}
            onChange={(value) => {
              handleUserChange("email", value);
            }}
          />
          <InputControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={SkypeImg} />
              </div>
            }
            heading="Skype ID"
            value={user.skipeId}
            onChange={(value) => {
              handleUserChange("skipeId", value);
            }}
          />
          <InputControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={CNumberImg} />
              </div>
            }
            heading="C-Number"
            value={user.cNumber}
            onChange={(value) => {
              handleUserChange("cNumber", value);
            }}
          />
        </ControlGroup>
        <ControlGroup groupName="Profile info">
          <RadioControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={StatusImg} />
              </div>
            }
            heading="Status"
            prefix="status"
            options={[
              { label: "Active", value: "Active" },
              { label: "Passive", value: "Passive" },
            ]}
            initialValue={user.status}
            onChange={(value) => {
              handleUserChange("status", value);
            }}
          />
          <DateControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={StatusImg} />
              </div>
            }
            heading="Hire date"
            initialValue={user.hireDate}
            onChange={(value) => {
              handleUserChange("hireDate", value);
            }}
          />
        </ControlGroup>
        <ControlGroup groupName="Additional modules">
          <RadioControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={VacationImg} />
              </div>
            }
            heading="Vacation"
            prefix="vacation"
            options={[
              { label: "Enabled", value: "Enabled" },
              { label: "Disabled", value: "Disabled" },
            ]}
            initialValue={user.vacation}
            onChange={(value) => {
              handleUserChange("vacation", value);
            }}
          />
          <RadioControl
            isEdit={isEditEnabled}
            icon={
              <div className="iconWrapper">
                <img src={RedesignImg} />
              </div>
            }
            heading="Address book redesign"
            prefix="adress-book"
            options={[
              { label: "Enabled", value: "Enabled" },
              { label: "Disabled", value: "Disabled" },
            ]}
            initialValue={user.adressBookRedesign}
            onChange={(value) => {
              handleUserChange("adressBookRedesign", value);
            }}
          />
        </ControlGroup>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object,
}

export default UserDetails;
