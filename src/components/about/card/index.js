import Image from "next/image";
import styles from "./style.module.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

// Importa a fonte diretamente aqui
import { Lato } from "next/font/google";

// Configuração da fonte Roboto
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
});

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

  // Use a classe da fonte no componente
  return (
    <div ref={container} className={`${styles.cardContainer} ${lato.className}`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2 className={`${styles.h2} ${lato.className}`}>{title}</h2>
        <div className={styles.body}>
          <ul className={styles.description}>
            <li className={`${styles.li} ${lato.className}`}>{topic1}</li>
            <li className={`${styles.li} ${lato.className}`}>{topic2}</li>
            <li className={`${styles.li} ${lato.className}`}>{topic3}</li>
            <li className={`${styles.li} ${lato.className}`}>{topic4}</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
