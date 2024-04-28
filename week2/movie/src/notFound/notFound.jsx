import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const notFound = () => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <div style={{ marginBottom: 15 }}>예상치 못한 에러가 발생했습니다.</div>
      <div
        style={{ fontStyle: "italic", fontWeight: "bold", marginBottom: 15 }}
      >
        Not Found
      </div>
      <Link className="link" to={"/"}>
        메인으로 이동하기
      </Link>
    </div>
  );
};

export default notFound;
