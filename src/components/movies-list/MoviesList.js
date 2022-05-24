import React, { useEffect } from "react";
import MovieItem from "../UI/movie-item/MovieItem";
import LoadingSpinner from "../UI/loading-spinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../../store/allMoviesSlice";
import { Col, Container, Row } from "react-bootstrap";

const MoviesList = ({ active }) => {
  const dispatch = useDispatch();
  const { allMovies, isLoading, error } = useSelector(
    (state) => state.allMovies
  );

  useEffect(() => {
    dispatch(fetchAllMovies(active));
  }, [dispatch, active]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const MoviesList = allMovies?.results?.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      imageURL={movie.backdrop_path}
      title={movie.title}
      rate={movie.vote_average}
      reviewsNum={movie.vote_count}
    />
  ));
  return (
    <ul className="p-0 d-flex flex-wrap justify-content-center align-items-center">
      {MoviesList}
    </ul>
  );
};

export default MoviesList;
