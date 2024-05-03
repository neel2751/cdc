"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function index({ hoverRef, children }) {
  //   const testRef = useRef(null);
  const [hoverd, setHoverd] = useState(false);
  const cursorSize = hoverd ? 200 : 12;
  //   const cursorSize = 12;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const springOption = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, springOption),
    y: useSpring(mouse.y, springOption),
  };

  const manageMouseMove = (e) => {
    // mouse.x.set(e.clientX - window.innerWidth / 2);
    // mouse.y.set(e.clientY - window.innerHeight / 2);
    mouse.x.set(e.clientX - cursorSize / 2);
    mouse.y.set(e.clientY - cursorSize / 2);
  };
  const manageMouseOver = () => {
    setHoverd(true);
  };
  const manageMouseLeave = () => {
    setHoverd(false);
  };

  const dataSrc = hoverRef.current?.getAttribute("data-src");
  const dataVideo = hoverRef.current?.getAttribute("data-video");
  //   console.log(hoverRef.current?.getAttribute("data-src"));
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    hoverRef?.current?.addEventListener("mouseover", manageMouseOver);
    hoverRef?.current?.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      hoverRef?.current?.removeEventListener("mouseover", manageMouseOver);
      hoverRef?.current?.removeEventListener("mouseleave", manageMouseLeave);
    };
  });

  return (
    <motion.div
      transition={{ type: "tween", ease: "backOut" }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      className={`${
        hoverd ? "bg-none" : "bg-[#1E1814]"
      } w-3 h-3 rounded-full fixed pointer-events-none`}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    >
      {hoverd && dataSrc ? (
        <motion.img
          animate={{
            baseFrequency: 0.5 || any,
            width: cursorSize,
            height: cursorSize,
          }}
          transition={{ type: "spring", stiffness: 300, mass: 0.5 }}
          className="rounded-full object-cover aspect-auto"
          src={dataSrc}
          alt="Mouse Test"
        />
      ) : (
        <video src={dataVideo} />
      )}
    </motion.div>
  );
}
