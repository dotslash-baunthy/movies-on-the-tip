import React from 'react';
import Navigation from './globals/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route } from 'react-router-dom';
import MoviesComing from './MoviesList/MoviesComing';
import TopRatedIndian from './MoviesList/TopRatedIndian';
import Home from './globals/Home';
// import MovieDetails from './MoviesList/MovieDetails';
import MoviesInTheaters from './MoviesList/MoviesInTheatres';
import Favourites from './MoviesList/Favourites';
import TopRatedMovies from './MoviesList/TopRatedMovies';
import MoviesInTheatresDetails from './MovieDetails/MoviesInTheatresDetails';
import MoviesComingDetails from './MovieDetails/MoviesComingDetails';
import TopRatedIndianDetails from './MovieDetails/TopRatedIndianDetails';
import TopRatedMoviesDetails from './MovieDetails/TopRatedMoviesDetails';
import FavouritesDetails from './MovieDetails/FavouritesDetails';

export default function App() {
    return (
        <>
            <Navigation />
            <Route exact path={"/"}>
                <Redirect to="/movies-in-theatres" />
            </Route>
            <Route exact path={"/movies-in-theatres"} component={MoviesInTheaters} />
            <Route exact path={"/movies-in-theatres/:id"} component={MoviesInTheatresDetails} />

            <Route exact path={"/movies-coming"} component={MoviesComing} />
            <Route exact path={"/movies-coming/:id"} component={MoviesComingDetails} />

            <Route exact path={"/top-rated-india"} component={TopRatedIndian} />
            <Route exact path={"/top-rated-india/:id"} component={TopRatedIndianDetails} />

            <Route exact path={"/top-rated-movies"} component={TopRatedMovies} />
            <Route exact path={"/top-rated-movies/:id"} component={TopRatedMoviesDetails} />

            <Route exact path={"/favourite"} component={Favourites} />
            <Route exact path={"/favourite/:id"} component={FavouritesDetails} />
        </>
    )
}
