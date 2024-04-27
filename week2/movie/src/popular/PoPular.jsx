import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";
import "./Popular.css";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=931f0d63863a888a213f36475d977afb&language=en-US&page=1"
      );

      const data = await response.json();
      setPopularMovies(data.results);
      setLoading(false);
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <div id="Movie">
        {!loading &&
          popularMovies.map((movie) => (
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
    </div>
  );
};

export default Popular;
