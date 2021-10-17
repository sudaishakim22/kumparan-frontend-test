import React from "react";
import "./post.css";
import { ProfilePlaceholder } from "../../../assets";
import { MoreVert } from "@mui/icons-material";

const Post = ({ post, user }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={ProfilePlaceholder} alt="" />
            <span className="postUsername">test</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postTitle">{post.title}</span>
          <p className="postBody">{post.body}</p>
        </div>
        <div className="postBottom">
          <div className="postComment">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
