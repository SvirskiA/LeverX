import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import PropTypes from 'prop-types';
import Header from "../../Header/Header";
import UsersList from "../../UsersList/UsersList";
import Filter from "../../Filter/Filter";

import { getAllUsers } from "../../../server/users";
import {
  gridViewActionCreater,
  rowViewActionCreater,
  setUsersActionCreater,
  getAllUsersActionCreater,
} from "../../../store/main-page-reduser";
import "./MainPage.scss";

withAuthRedirect(MainPage);

const MainPage = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.mainPageReduser.users);
  const isViewGrid = useSelector((state) => state.mainPageReduser.isViewGrid);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isUsersLoadFailed, setIsUsersLoadFailed] = useState(false);

  useEffect(() => {
    getAllUsers(
      (users) => {
        // dispatch(setUsersActionCreater(users));
        setFilteredUsers(users);
        setIsUsersLoadFailed(false);
        if (users) {
          dispatch(getAllUsersActionCreater(users));
        }
      },
      () => {
        setIsUsersLoadFailed(true);
      }
    );
  }, []);

  const handleGridBtnClick = () => {
    if (!isViewGrid) {
      dispatch(gridViewActionCreater(true));
    }
  };

  const handleRowBtnClick = () => {
    if (isViewGrid) {
      dispatch(rowViewActionCreater(false));
    }
  };

  const handleUsersFiltered = (filteredUsers) => {
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="main">
      <Header />
      <div className="mainWrapper">
        <Filter
          users={users}
          isOnMainPage
          onUsersFiltered={handleUsersFiltered}
        />
        <div className="employees">
          <div className="employees-view">
            <div className="displayed-emploees">
              <p>
                <span className="employees-count">{users.length}</span>{" "}
                employees displayed
              </p>
            </div>
            <div className="view-toggle">
              <img
                src="./assets/img/grid.svg"
                alt="grid view"
                id="grid-view"
                onClick={handleGridBtnClick}
              />
              <img
                src="./assets/img/list.svg"
                alt="grid view"
                id="row-view"
                onClick={handleRowBtnClick}
              />
            </div>
          </div>
          {!users && !isUsersLoadFailed && <p>Load users in progress...</p>}
          {users && (
            <UsersList
              users={filteredUsers}
              isViewGrid={isViewGrid}
              onChangeSelectedUser={props.onChangeSelectedUser}
            />
          )}
          {isUsersLoadFailed && <p>Load users failed</p>}
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  users: PropTypes.object,
}

export default MainPage;
