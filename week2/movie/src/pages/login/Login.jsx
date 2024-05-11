import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2>로그인 페이지</h2>
      <div className="container">
        <input placeholder="아이디" />
        <input placeholder="비밀번호" />
        <div className="loginBtn">로그인</div>
      </div>
    </div>
  );
};

export default Login;
