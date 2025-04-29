import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:brightness-105">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/400'
              }
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-2">
              <h6 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h6>
              <h6 className="text-sm text-gray-500">Rating: {movie.vote_average}</h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
