import React from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "./movieApi.js";
import "./Movie.css";

const Movie = () => {
  const { movieId } = useParams();
  const movie = movieApi.results.find(
    (movie) => movie.id.toString() === movieId
  );

  const changeToStar = (voteAverage) => {
    const starsCount = Math.floor(voteAverage);
    return "⭐️".repeat(starsCount);
  };

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <div style={{ marginLeft: 20 }} className="contents">
        <h3 className="title">{movie.original_title}</h3>
        <div style={{ marginBottom: 20 }}>
          평점 : {changeToStar(movie.vote_average)}
        </div>
        <div style={{ marginBottom: 20 }}>개봉일 {movie.release_date}</div>
        <div style={{ marginBottom: 20 }}>줄거리</div>
        <div style={{ marginBottom: 10 }}>{movie.overview}</div>
      </div>
    </div>
  );
};

export default Movie;
