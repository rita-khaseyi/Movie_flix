import React, { useState, useEffect } from "react";
import "./style.css";
import { searchMovies } from "../../utils/utilities";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMoviesAsync = async () => {
      const results = await searchMovies(searchValue);
      setSearchResults(results.results);
    };

    // We debounce the API call to avoid making too many requests in a short time.
    const delayDebounceFn = setTimeout(searchMoviesAsync, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="Navbar">
      <nav className="nav">
        <div>
          <h1 className="logo">
            M<span>oo</span>vie
          </h1>
        </div>
        <div className="search">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
          <button>Search</button>
        </div>
        <div className="links">
        <li>Home</li>
          <li>About</li>
          <li>My list</li>
          <button>Sign in</button>
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
