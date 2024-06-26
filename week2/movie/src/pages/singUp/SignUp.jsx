import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState(0);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [pwErrorMsg, setPwErrorMsg] = useState("");
  const [pwChkErrorMsg, setPwChkErrorMsg] = useState("");
  const navigate = useNavigate();

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
    } else {
      setPwChkErrorMsg("");
    }
  };

  const handleSubmit = async () => {
    await signUp();
    alert("회원가입에 성공하였습니다! ");
    navigate("/login");
  };

  const signUp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        name: name,
        email: email,
        age: age,
        username: id,
        password: password,
        passwordCheck: pwCheck,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>회원가입 페이지</h2>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={{ marginTop: 50 }}
        type="text"
        placeholder="이름을 입력하세요"
      />
      <input
        type="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="아이디를 입력해주세요"
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
      <button
        disabled={
          !isEmailValid ||
          !isAgeValid ||
          pwErrorMsg !== "" ||
          pwChkErrorMsg !== ""
        }
        type="submit"
        className="btn"
        onClick={handleSubmit}
      >
        제출하기
      </button>
      <div className="question">
        <div style={{ marginRight: 20 }}>이미 아이디가 있으신가요?</div>
        <div style={{ fontWeight: "bold" }}>로그인 페이지로 이동하기</div>
      </div>
    </div>
  );
};

export default SignUp;
