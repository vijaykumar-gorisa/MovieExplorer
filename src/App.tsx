import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";

import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import RatingFilter from "./components/RatingFilter";
import GenreFilter from "./components/GenreFilter";
import MovieTrailer from "./components/VideoTrailer";
import MovieCard2 from "./components/MovieCard2";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import "./Styles.css";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Movie Explorer</h1>
      <ThemeToggle />

      <div className="filters">
        <SearchBar />
        <SortDropdown />
        <RatingFilter />
        <GenreFilter />
      </div>

      <MovieTrailer />

      {status === "loading" ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie: {
            id: number;
            title: string;
            image: string;
            description: string;
          }) => (
            <MovieCard2
              key={movie.id}
              title={movie.title}
              image={movie.image}
              desc={movie.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
