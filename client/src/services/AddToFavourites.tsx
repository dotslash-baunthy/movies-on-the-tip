import axios from "axios";
import MyToasts from "../components/common/MyToasts";
import IMovie from "../models/IMovie";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const AddToFavourites = async (movie: IMovie) => {
    let message = "";
    await axios.get(`${baseUrl}/favourite/${movie.id}`)
        .then(() => {
            message = "Favourite already exists";
        })
        .catch(async () => {
            const response = await axios.post(`${baseUrl}/favourite`, movie);
            if (response.status === 201) {
                message = "Ho gaya";
            }
            else {
                message = "Failed to add to favourites";
            }
        })
    return (
        <MyToasts message={message} error={false} />
    )
};

export { AddToFavourites };