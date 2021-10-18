import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../constants/postType";

const initialState = {
  postList: [],
  deleteResult: null,
  addResult: null,
  updateResult: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postList: action.data,
      };
    case ADD_POST:
      return {
        ...state,
        addResult: action.data,
      };
    case DELETE_POST:
      return {
        ...state,
        deleteResult: action.data,
      };
    default:
      return state;
  }
};

export default postReducer;
