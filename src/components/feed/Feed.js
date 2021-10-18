import React, { useEffect, useState } from "react";
import Post from "./post/Post";
import SharePost from "./sharepost/SharePost";
import Modal from "../modal/BasicModal";
import "./feed.css";
import { getPosts } from "../../redux/actions/postAction";
import { userServices } from "../../redux/services/userService";
import { deletePost } from "../../redux/actions/postAction";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

const Feed = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      if (params.id) {
        // get data post by params id
        const res = await dispatch(getPosts(params.id));
        if (res.data) {
          setPosts(res.data);
          setLoading(false);
        }
      } else {
        // get data post by id default = 1
        const res = await dispatch(getPosts(params.id));
        if (res.data) {
          setPosts(res.data);
          setLoading(false);
        }
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
    fetchPosts();
    getUserDetail();
  }, [params.id]);

  const handleOnDeletePost = async (id, type) => {
    const res = await dispatch(deletePost(id));
    if (res.status === 200) {
      setModal(true);
      setType(type);
    } else {
      setModal(false);
    }
  };

  const handleGetNewArray = (newArr) => {
    setPosts((prevState) => [...prevState, newArr]);
  };

  const handleCloseModal = (modal) => {
    setModal(modal);
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h3 style={{ fontSize: "20px", fontWeight: 300, marginBottom: "20px" }}>
          Welcome Leanne Graham
        </h3>
        <SharePost handleGetNewArray={handleGetNewArray} />
        {loading ? (
          <p>loading...</p>
        ) : (
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                user={user}
                onDeletePost={handleOnDeletePost}
              />
            );
          })
        )}
        <Modal modal={modal} handleCloseModal={handleCloseModal} type={type} />
      </div>
    </div>
  );
};

export default Feed;
