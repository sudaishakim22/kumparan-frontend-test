import React, { useState, useEffect } from "react";
import "./sidebar.css";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import SidebarUserList from "../sidebarUserList/SidebarUserList";
import { Link } from "react-router-dom";

const Sidebar = ({ users }) => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <AllInboxIcon className="sidebarIcon" />
            <Link to="/1" style={{ textDecoration: "none", color: "black" }}>
              My Posts
            </Link>
          </li>
          <li className="sidebarListItem">
            <PhotoAlbumIcon className="sidebarIcon" />
            <span className="sidebarListItemText">My Albums</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <span style={{ fontSize: "20px" }}>User List</span>
        <ul className="sidebarUser">
          {users.map((u) => (
            <SidebarUserList key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
