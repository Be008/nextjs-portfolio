import styles from "./style.module.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

export default function Index({ item, isActive, setSelectedIndicator }) {
  const { title, href, index } = item;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={() => setSelectedIndicator(href)}
        className={styles.a}
        href={href}
      >
        {title}
      </Link>
    </motion.div>
  );
}
