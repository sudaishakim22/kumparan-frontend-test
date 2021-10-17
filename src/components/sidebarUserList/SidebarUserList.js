import React from "react";
import "./sidebarUserList.css";
import { ProfilePlaceholder } from "../../assets";
import { Link } from "react-router-dom";

const SidebarUserList = ({ user }) => {
  return (
    <li className="sidebarUserList">
      <Link
        to={`/${user.id}`}
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img className="sidebarUserImg" src={ProfilePlaceholder} alt="" />
        <span className="sidebarUsername">{user.name}</span>
      </Link>
    </li>
  );
};

export default SidebarUserList;
