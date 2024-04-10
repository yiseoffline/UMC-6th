import React, { useState, useEffect } from "react";
import { movieApi } from "../movieApi.js"; // movieApi.js 파일에서 movieApi 객체를 가져옴

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieApi.results); // movieApi 객체에서 results 배열을 직접 사용하여 영화 데이터 설정
  }, []);

  console.log(movies);

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
          style={{
            backgroundColor: "#383b66",
            margin: "10px",
            padding: "10px",
            width: "200px",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "auto" }}
          />
          <h2 style={{ color: "white" }}>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Movie;
