// Service file to list all top rated movies

import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getTopRated = async () => {
    const response = await axios.get(`${baseUrl}/top-rated-movies`);
    return response.data;
};

export { getTopRated };
