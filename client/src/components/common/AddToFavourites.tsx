import IMovie from "../../models/IMovie";
import { AddToFavourites } from "../../services/AddToFavourites";

type Props = IMovie;

const Favourite = (movie: Props) => {

    function addToFavourites() {
        AddToFavourites(movie);
    }
    return (
        <>
            <button onClick={addToFavourites}>Add to favourites</button>
        </>
    )
}

export default Favourite;