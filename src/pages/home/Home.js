import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import { postServices } from "../../redux/services/postService";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await postServices.getPosts();
      console.log(res);
    };
    getPosts();
  });

  return (
    <>
      <Header />
      <div className="homeContainer">
        <Feed />
      </div>
    </>
  );
};

export default Home;
