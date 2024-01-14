"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  topic1,
  topic2,
  topic3,
  topic4,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2 className={styles.h2}>{title}</h2>
        <div className={styles.body}>
          <ul className={styles.description}>
            <li className={styles.li}>{topic1}</li>
            <li className={styles.li}>{topic2}</li>
            <li className={styles.li}>{topic3}</li>
            <li className={styles.li}>{topic4}</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
