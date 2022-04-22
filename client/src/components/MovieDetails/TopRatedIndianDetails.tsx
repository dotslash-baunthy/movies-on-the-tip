import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Alert, Col, Row } from "react-bootstrap";

import LoadingIndicator from "../common/LoadingIndicator";

import IMovie from "../../models/IMovie";
import { LoadingStatus } from "../../models/Utils";
import { getTopRatedIndianById } from "../../services/SingleMovie";

const TopRatedIndianDetails = (props: RouteComponentProps<{ id: string }>) => {
    const [status, setStatus] = useState<LoadingStatus>("LOADING")
    const [movie, setMovie] = useState<IMovie | null>(null)
    const [error, setError] = useState<Error | null>(null)

    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getTopRatedIndianById(+props.match.params.id)
                setMovie(data)
                setStatus("LOADED")
            }
            catch (errormsg: any) {
                setError(errormsg)
                setStatus("ERROR")
            }
        }

        fetchMovie();
    }, [props.match.params.id])

    let el

    switch (status) {
        case "LOADING":
            el = <LoadingIndicator size="large" message="Loading Movie. Please wait...." />;
            break;
        case "LOADED":
            const { id, title, year, genres, ratings, poster, contentRating, duration, releaseDate, averageRating, originalTitle, storyline, actors, imdbRating, posterurl } = movie as IMovie;

            el = (
                <>

                    <div className="d-flex m-2">
                        <img src={`${baseUrl}/images/${poster}`}
                            alt={title}
                        />
                        <div className="m-2">
                            <h1>{title} ({year})</h1>
                            <Row>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Imdb Rating - </span>{imdbRating}
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Content Rating - </span>{contentRating}
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Average Rating - </span>{averageRating}
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Duration - </span>{duration}
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Genres - </span>{
                                        genres.map(
                                            genre => (
                                                genre + ', '
                                            )
                                        )
                                    }
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Actors - </span>{
                                        actors.map(
                                            actor => (
                                                actor + ', '
                                            )
                                        )
                                    }
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Release date - </span> {releaseDate}
                                </Col>
                                <Col xs={12} className="my-2">
                                    <span style={{ fontWeight: "bold" }}>Story line - </span>{storyline}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>
            )
            break;

        case "ERROR":
            el = (
                <Alert variant="danger">
                    {error?.message}
                </Alert>
            )
            break;
    }

    return el;
}

export default TopRatedIndianDetails;