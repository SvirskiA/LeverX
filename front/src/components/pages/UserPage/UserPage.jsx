import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";

import Header from "../../Header/Header";
// import MainUserInfo from "./MainUserInfo/MainUserInfo";
import UserDetails from "./UserDetails/UserDetails";
import {
  setUserActionCreater,
} from "../../../store/user-page-reduser";

import { getUser, updateUser } from "../../../server/users";

import "./UserPage.scss";

withAuthRedirect(UserPage);
 
const UserPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userPageReduser.user);
 
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;

    getUser(id, (user) => {
      dispatch(setUserActionCreater(user));
    });
  }, []);

  const handleSave = (user) => {
    const {
      match: {
        params: { id },
      },
    } = props;

    updateUser(user, () => {
      getUser(id, (user) => {
        dispatch(setUserActionCreater(user));
      });
    });
  };

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="main">
      <Header />
      {!user && <h1>Loading...</h1>}
      {user && (
        <div className="mainWrapper">
          {/* <div className="card-wrapper">
                <MainUserInfo selectedUser={this.state.user} /> */}
          <UserDetails onSave={handleSave} />
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

UserPage.propTypes = {
  user: PropTypes.object,
}

export default withRouter(UserPage);
