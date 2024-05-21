import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const passwordExp =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwErrorMsg, setPwErrorMsg] = useState("");

  const passwordCheck = (password) => {
    if (password.length < 4) {
      setPwErrorMsg("비밀번호는 최소 4자리 이상이어야 합니다.");
    } else if (password.length > 12) {
      setPwErrorMsg("비밀번호는 최대 12자리까지 가능합니다.");
    } else if (!passwordExp.test(password)) {
      setPwErrorMsg(
        "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다."
      );
    } else {
      setPwErrorMsg("");
    }
  };

  const logIn = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username: id,
        password: pw,
      });
      localStorage.setItem(response.data.token);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogin = async () => {
    await logIn();
    navigate("/");
  };

  return (
    <div>
      <h2>로그인 페이지</h2>
      <div className="container">
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
        <input
          onChange={(e) => {
            setPw(e.target.value);
            passwordCheck(e.target.value);
          }}
          type="password"
          placeholder="비밀번호"
        />
        {pwErrorMsg && <div className="message">{pwErrorMsg}</div>}
        <div onClick={handleLogin} className="loginBtn">
          로그인
        </div>
      </div>
    </div>
  );
};

export default Login;
