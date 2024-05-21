import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import InfiniteScroll from "react-infinite-scroller";

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchNowPlayingMovies = async (page) => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=931f0d63863a888a213f36475d977afb&language=en-US&page=${page}`
    );

    const data = await response.json();
    setNowPlayingMovies((prevMovies) => [...prevMovies, ...data.results]);

    if (data.page >= data.total_pages) {
      setHasMore(false);
    }
    setLoading(false);
  };

  const loadMoreMovies = () => {
    fetchNowPlayingMovies(currentPage);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {loading && <Loading />}
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMoreMovies}
        hasMore={!loading && hasMore}
        loader={<Loading key={0} />}
      >
        <div id="Movie">
          {!loading &&
            nowPlayingMovies.map((movie) => (
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
      </InfiniteScroll>
    </div>
  );
};

export default NowPlaying;
