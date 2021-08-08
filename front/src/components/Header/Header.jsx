import React from "react";
import { Link } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

import "./Header.scss";

withAuthRedirect(Header);

const Header = () => {
  let handleLogOutClick = () => {
    localStorage.setItem("user", null);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="header">
      <div className="headerWrapper">
        <Link to="/">
          <div className="logo">
            <h1 className="logoHeading">Employee services</h1>
            <div>
              <img
                src="http://localhost:3005/assets/img/LeverX group.svg"
                alt="LeverX group"
              />
            </div>
            <div>
              <img
                src="http://localhost:3005/assets/img/Employee services.svg"
                alt="Employee services"
              />
            </div>
          </div>
        </Link>
        <nav className="headerNavigation">
          <ul className="navigation">
            <li className="navigationList">
              <Link to="/">Address Book</Link>
            </li>
            <li className="navigationList">
              <a href="#">Leave Requests</a>
            </li>
            <li className="navigationList">
              <a href="#">Desk booking</a>
              <img
                src="http://localhost:3005/assets/img/Drop Arrow.svg"
                alt="Employee services"
              />
            </li>
            {user.role === "admin" && (
              <li className="navigationList">
                <Link to="/settings">Settings</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="sideItems">
          <div className="headerItem">
            <img
              src="http://localhost:3005/assets/img/Union.svg"
              alt="message icon"
              className="itemImg"
            />
          </div>
          <div className="header__side-items_personal-info">
            <img
              className="personal-mini-avatar"
              alt="personal avatar"
              src={`http://localhost:3005/assets/img/${user.avatar}`}
            />
            <p className="personal-name">
              {`${user.firstName} ${user.lastName}`}
            </p>
          </div>
          <div className="headerItem log-out">
            <Link to="/login">
              <img
                src="http://localhost:3005/assets/img/Vector.svg"
                alt="on off button"
                className="itemImg"
                onClick={handleLogOutClick}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
