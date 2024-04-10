import React, { useState } from "react";

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
          <div style={overlayStyle} onClick={toggleModal}></div>
          <div style={modalContainerStyle}>
            <div style={modalStyle}>
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

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

const modalContainerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
};

export default Modal;
