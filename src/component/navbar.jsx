import React from "react";
import user from "../assets/react.svg";

const Navbar = ({
  title = "Sample",
  searchValue = "",
  onChangeEvnt = () => {},
}) => {
  return (
    <div className="navbar-component">
      <span className="navbar-child-component text">{title}</span>
      <div className="navbar-child-component">
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={onChangeEvnt}
          placeholder="Search"
        />
      </div>
      <div className="navbar-child-component">
        <img src={user} />
      </div>
    </div>
  );
};

export default Navbar;
