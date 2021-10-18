import axios from "axios";

export const commentsServices = {
  getCommentsById,
  deleteComments,
  addComment,
  updateComment,
};

async function getCommentsById(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function addComment(params) {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      {
        body: JSON.stringify({
          postId: params.postId,
          name: params.name,
          email: params.email,
          body: params.body,
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

async function deleteComments(id) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

async function updateComment(params, id) {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        body: JSON.stringify({
          postId: params.postId,
          name: params.name,
          email: params.email,
          body: params.body,
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
