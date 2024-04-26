import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./navbar/Navbar";
import Main from "./main/Main";
import Login from "./login/Login";
import Movie from "./movie/Movie";
import Footer from "./footer/Footer";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASEURL || "/"}>
      <div>
        <Nav />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
