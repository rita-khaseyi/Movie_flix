import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { FaPlay } from 'react-icons/fa';
import { getMovieDetails,fetchMovieVideos } from '../../utils/utilities';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);

      const videoData = await fetchMovieVideos(movieId);
      setVideos(videoData);
    })();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  if (!movie.poster_path || !movie.title || !movie.overview || !movie.release_date) {
    return <div>Missing movie details</div>;
  }

  return (
    <div className="movie-details">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>

      <div className="video-links">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            <FaPlay />
            Watch {video.type}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
