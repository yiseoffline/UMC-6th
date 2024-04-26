import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="menuLogo" to={"/"}>
        UMC Movie
      </Link>
      <div className="menuContainer">
        <Link className="menu" to={"/"}>
          회원가입
        </Link>
        <Link className="menu" to={"/popular"}>
          Popular
        </Link>
        <Link className="menu" to={"/nowPlaying"}>
          Now Playing
        </Link>
        <Link className="menu" to={"/topRated"}>
          Top Rated
        </Link>
        <Link className="menu" to={"/upcoming"}>
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
