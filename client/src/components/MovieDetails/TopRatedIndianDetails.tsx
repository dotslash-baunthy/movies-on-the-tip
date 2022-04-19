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
                    <Row>
                        <Col xs={12} className="my-2">
                            <h1>{title} ({year})</h1>
                        </Col>
                        <Col xs={12} lg={4} className="my-2">
                            <img src={`${posterurl}`}
                                alt={title}
                                className="w-100"
                            />
                        </Col>
                    </Row>
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