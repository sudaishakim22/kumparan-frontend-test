import React from "react";
import "./header.css";
import { Search } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <span className="logo">Social Media App</span>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for post"
            className="searchInput"
          />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerLinks">
          <span className="headerLink">Homepage</span>
          <span className="headerLink">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
