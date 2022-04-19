import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getUpcomingMovieById = async (id: string | number) => {
    const response = await axios.get(`${baseUrl}/movies-coming/${id}`);
    return response.data;
};

const getMoviesInTheatresById = async (id: string | number) => {
    const response = await axios.get(`${baseUrl}/movies-in-theatres/${id}`);
    return response.data;
};

const getTopRatedIndianById = async (id: string | number) => {
    const response = await axios.get(`${baseUrl}/top-rated-india/${id}`);
    return response.data;
};

const getTopRatedById = async (id: string | number) => {
    const response = await axios.get(`${baseUrl}/top-rated-movies/${id}`);
    return response.data;
};

const getFavouriteById = async (id: string | number) => {
    const response = await axios.get(`${baseUrl}/favourite/${id}`);
    return response.data;
};

export { getUpcomingMovieById, getMoviesInTheatresById, getTopRatedIndianById, getTopRatedById, getFavouriteById };
