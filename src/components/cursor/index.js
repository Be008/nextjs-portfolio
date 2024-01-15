import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const [isPointer, setIsPointer] = useState(false);

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorSize = 20;
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse.x, mouse.y]);

  return (
    <motion.div
      className={`${styles.cursor}`}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
}
