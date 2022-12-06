import React, { useEffect, useRef } from "react";
import p5 from "p5";

import sketch from "../sketch";

const Sketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasDivElement: HTMLElement =
      canvasRef.current as unknown as HTMLElement;
    new p5(sketch(canvasDivElement), canvasDivElement);
  }, []);

  return <div ref={canvasRef} className="p5" />;
};

export default Sketch;
