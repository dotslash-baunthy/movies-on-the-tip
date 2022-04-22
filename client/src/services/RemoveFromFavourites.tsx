import axios from "axios";
import React from "react";
import { MyToasts } from "../components/common/MyToasts";
import IMovie from "../models/IMovie";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const RemoveFromFavourites = async (movie: IMovie) => {
    let message = "";
    let error = false;
    await axios.get(`${baseUrl}/favourite/${movie.id}`)
        .then(async () => {
            const response = await axios.delete(`${baseUrl}/favourite/${movie.id}`);
            if (response.status === 204) {
                message = "Movie removed from favourites";
                error = false;
            }
            else {
                message = "Failed to remove from favourites";
                error = true;
            }
        })
        .catch(async () => {
            message = "Favourite does not exist";
            error = true;
        })

    return (
        <MyToasts message={message} error={false} />
    )
};

export { RemoveFromFavourites };