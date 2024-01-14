import { motion } from "framer-motion";
import React from "react";
import styles from "../home/style.module.css"

const AnimatedTextBio = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.45 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const bio = text;

  return (
    <motion.p
      className={styles.p}
      initial="hidden"
      animate="visible"
      variants={container}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedTextBio;
