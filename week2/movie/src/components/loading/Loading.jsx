import React from "react";
import { BeatLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <h3>로딩중 입니다..</h3>
      <BeatLoader color="#434498" size={20} />
    </div>
  );
};

export default Loading;
