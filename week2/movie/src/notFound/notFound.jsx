import React from "react";
import "./notFound.css";

const notFound = () => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <div>예상치 못한 에러가 발생했습니다.</div>
      <div>Not Found</div>
      <h3>메인으로 이동하기</h3>
    </div>
  );
};

export default notFound;
