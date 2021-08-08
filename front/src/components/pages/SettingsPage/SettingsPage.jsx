import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { setUsersActionCreater } from "../../../store/main-page-reduser";
import Header from "../../Header/Header";
import UserRolesCardList from "../../UserRolesCardList/UserRolesCardList";
import Filter from "../../Filter/Filter";
import { getAllUsers, updateUser } from "../../../server/users";

import "./SettingsPage.scss";

withAuthRedirect(SettingsPage);

const SettingsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.mainPageReduser.users);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isUsersLoadFailed, setIsUsersLoadFailed] = useState(false);

  useEffect(() => {
    getAllUsers(
      (users) => {
        dispatch(setUsersActionCreater(users));
        setFilteredUsers(users);
        setIsUsersLoadFailed(false);
      },
      () => {
        setIsUsersLoadFailed(true);
      }
    );
  }, []);

  const handleUserRoleUpdate = (user) => {
    updateUser(user, () => {
      getAllUsers((users) => {
        dispatch(setUsersActionCreater(users));
        setFilteredUsers(users);
      });
    });
  };

  return (
    <div className="mainWrapper">
      <Header />
      <div>
        <div className="main-wrapper">
          <div className="roles-text-wrapper">
            ROLES &amp; PERMISSIONS
            <Link to="/">
              <button className="beck-btn-in-settings">back</button>
            </Link>
          </div>
          <Filter
            users={users}
            onUsersFiltered={(filteredUsers) => {
              setFilteredUsers(filteredUsers);
            }}
          />
          {filteredUsers && (
            <UserRolesCardList
              users={filteredUsers}
              onUserRoleUpdate={handleUserRoleUpdate}
            />
          )}
          {isUsersLoadFailed && <p>Load users failed</p>}
        </div>
      </div>
    </div>
  );
};

SettingsPage.propTypes = {
  users: PropTypes.object,
}

export default SettingsPage;
