import React from "react";

import Header from "./components/Header";
import Sketch from "./components/Sketch";

import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Sketch />
      <div className="tips">静止后单击一下鼠标左键！就会有后续啦</div>
    </>
  );
};

export default App;
