import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <>
      <h2 className="greeting">환영합니다</h2>
      <div className="find">
        <h1>🎥 Find your movies !</h1>
        <div className="searchBox">
          <div className="box"></div>
          <div className="search">🔍</div>
        </div>
      </div>
    </>
  );
};

export default Main;
