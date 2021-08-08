import React from "react";

import UserRolesCard from "../UserRolesCard/UserRolesCard";

const UserRolesCardList = (props) => {
  return (
    <div className="emploees-root">
      {props.users &&
        props.users.map((user) => (
          <UserRolesCard
            key={user.id}
            user={user}
            onRoleUpdate={props.onUserRoleUpdate}
          />
        ))}
    </div>
  );
};

export default UserRolesCardList;
