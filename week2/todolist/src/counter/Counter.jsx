import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter((counter) => counter + 1);
    console.log("increase가 클릭됨");
  };

  const minus = () => {
    setCounter((counter) => counter - 1);
    console.log("decrease가 클릭됨");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{counter}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button style={{ marginRight: "10px" }} onClick={plus}>
          +1
        </button>
        <button onClick={minus}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
