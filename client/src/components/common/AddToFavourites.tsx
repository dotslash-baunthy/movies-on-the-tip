import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMovie from "../../models/IMovie";
import { AddToFavourites } from "../../services/AddToFavourites";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

type Props = IMovie;

const Favourite = (movie: Props) => {

    function addToFavourites() {
        AddToFavourites(movie);
    }
    return (
        <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
            <button style={{ cursor: "pointer", all: "unset" }} onClick={addToFavourites}>Add to favourites</button>
        </div>
    )
}

export default Favourite;