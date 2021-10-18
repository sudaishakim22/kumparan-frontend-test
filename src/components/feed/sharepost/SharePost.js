import React, { useState } from "react";
import { ProfilePlaceholder } from "../../../assets";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../../redux/actions/postAction";

import "./sharepost.css";

const SharePost = ({ handleGetNewArray }) => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleSharePost = async () => {
    let newId = Math.floor(Math.random() * 100);
    let params = {
      title: title,
      body: body,
      userId: 1,
      id: newId,
    };
    const res = await dispatch(addPost(params));
    if (res.status === 201) {
      const newArray = postState.postList.data;
      newArray.push(params);
      handleGetNewArray(newArray);
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  return (
    <div className="sharePost">
      <div className="sharePostWrapper">
        <div className="sharePostTop">
          <img className="shareProfileImg" src={ProfilePlaceholder} alt="" />
          <input
            placeholder="input title post"
            className="shareInput"
            onChange={handleOnChangeTitle}
          />
          <input
            placeholder="input body post"
            className="shareInput"
            onChange={handleOnChangeBody}
          />
        </div>
        <hr className="shareHr" />
        <div className="sharePostBottom">
          <button className="sharePostButton" onClick={handleSharePost}>
            Share
          </button>
          {showAlert && <p style={{ color: "green" }}>Add Post Success</p>}
        </div>
      </div>
    </div>
  );
};

export default SharePost;
