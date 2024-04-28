import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./navbar/Navbar";
import Main from "./main/Main";
import Login from "./login/Login";
import Movie from "./movie/Movie";
import Footer from "./footer/Footer";
import Popular from "./popular/PoPular";
import NowPlaying from "./nowPlaying/nowPlaying";
import TopRated from "./topRated/topRated";
import UpComing from "./upcoming/upComing";
import NotFound from "./notFound/notFound";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASEURL || "/"}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowPlaying" element={<NowPlaying />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
