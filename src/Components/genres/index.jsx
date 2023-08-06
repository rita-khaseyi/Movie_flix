import React, { useEffect, useState } from "react";
import { getGenre } from "../../utils/utilities";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";


const Getcategory = ({ selectedCategory, handleCategoryChange }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 10; 

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await getGenre();
        setMovies(genreData.genres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching genres:", error.message);
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  const handleNext = () => {
    const nextIndex = startIndex + itemsToShow;
    setStartIndex(nextIndex >= movies.length ? 0 : nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = startIndex - itemsToShow;
    setStartIndex(prevIndex < 0 ? movies.length - itemsToShow : prevIndex);
  };

  if (loading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  return (
    <div className="category-buttons">
      <div className="arrow left-arrow" onClick={handlePrev}>
        <IoIosArrowBack />
      </div>
      {movies
        .slice(startIndex, startIndex + itemsToShow)
        .map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id, category.name)}
            className={selectedCategory === category.id ? "active" : ""}
          >
            {category.name}
          </button>
        ))}
      <div className="arrow right-arrow" onClick={handleNext}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Getcategory;
