import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Alert, Col, Row } from "react-bootstrap";

import LoadingIndicator from "../common/LoadingIndicator";

import IMovie from "../../models/IMovie";
import { LoadingStatus } from "../../models/Utils";
import { getUpcomingMovieById } from "../../services/SingleMovie";

const TopRatedMoviesDetails = (props: RouteComponentProps<{ id: string }>) => {
    const [status, setStatus] = useState<LoadingStatus>("LOADING")
    const [movie, setMovie] = useState<IMovie | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getUpcomingMovieById(props.match.params.id)
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

                    <div className="d-flex">
                        <img src={`${posterurl}`}
                            alt={title}
                        />
                        <div>
                            <h1>{title} ({year})</h1>
                            <Row>
                                <Col xs={12} className="my-2">
                                    Imdb Rating {imdbRating}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Content Rating {contentRating}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Average Rating {averageRating}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Duration {duration}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Genres {genres}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Actors {actors}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Release date {releaseDate}
                                </Col>
                                <Col xs={12} className="my-2">
                                    Story line {storyline}
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

export default TopRatedMoviesDetails;