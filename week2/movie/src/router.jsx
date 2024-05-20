import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import SignUp from "./pages/singUp/SignUp";
import Movie from "./components/movie/Movie";
import Footer from "./components/footer/Footer";
import Popular from "./pages/\bpopular/Popular";
import NowPlaying from "./pages/nowPlaying/nowPlaying";
import TopRated from "./pages/topRated/topRated";
import UpComing from "./pages/upcoming/upComing";
import NotFound from "./components/notFound/notFound";
import Login from "./pages/login/Login";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASEURL || "/"}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowPlaying" element={<NowPlaying />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
