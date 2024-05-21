import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [login, setLogin] = useState(false);

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    }
  }, []);

  return (
    <div className="navbar">
      <Link className="menuLogo" to="/">
        UMC Movie
      </Link>
      <div className="menuContainer">
        {login ? (
          <button
            style={{ color: "yellow", fontWeight: "bold" }}
            onClick={logout}
            className="menu"
          >
            로그아웃
          </button>
        ) : (
          <Link
            style={{ color: "yellow", fontWeight: "bold" }}
            onClick={() => handleClick("회원가입")}
            className="menu"
            to="/signup"
          >
            회원가입
          </Link>
        )}
        <Link
          onClick={() => handleClick("Popular")}
          style={{ color: activeMenu === "Popular" ? "yellow" : "white" }}
          className="menu"
          to="/popular"
        >
          Popular
        </Link>
        <Link
          onClick={() => handleClick("Now Playing")}
          style={{ color: activeMenu === "Now Playing" ? "yellow" : "white" }}
          className="menu"
          to="/nowPlaying"
        >
          Now Playing
        </Link>
        <Link
          onClick={() => handleClick("Top Rated")}
          style={{ color: activeMenu === "Top Rated" ? "yellow" : "white" }}
          className="menu"
          to="/topRated"
        >
          Top Rated
        </Link>
        <Link
          onClick={() => handleClick("Upcoming")}
          style={{ color: activeMenu === "Upcoming" ? "yellow" : "white" }}
          className="menu"
          to="/upcoming"
        >
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
