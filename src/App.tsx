import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import { RootState, AppDispatch } from "./redux/store";

import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/sortDropdown";
import RatingFilter from "./components/RatingFilter";
import GenreFilter from "./components/GenreFilter";
import MovieTrailer from "./components/VideoTrailer";
import MovieCard2 from "./components/MovieCard2";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import "./Styles.css";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, status } = useSelector((state: RootState) => state.movies);

  const [ratingFilter, setRatingFilter] = useState<string>("");
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = movies
    .filter((movie) => {
      if (ratingFilter && !movie.description.toLowerCase().includes(ratingFilter.toLowerCase())) {
        return false;
      }
      if (
        genreFilter.length > 0 &&
        !genreFilter.some((genre) => movie.description.toLowerCase().includes(genre.toLowerCase()))
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "Popularity") {
        return b.id - a.id;
      }
      if (sortOption === "Release-year") {
        return b.id - a.id;
      }
      return 0;
    });

  return (
    <div className="container">
      <h1>Movie Explorer</h1>
      <ThemeToggle />

      <div className="filters">
        <SearchBar />
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        <RatingFilter rating={ratingFilter} setRatingFilter={setRatingFilter} />
        <GenreFilter selectedGenres={genreFilter} setGenreFilter={setGenreFilter} />
      </div>

      <MovieTrailer />

      {status === "loading" ? (
        <p>Loading Movies...</p>
      ) : (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
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
