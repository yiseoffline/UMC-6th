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
import Loading from "./loading/Loading";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASEURL || "/"}>
      <div>
        <Nav />
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowPlaying" element={<NowPlaying />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
