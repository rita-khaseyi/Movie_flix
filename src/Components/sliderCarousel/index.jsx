

import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import { getCategories ,searchMovies} from "../../utils/utilities";
import ImageContainer from "../../atoms/imageContainer";


const MovieLists = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, ] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getCategories();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const searchMoviesAsync = async () => {
      if (searchValue) {
        const results = await searchMovies(searchValue);
        setSearchResults(results.results);
      } else {
        setSearchResults([]);
      }
    };

    // We debounce the search API call to avoid making too many requests in a short time.
    const delayDebounceFn = setTimeout(searchMoviesAsync, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  if (loading) {
    return <h1>Loading movies...</h1>;
  }

  const limit = 4;
  const limitedMovies = movies.slice(0, limit);

  const sliderSettings = {
    autoPlay: true, // Enable auto-scrolling
    interval: 3000, // Set the interval between slides (3000ms = 3 seconds)
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    stopOnHover: true,
    dynamicHeight: false,
    emulateTouch: true,
    swipeable: true,
  };

  return (
    <div className="movies-slider">
      {searchValue === "" ? ( // Conditionally render the slider based on the search input
        <Carousel {...sliderSettings}>
          {limitedMovies.map((item) => (
            <div key={item.id} className="movie-slide">
              <ImageContainer className="movie" props={item} useBackgroundImage={true} />
            </div>
          ))}
        </Carousel>
      ) : null}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <ImageContainer props={movie} useBackgroundImage={true} />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieLists;

