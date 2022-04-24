// Service file to list upcoming movies

import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getUpcomingMovies = async () => {
  const response = await axios.get(`${baseUrl}/movies-coming`);
  return response.data;
};

export { getUpcomingMovies };
