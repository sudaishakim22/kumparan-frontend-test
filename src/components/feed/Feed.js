import React, { useEffect, useState } from "react";
import Post from "./post/Post";
import SharePost from "./sharepost/SharePost";
import "./feed.css";
import { postServices } from "../../redux/services/postService";
import { userServices } from "../../redux/services/userService";

import { useParams } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getPosts = async () => {
      if (params.id) {
        // get data post by params id
        const res = await postServices.getPosts(params.id);
        setPosts(res.data);
      } else {
        // get data post by id default = 1
        const res = await postServices.getPosts(1);
        setPosts(res.data);
      }
    };

    const getUserDetail = async () => {
      if (params.id) {
        // get data user by params id
        const res2 = await userServices.getUserById(params.id);
        setUser(res2.data);
      } else {
        // get user by id default = 1

        const res2 = await userServices.getUserById(1);
        setUser(res2.data);
      }
    };
    getPosts();
    getUserDetail();
  }, [params.id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h3 style={{ fontSize: "20px", fontWeight: 300, marginBottom: "20px" }}>
          Welcome Leanne Graham
        </h3>
        <SharePost />
        {posts.map((post) => {
          return <Post key={post.id} post={post} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
