import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./post.css";
import { ProfilePlaceholder } from "../../../assets";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  getCommentsById,
  deleteComments,
  addComment,
  updateComment,
} from "../../../redux/actions/commentsAction";
import Modal from "../../modal/BasicModal";

const Post = ({ post, user, onDeletePost }) => {
  const [showComments, setShowComments] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [comments, setComments] = useState(null);
  const [singleComment, setSingleComment] = useState("");
  const [idComment, setIdComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");
  const [btnType, setBtnType] = useState("");
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComments = async () => {
      const result = await dispatch(getCommentsById(post.id));
      setComments(result.data);
      setLoading(false);
    };
    fetchComments();
  }, [post.id]);

  let postUserName = null;

  if (user) {
    postUserName = <span className="postUsername">{user.name}</span>;
  } else {
    postUserName = <span className="postUsername">loading...</span>;
  }

  const handleShowComments = () => {
    setShowComments((prevState) => !prevState);
  };

  const handleDeleteComments = async (id, type) => {
    const result = await dispatch(deleteComments(id));
    if (result.status === 200) {
      const newArray = comments.filter((c) => c.id !== id);
      setComments(newArray);
      setModal(true);
      setType(type);
    } else {
      setModal(false);
    }
  };

  const handleSubmitComment = async () => {
    let params = {
      postId: post.id,
      name: "test",
      email: "email@test.com",
      body: singleComment,
    };

    const result = await dispatch(addComment(params));

    if (result) {
      setModal(true);
      setComments((prevState) => [...prevState, params]);
      setSingleComment("");
      setType("Success Add Comment");
    } else {
      setModal(false);
    }
  };

  const handleUpdateComment = async () => {
    let params = {
      postId: post.id,
      name: "test",
      email: "email@test.com",
      body: singleComment,
    };

    const result = await dispatch(updateComment(params, idComment));
    if (result) {
      setModal(true);

      const index = comments.findIndex((c) => c.id == idComment);
      setComments((prevState) => [
        ...prevState,
        (prevState[index].body = params.body),
      ]);

      setSingleComment("");
      setType("Success Update Comment");
    } else {
      setModal(false);
    }
  };

  const handleEditComment = (id, btnType) => {
    const getDetailComment = comments.find((c) => c.id == id);
    setShowForm(true);
    setBtnType(btnType);
    setIdComment(id);
    setSingleComment(getDetailComment.body);
  };

  const handleCloseModal = (modal) => {
    setModal(modal);
  };

  const handleAddFormComment = (btnType) => {
    setBtnType(btnType);
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={ProfilePlaceholder} alt="" />
            {postUserName}
          </div>
          <div
            className="postTopRight"
            onClick={() => onDeletePost(post.id, "Success Delete Post")}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ClearIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="postCenter">
          <span className="postTitle">{post.title}</span>
          <p className="postBody">{post.body}</p>
        </div>
        <div className="postBottom">
          <div className="postComment">
            <span className="postCommentText" onClick={handleShowComments}>
              {loading ? <p>loading...</p> : comments.length + " Comments"}
            </span>
            <span
              style={{
                color: "green",
                fontSize: "15px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleAddFormComment("add")}
            >
              add comments
            </span>
            {showForm && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <TextField
                  value={singleComment}
                  id="standard-basic"
                  label="Comment"
                  variant="standard"
                  onChange={(e) => setSingleComment(e.target.value)}
                />
                <Button
                  variant="text"
                  onClick={
                    btnType == "add" ? handleSubmitComment : handleUpdateComment
                  }
                >
                  {btnType == "add" ? " Submit Comments" : "Update Comment"}
                </Button>
              </div>
            )}
            {showComments &&
              comments.map((c) => {
                return (
                  <div key={c.id} className="postCommentsDetail">
                    <div className="postCommentsDetailName">
                      <img
                        className="postProfileImg"
                        src={ProfilePlaceholder}
                        alt=""
                      />
                      <span className="postUsername">{c.name}</span>
                    </div>
                    <div className="postCommentsDetailBody">
                      <p>{c.body}</p>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          fontWeight: 300,
                          marginTop: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleDeleteComments(c.id, "Success Delete Comment")
                        }
                      >
                        delete comments
                      </span>
                      <span
                        style={{
                          color: "grey",
                          fontSize: "12px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleEditComment(c.id, "edit")}
                      >
                        edit comments
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <Modal modal={modal} handleCloseModal={handleCloseModal} type={type} />
      </div>
    </div>
  );
};

export default Post;
