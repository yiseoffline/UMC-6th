import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen ? "모달이 꺼짐" : "모달이 켜짐");
  };

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={toggleModal}>버튼 열기</button>
      {isOpen && (
        <div>
          <div id="overlay" onClick={toggleModal}></div>
          <div id="modalBox">
            <div id="innerModal">
              <h2>안녕하세요</h2>
              <p>모달 내용은 어쩌고 저쩌고..</p>
              <button onClick={toggleModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
