import axios from "axios";
export const postServices = {
  getPosts,
};

async function getPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    return response;
  } catch (error) {
    return error;
  }
}
