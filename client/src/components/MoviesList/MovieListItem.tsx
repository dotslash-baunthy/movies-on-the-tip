import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMovie from "../../models/IMovie";
import "./Card.css";

type Props = {
    movie: IMovie,
    uri: string
}

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const MovieListItem = ({ movie, uri }: Props) => {
    const { id, title, year, genres, ratings, poster, contentRating, duration, releaseDate, averageRating, originalTitle, storyline, actors, imdbRating, posterurl } = movie;
    return (
        <Link to={`${uri}${id}`} style={{ textDecoration: "none", color: "black" }}>
            <Card>
                <Card.Img variant="top" src={posterurl} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-start" >
                        {title}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Link >
    )
}

export default MovieListItem;