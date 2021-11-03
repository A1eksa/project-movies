import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <section className='movie-container'>
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`}>
          <div className='movie-card'>
            <img
              className='movie-img'
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className='overlay'>
              <div className='overlay-text'>
                <h1 key={movies.id}>{movie.original_title}</h1>
                <h2>Released:{movie.release_date}</h2>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MovieList;