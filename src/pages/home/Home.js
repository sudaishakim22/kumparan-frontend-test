import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// from components
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";

// from services and action
import { userServices } from "../../redux/services/userService";
import { getAllUsers } from "../../redux/actions/userAction";

// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await userServices.getAllUsers();
      if (res) {
        const usersData = res.data.filter((user) => user.id !== 1);
        setUsers(usersData);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    fetchUser();
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <Header />
      <div className="homeContainer">
        <Router>
          <Sidebar users={loading ? [] : users} />
          <Switch>
            <Route path="/:id">
              <Feed />
            </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Home;
