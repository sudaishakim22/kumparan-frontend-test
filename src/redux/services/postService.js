import axios from "axios";
export const postServices = {
  getPosts,
};

async function getPosts(id) {
  console.log(id);
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
