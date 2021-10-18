import React from "react";
import "./sidebarUserList.css";
import { ProfilePlaceholder } from "../../assets";
import { NavLink } from "react-router-dom";

const SidebarUserList = ({ user }) => {
  return (
    <li className="sidebarUserList">
      <NavLink
        to={`/${user.id}`}
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
        activeStyle={{
          fontWeight: "bold",
          color: "#0a1a29",
        }}
      >
        <img className="sidebarUserImg" src={ProfilePlaceholder} alt="" />
        <span className="sidebarUsername">{user.name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarUserList;
