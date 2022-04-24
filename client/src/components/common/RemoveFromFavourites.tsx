// Add button to add to favourites
// Call removeFromFavourites function on click

import IMovie from "../../models/IMovie";
import { RemoveFromFavourites } from "../../services/RemoveFromFavourites";

type Props = IMovie;

const RemoveFromFavourite = (movie: Props) => {

    function removeFromFavourites() {
        RemoveFromFavourites(movie);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    return (
        <>
            <button style={{ color: "grey", all: "unset" }} onClick={removeFromFavourites}>Remove from favourites</button>
        </>
    )
}

export default RemoveFromFavourite;