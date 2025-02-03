"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),

    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),

    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);

    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <div className="relative z-[1000000000] hidden md:block">
      <motion.div
        style={{
          left: smoothMouse.x,

          top: smoothMouse.y,
        }}
        className="fixed flex w-5 rounded-full h-5 aspect-square items-center pointer-events-none -translate-x-1/2 -translate-y-1/2  justify-center bg-[#455CE9] blur-lg"
      ></motion.div>
      <motion.div
        style={{
          left: smoothMouse.x,

          top: smoothMouse.y,
        }}
        className=" fixed w-3.5 h-3.5 aspect-square pointer-events-none -translate-x-1/2 -translate-y-1/2  rounded-full bg-[#455CE9]"
      ></motion.div>
    </div>
  );
};

export default Cursor;
