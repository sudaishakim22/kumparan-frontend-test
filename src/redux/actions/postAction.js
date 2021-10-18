import { ADD_POST, DELETE_POST, GET_POSTS } from "../constants/postType";
import { postServices } from "../services/postService";

export const getPosts = (id) => {
  return async (dispatch) => {
    const response = await postServices.getPosts(id);
    dispatch({ type: GET_POSTS, data: response });
    return response;
  };
};

export const addPost = (params) => {
  return async (dispatch) => {
    const response = await postServices.addPost(params);
    dispatch({ type: ADD_POST, data: response });
    return response;
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const response = await postServices.deletePost(id);
    dispatch({ type: DELETE_POST, data: response });
    return response;
  };
};
