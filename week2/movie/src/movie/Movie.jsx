import React, { useState } from "react";
import { movieApi } from "../movieApi.js";

const Movie = () => {
  const [movies, setMovies] = useState(movieApi.results);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  return (
    <div
      id="Movie"
      style={{
        backgroundColor: "#232548",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          onMouseEnter={() => setHoveredMovieId(movie.id)}
          onMouseLeave={() => setHoveredMovieId(null)}
          style={{
            backgroundColor: "#383b66",
            margin: "10px",
            padding: "10px",
            width: "200px",
            position: "relative",
          }}
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
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "10px",
                fontSize: "14px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {movie.original_title}
              <br />
              <br />
              <br />
              {movie.overview}
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h4>{movie.title}</h4>
            <p style={{ paddingLeft: 20, paddingTop: 10 }}>
              {movie.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
