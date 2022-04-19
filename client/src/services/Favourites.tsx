import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getFavourites = async () => {
    const response = await axios.get(`${baseUrl}/favourite`);
    return response.data;
};

export { getFavourites };
