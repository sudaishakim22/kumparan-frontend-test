import axios from "axios";
export const postServices = {
  getPosts,
  addPost,
  deletePost,
};

async function getPosts(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function addPost(params) {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        body: JSON.stringify({
          title: params.title,
          body: params.body,
          userId: params.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function deletePost(id) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
