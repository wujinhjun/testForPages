import React, { useEffect, useRef } from "react";
import "./styles/App.scss";
import sketch from "./sketch";
import p5 from "p5";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasDivElement: HTMLElement =
      canvasRef.current as unknown as HTMLElement;
    new p5(sketch(canvasDivElement), canvasDivElement);
  }, []);

  return (
    <>
      <div ref={canvasRef} className="p5" />
      <div className="tips">静止后单击一下鼠标左键！就会有后续啦</div>
    </>
  );
};

export default App;
