import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'https://via.placeholder.com/400x600?text=No+Image';

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    movie.title + ' trailer'
  )}`;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-72 m-4 hover:shadow-xl transition duration-300 transform hover:scale-105">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-96 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
        <p className="text-sm text-gray-600 mt-1">⭐ {movie.vote_average}</p>
      </Link>

      <a
        href={youtubeSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-blue-600 hover:underline text-sm"
      >
        🎬 Watch Trailer on YouTube
      </a>
    </div>
  );
};

export default MovieCard;
