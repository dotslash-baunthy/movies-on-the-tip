// Service file to list top rated Indian movies

import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getTopRatedIndian = async () => {
    const response = await axios.get(`${baseUrl}/top-rated-india`);
    return response.data;
};

export { getTopRatedIndian };
