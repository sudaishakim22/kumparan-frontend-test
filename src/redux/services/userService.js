import axios from "axios";

export const userServices = {
  getAllUsers,
  getUserById,
};

async function getAllUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function getUserById(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
