import React, { useState } from "react";
import { fetchMovies } from "../redux/movieSlice";
import { useAppDispatch } from "../hooks";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    
    dispatch(fetchMovies(query)); // Pass the query as expected
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍 Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
