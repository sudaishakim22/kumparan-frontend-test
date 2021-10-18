import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./sidebar.css";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import SidebarUserList from "../sidebarUserList/SidebarUserList";
import { Link, NavLink } from "react-router-dom";

// from services and action
import { getAllUsers } from "../../redux/actions/userAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await dispatch(getAllUsers());
      if (result.data) {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

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
            <NavLink
              to="/my-albums"
              style={{ textDecoration: "none", color: "black" }}
              activeStyle={{
                fontWeight: "bold",
                color: "#0a1a29",
              }}
            >
              My Albums
            </NavLink>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <span style={{ fontSize: "20px" }}>User List</span>
        <ul className="sidebarUser">
          {loading == true ? (
            <p>loading...</p>
          ) : (
            usersState.usersList.data.map((u) => (
              <SidebarUserList key={u.id} user={u} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
