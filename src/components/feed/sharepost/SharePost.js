import React from "react";
import { ProfilePlaceholder } from "../../../assets";
import "./sharepost.css";

const SharePost = () => {
  return (
    <div className="sharePost">
      <div className="sharePostWrapper">
        <div className="sharePostTop">
          <img className="shareProfileImg" src={ProfilePlaceholder} alt="" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="sharePostBottom">
          <button className="sharePostButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
