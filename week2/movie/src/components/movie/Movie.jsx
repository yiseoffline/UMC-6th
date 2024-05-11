import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "./movieApi.js";
import "../../pages/main/Main.jsx";
import "./Movie.css";

const Movie = (searchWord) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=931f0d63863a888a213f36475d977afb&include_adult=false&language=en-US&page=1&query=${searchWord}`
      );

      const data = await response.json();
      setMovie(data.results);
    };
    fetchMovie();
  }, []);

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
