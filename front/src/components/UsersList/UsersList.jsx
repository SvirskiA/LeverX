import React from "react";

import UserCard from "../UserCard/UserCard";

import "./UsersList.scss";

const UsersList = (props) => {
  let wrapperClassName;

  if (props.isViewGrid) {
    wrapperClassName = "emploees-root emploees-root-grid";
  } else {
    wrapperClassName = "emploees-root";
  }

  return (
    <div className={wrapperClassName}>
      {props.users &&
        props.users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isViewGrid={props.isViewGrid}
            onChangeSelectedUser={props.onChangeSelectedUser}
          />
        ))}
    </div>
  );
};

export default UsersList;
