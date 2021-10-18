import {
  GET_COMMENTS,
  ADD_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENTS,
} from "../constants/commentsType";

const initialState = {
  commentsList: [],
  deleteResult: null,
  addResult: null,
  updateResult: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        commentsList: action.data,
      };
    case ADD_COMMENTS:
      return {
        ...state,
        addResult: action.data,
      };
    case DELETE_COMMENTS:
      return {
        ...state,
        deleteResult: action.data,
      };
    case UPDATE_COMMENTS:
      return {
        ...state,
        updateResult: action.data,
      };
    default:
      return state;
  }
};

export default commentsReducer;
