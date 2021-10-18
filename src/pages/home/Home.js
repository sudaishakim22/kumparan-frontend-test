import React from "react";

// from components
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";

// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import "./home.css";
import Albums from "../../components/albums/Albums";
import Photos from "../../components/photos/Photos";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/my-albums/:id">
              <Photos />
            </Route>
            <Route path="/my-albums">
              <Albums />
            </Route>
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
