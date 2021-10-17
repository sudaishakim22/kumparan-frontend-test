import { GET_ALL_USERS } from "../constants/userType";

const initialState = {
  usersList: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        usersList: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
