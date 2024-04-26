import React, { useState } from "react";
import { topRatedApi } from "./topRatedApi";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState(topRatedApi.results);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  return (
    <div id="Movie">
      {topRatedMovies.map((movie) => (
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

export default TopRated;
