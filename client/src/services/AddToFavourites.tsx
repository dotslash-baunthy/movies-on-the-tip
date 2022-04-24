// Service file to add a movie to favourites
// This makes a post request to the running server

import axios from "axios";
import { MyToasts } from "../components/common/MyToasts";
import IMovie from "../models/IMovie";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const AddToFavourites = async (movie: IMovie) => {
    let message = "";
    let error = false;
    await axios.get(`${baseUrl}/favourite/${movie.id}`)
        .then(() => {
            message = "Favourite already exists";
            error = true;
        })
        .catch(async () => {
            const response = await axios.post(`${baseUrl}/favourite`, movie);
            if (response.status === 201) {
                message = "Movie added to favourites";
                error = false;
            }
            else {
                message = "Failed to add to favourites";
                error = true;
            }
        })

    return (
        <MyToasts message={message} error={error} />
    )
};

export { AddToFavourites };