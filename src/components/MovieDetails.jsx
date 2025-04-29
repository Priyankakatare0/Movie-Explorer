import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = 'cf1dab780db33f1ec4dc4b1cdf0127ca';

    const fetchMovies = async () => {
        if (!id) return;

        const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        try {
            const response = await axios.get(API_URL);
            setDetail(response.data);
            setError(null);
        } catch {
            setError('Invalid Movie ID or Data Not Found');
            setDetail(null);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [id]);

    return (
        <div className='min-h-screen bg-gray-900 text-white py-20 px-4'>
            {error && (
                <p className='text-center text-red-500'>{error}</p>
            )}
            {!detail && !error && (
                <p className='text-center text-xl'>Loading...</p>
            )}

            {detail && (
                <div className='max-w-6xl mx-auto'>
                    <div className='flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg p-8'>
                        {/* Movie Poster */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                            alt={detail.title}
                            className='w-full md:w-64 rounded-lg mb-4 md:mb-0 mx-auto'
                        />
                        {/* Movie Details */}
                        <div className='md:ml-6 flex flex-col justify-center'>
                            <h2 className='text-4xl font-bold mt-2'>{detail.title}</h2>
                            <p className='text-lg italic text-yellow-500 mb-4'>{detail.tagline}</p>
                            <p className='text-gray-300 mb-6'>{detail.overview}</p>
                            <a
                                href={`https://www.youtube.com/results?search_query=${detail.title} trailer`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-m rounded-md shadow-sm transition duration-300 ease-in-out hover:scale-105 w-fit'
                            >
                                Movie Link
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
