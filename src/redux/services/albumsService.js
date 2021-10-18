import axios from "axios";

export const albumsServices = {
  getAlbums,
};

async function getAlbums() {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=1`
    );
    return response;
  } catch (error) {
    return error;
  }
}
