// List all top rated Indian movies
// Server exposed /top-rated-india endpoint

import React, { Component } from 'react'
import { LoadingStatus } from '../../models/Utils';
import IMovie from '../../models/IMovie';
import LoadingIndicator from '../common/LoadingIndicator';
import { Alert, Col, Row } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import { getTopRatedIndian } from '../../services/TopRatedIndian';

type Props = {

}

type State = {
    status: LoadingStatus,
    movies?: IMovie[],
    error?: Error
}

class TopRatedIndian extends Component<Props, State> {
    state: State = {
        status: 'LOADING'
    }
    render() {
        let el;
        const { status, movies, error } = this.state;
        switch (status) {
            case 'LOADING':
                el = (
                    <LoadingIndicator size='large' message='Please wait while we fetch the list of movies' />
                );
                break;
            case 'ERROR':
                el = (
                    <Alert variant="danger">
                        {error?.message};
                    </Alert>
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} md={3} lg={6}>
                        {
                            movies?.map(
                                movie => (
                                    <Col key={movie.id} className="d-flex align-items-stretch m-3">
                                        <MovieListItem movie={movie} uri={'/top-rated-india/'} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );
                break;
            default:
                break;
        }
        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });
        try {
            const upcomingMovies = await getTopRatedIndian();
            this.setState({
                status: 'LOADED',
                movies: upcomingMovies
            });
        } catch (error) {
            this.setState({
                status: 'ERROR',
                error: error as Error
            });
        }
    }

}

export default TopRatedIndian;