import axios from "axios";

const baseUrl = "https://swapi.dev/api/films/";
const api = axios.create({ baseURL: baseUrl });

export const getFilms = async (): Promise<any> => {
  try {
    const response = await api.get(`${baseUrl}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching films`);
  }
};
