import React, { useEffect } from "react";

import Header from "./components/Header";
import Sketch from "./components/Sketch";
import Content from "./components/Content";

import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="sketch-wrapper">
        <Sketch />
      </div>
      <div className="gap-color" />
      <Content />
    </>
  );
};

export default App;
