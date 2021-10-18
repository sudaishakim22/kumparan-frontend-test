import axios from "axios";

export const photoServices = {
  getPhotoById,
};

async function getPhotoById(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
