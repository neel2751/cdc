"use client";
import { useRef, useEffect } from "react";

export default function Line({ propWidth }) {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    // full width using innerwidth
    const width = window.innerWidth * 0.7;
    // const width = window.innerWidth * 0.7;
    // path.current.setAttributeNS(null, "d", `M0,100 Q643,100 1286,100`);
    // path.current.setAttributeNS(
    //   null,
    //   "d",
    //   `M0 100 Q${width * x} ${100 + progress}, ${
    //     propWidth ? propWidth : width
    //   } 100`
    // );
    path.current.setAttributeNS(
      null,
      "d",
      `M 0 50 Q ${propWidth || width * x} ${50 + progress}, ${
        propWidth || width
      } 50`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    // progress = lerp(progress, 0, 0.025);
    progress = lerp(progress, 0, 0.045);
    time += 0.2;
    // console.log("this is the new progress", progress);
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div>
      <div className="containerTest">
        <div className="line">
          <div
            className="box"
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
          ></div>
          <svg className="">
            <path ref={path}></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
