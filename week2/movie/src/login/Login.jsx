import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [pwErrorMsg, setPwErrorMsg] = useState("");
  const [pwChkErrorMsg, setPwChkErrorMsg] = useState("");

  const emailExp =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordExp =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;

  const emailCheck = (email) => {
    if (emailExp.test(email) === true) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const ageCheck = (age) => {
    if (!isNaN(age) && age > 0) {
      setIsAgeValid(true);
    } else {
      setIsAgeValid(false);
    }
  };

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

  const pwCheckAgain = (password, pwCheck) => {
    if (password !== pwCheck) {
      setPwChkErrorMsg("비밀번호가 일치하지 않습니다");
      return;
    } else {
      console.log("");
    }
  };

  return (
    <div className="container">
      <h2>회원가입 페이지</h2>
      <input
        style={{ marginTop: 50 }}
        type="text"
        placeholder="이름을 입력하세요"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
          emailCheck(e.target.value);
        }}
        type="email"
        placeholder="이메일을 입력해주세요"
      />
      {!isEmailValid && <div className="message">이메일을 입력해주세요 !</div>}
      <input
        onChange={(e) => {
          setAge(parseInt(e.target.value));
          ageCheck(e.target.value);
        }}
        type="age"
        placeholder="나이를 입력해주세요"
      />
      {!isAgeValid && (
        <div className="message">나이를 숫자로 입력해주세요 !</div>
      )}
      <input
        onChange={(e) => {
          setPassword(e.target.value);
          passwordCheck(e.target.value);
        }}
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      {pwErrorMsg && <div className="message">{pwErrorMsg}</div>}
      <input
        onChange={(e) => {
          setPwCheck(e.target.value);
          pwCheckAgain(password, e.target.value);
        }}
        type="password"
        placeholder="비밀번호 확인"
      />
      {pwChkErrorMsg && <div className="message">{pwChkErrorMsg}</div>}
    </div>
  );
};

export default Login;
