import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMovie from "../../models/IMovie";
import RemoveFromFavourite from "../common/RemoveFromFavourites";
import "./Card.css";

type Props = {
    movie: IMovie,
    uri: string
}

const FavouritesMovieListItem = ({ movie, uri }: Props) => {
    const { id, title, year, genres, ratings, poster, contentRating, duration, releaseDate, averageRating, originalTitle, storyline, actors, imdbRating, posterurl } = movie;
    return (
        <Card>
            <Link to={`${uri}${id}`} style={{ textDecoration: "none", color: "black" }}>
                <Card.Img variant="top" src={posterurl} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-start" >
                        {title}
                    </Card.Title>
                </Card.Body>
            </Link >
            <RemoveFromFavourite id={id} title={title} year={year} genres={genres} ratings={ratings} poster={poster} contentRating={contentRating} duration={duration} releaseDate={releaseDate} averageRating={averageRating} originalTitle={originalTitle} storyline={storyline} actors={actors} imdbRating={imdbRating} posterurl={posterurl} />
        </Card>
    )
}

export default FavouritesMovieListItem;