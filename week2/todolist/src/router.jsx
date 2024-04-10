import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Todo from "./todo/Todo";
import Counter from "./counter/Counter";
import Modal from "./modal/Modal";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASEURL || "/"}>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
