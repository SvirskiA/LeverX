import React from "react";

import "./UserRolesCard.scss";

const roleClasses = (expectedRole, actualRole) =>
  `roles-button ${expectedRole === actualRole ? "roles-checked" : ""}`;

const UserRolesCard = (props) => {
  const handleRoleButtonClick = (newRole) => {
    if (newRole === props.user.role) return;

    const { role, ...rest } = props.user;

    props.onRoleUpdate && props.onRoleUpdate({ role: newRole, ...rest });
  };

  const { user } = props;

  return (
    <div className="role-wrapper">
      <div className="person-info-wrapper">
        <img className="avatar-row" src={`assets/img/${user.avatar}`} />
        <div className="roles-names-wrapper">
          <p className="emploee-name">{`${user.firstName} ${user.lastName}`}</p>
          <p className="emploee-native-name">{`${user.firstNameNative} ${user.lastNameNative}`}</p>
        </div>
      </div>
      <div className="roles-buttons-wrapper">
        <button
          className={roleClasses("employee", user.role)}
          onClick={() => handleRoleButtonClick("employee")}
        >
          Employee
        </button>
        <button
          className={roleClasses("editor", user.role)}
          onClick={() => handleRoleButtonClick("editor")}
        >
          Editor
        </button>
        <button
          className={roleClasses("admin", user.role)}
          onClick={() => handleRoleButtonClick("admin")}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default UserRolesCard;
