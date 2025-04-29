import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesList from '../components/MoviesList';

const Home = () => {
  const [movies, setMovie] = useState([]);
  const API_KEY = 'cf1dab780db33f1ec4dc4b1cdf0127ca';
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const fetchMovie = async () => {
    try {
      const response = await axios.get(API_URL);
      setMovie(response.data.results);
    } catch (error) {
      console.error('Error fetching movies', error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
<div className="bg-gray-900 text-white min-h-screen py-10 px-4">
<h1 className="text-4xl font-extrabold text-center mb-10 text-black-700 drop-shadow-lg">
        🎬 Trending Movies
      </h1>
      <div className="max-w-7xl mx-auto">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
