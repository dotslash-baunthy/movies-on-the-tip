// Service file to list movies in theatres

import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getMoviesInTheatres = async () => {
    const response = await axios.get(`${baseUrl}/movies-in-theatres`);
    return response.data;
};

export { getMoviesInTheatres };
