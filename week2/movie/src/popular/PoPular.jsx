import React, { useState } from "react";
import { popularApi } from "./popularApi";
import "./Popular.css";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState(popularApi.results);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  return (
    <div id="Movie">
      {popularMovies.map((movie) => (
        <div
          key={movie.id}
          onMouseEnter={() => setHoveredMovieId(movie.id)}
          onMouseLeave={() => setHoveredMovieId(null)}
          id="imagebox"
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            style={{
              width: "100%",
              height: "auto",
              transition: "opacity 0.3s ease",
              opacity: hoveredMovieId === movie.id ? 0.5 : 1,
            }}
          />
          {hoveredMovieId === movie.id && (
            <div id="hover">
              {movie.original_title}
              <br />
              <br />
              <br />
              {movie.overview}
            </div>
          )}
          <div id="title">
            <h4>{movie.title}</h4>
            <p style={{ paddingLeft: 20, paddingTop: 10 }}>
              ⭐️{movie.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
