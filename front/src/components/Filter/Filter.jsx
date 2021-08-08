import React, { useState } from "react";

import "./Filter.scss";

const Filter = (props) => {
  const [filterTnput, setFilterTnput] = useState("");

  const handleFilterInputChange = ({ target: { value } }) => {
    setFilterTnput(value.toLowerCase());
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const usersForFilter = props.users;
    const value = filterTnput;

    let filteredUsers = usersForFilter.filter(
      (u) =>
        u.firstName.toLowerCase().includes(value) ||
        u.lastName.toLowerCase().includes(value) ||
        u.firstNameNative.toLowerCase().includes(value) ||
        u.middleNameNative.toLowerCase().includes(value) ||
        u.lastNameNative.toLowerCase().includes(value)
    );

    props.onUsersFiltered(filteredUsers);
  };

  let formClassName;
  let modesClassName;
  let searchFieldClassName;
  let btnClassName;

  if (props.isOnMainPage) {
    formClassName = "basic-search-form";
    modesClassName = "search-modes";
    searchFieldClassName = "search-field";
    btnClassName = "search-submit";
  } else {
    formClassName = "in-roles-search";
    modesClassName = "hidden";
    searchFieldClassName = "search-field in-roles-search-field";
    btnClassName = "search-submit in-roles-search-submit";
  }

  return (
    <div className="search">
      <div className={modesClassName}>
        <div className="search-modes-active">BASIC SEARCH</div>
        <div className="search-modes-not-active">ADVANSED SEARCH</div>
      </div>
      <form className={formClassName} action="#" id="basic-search-form">
        <input
          onChange={handleFilterInputChange}
          type="text"
          placeholder="John Smith / Джон Смит"
          name="search-field"
          className={searchFieldClassName}
        />
        <button onClick={handleFilter} type="submit" className={btnClassName}>
          search
        </button>
      </form>
    </div>
  );
};

export default Filter;
