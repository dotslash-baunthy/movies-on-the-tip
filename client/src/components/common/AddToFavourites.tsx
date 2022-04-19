import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMovie from "../../models/IMovie";
import { AddToFavourites } from "../../services/AddToFavourites";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

type Props = IMovie;

const Favourite = (movie: Props) => {

    function addToFavourites() {
        AddToFavourites(movie);
        // <AddToFavourites id={""} title={""} year={""} genres={[]} ratings={[]} poster={""} contentRating={""} duration={""} releaseDate={""} averageRating={0} originalTitle={""} storyline={""} actors={[]} imdbRating={0} posterurl={""}/>
    }
    return (
        <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
            <button style={{ all: "unset" }} onClick={addToFavourites}>Add to favourites</button>
        </div>
    )
}

export default Favourite;