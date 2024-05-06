import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [login, setLogin] = useState(false);

  const handleClick = (menu) => {
    setActiveMenu(menu);
    setLogin(!login);
  };

  return (
    <div className="navbar">
      <Link className="menuLogo" to={"/"}>
        UMC Movie
      </Link>
      <div className="menuContainer">
        <Link
          style={{ color: "yellow" }}
          onClick={() => handleClick("회원가입")}
          className="menu"
          to={"/login"}
        >
          회원가입
        </Link>
        <Link
          onClick={() => handleClick("Popular")}
          style={{ color: activeMenu === "Popular" ? "yellow" : "white" }}
          className="menu"
          to={"/popular"}
        >
          Popular
        </Link>
        <Link
          onClick={() => handleClick("Now Playing")}
          style={{ color: activeMenu === "Now Playing" ? "yellow" : "white" }}
          className="menu"
          to={"/nowPlaying"}
        >
          Now Playing
        </Link>
        <Link
          onClick={() => handleClick("Top Rated")}
          style={{ color: activeMenu === "Top Rated" ? "yellow" : "white" }}
          className="menu"
          to={"/topRated"}
        >
          Top Rated
        </Link>
        <Link
          onClick={() => handleClick("Upcoming")}
          style={{ color: activeMenu === "Upcoming" ? "yellow" : "white" }}
          className="menu"
          to={"/upcoming"}
        >
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
