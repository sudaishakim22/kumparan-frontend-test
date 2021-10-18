import {
  GET_COMMENTS,
  DELETE_COMMENTS,
  ADD_COMMENTS,
  UPDATE_COMMENTS,
} from "../constants/commentsType";

import { commentsServices } from "../services/commentsService";

export const getCommentsById = (id) => {
  return async (dispatch) => {
    const response = await commentsServices.getCommentsById(id);
    dispatch({ type: GET_COMMENTS, data: response });
    return response;
  };
};

export const addComment = (params) => {
  return async (dispatch) => {
    const response = await commentsServices.addComment(params);
    dispatch({ type: ADD_COMMENTS, data: response });
    return response;
  };
};

export const deleteComments = (id) => {
  return async (dispatch) => {
    const response = await commentsServices.deleteComments(id);
    dispatch({ type: DELETE_COMMENTS, data: response });
    return response;
  };
};

export const updateComment = (params, id) => {
  return async (dispatch) => {
    const response = await commentsServices.updateComment(params, id);
    dispatch({ type: UPDATE_COMMENTS, data: response });
    return response;
  };
};
