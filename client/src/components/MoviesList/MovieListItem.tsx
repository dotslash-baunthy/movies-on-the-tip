// Dictates how to show a single favourite
// This differs from FavouriteMovieListItem in the sense that it includes the ability to 'add a movie to Favourites'

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMovie from "../../models/IMovie";
import Favourite from "../common/AddToFavourites";
import "./Card.css";

type Props = {
    movie: IMovie,
    uri: string
}

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const MovieListItem = ({ movie, uri }: Props) => {
    const { id, title, year, genres, ratings, poster, contentRating, duration, releaseDate, averageRating, originalTitle, storyline, actors, imdbRating, posterurl } = movie;
    return (
        <Card>
            <Link to={`${uri}${id}`} style={{ cursor: "default", textDecoration: "none", color: "black" }}>
                <Card.Img variant="top" src={`${baseUrl}/images/${poster}`} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-start" >
                        {title}
                    </Card.Title>
                </Card.Body>
            </Link >
            <Favourite id={id} title={title} year={year} genres={genres} ratings={ratings} poster={poster} contentRating={contentRating} duration={duration} releaseDate={releaseDate} averageRating={averageRating} originalTitle={originalTitle} storyline={storyline} actors={actors} imdbRating={imdbRating} posterurl={posterurl} />
        </Card>
    )
}

export default MovieListItem;