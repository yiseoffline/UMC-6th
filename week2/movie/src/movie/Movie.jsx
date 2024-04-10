import React, { useState, useEffect } from "react";
import { movieApi } from "../movieApi.js"; // movieApi.js 파일에서 movieApi 객체를 가져옴

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieApi.results); // movieApi 객체에서 results 배열을 직접 사용하여 영화 데이터 설정
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Movie;
