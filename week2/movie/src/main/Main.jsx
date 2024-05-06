import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchSearchMovie = async () => {
      if (searchWord.trim() === "") {
        setSearchMovie([]);
        return;
      }
      setIsSearching(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=931f0d63863a888a213f36475d977afb&include_adult=false&language=en-US&page=1&query=${searchWord}`
      );

      const data = await response.json();
      setSearchMovie(data.results);
      setIsSearching(false);
    };

    fetchSearchMovie();
  }, [searchWord]);

  return (
    <>
      <h2 className="greeting">환영합니다</h2>
      <div className="find">
        <h1>🎥 Find your movies !</h1>
        <div className="searchBox">
          <div className="box">
            <input
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="영화를 검색해보세요"
            />
          </div>
          <div className="search">🔍</div>
        </div>
        <div
          className="movieList"
          style={{ overflowY: "auto", maxHeight: "300px" }}
        >
          {isSearching && <div>Loading...</div>}
          {!isSearching && searchMovie.length === 0 && (
            <div>검색 결과가 없습니다.</div>
          )}
          {searchMovie.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
