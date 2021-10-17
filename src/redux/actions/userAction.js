import { GET_ALL_USERS } from "../constants/userType";

import { userServices } from "../services/userService";

export const getAllUsers = () => {
  return async (dispatch) => {
    const response = await userServices.getAllUsers();
    dispatch({ type: GET_ALL_USERS, data: response });
  };
};
