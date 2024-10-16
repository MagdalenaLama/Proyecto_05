import axios from "axios";

const API_KEY = "AIzaSyC_zkmRqF7UN-As3iaJZLMmyHO6cORhQb0";

export const fetchGoogleApi = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );
    if (response.status !== 200) {
      throw new Error("Ha ucurrido en error");
    } else {
      const info = response.data.items;
      return info;
    }
  } catch (error) {
    console.error(error.message);
  }
};
