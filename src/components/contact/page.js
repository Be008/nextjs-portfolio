import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FramerMagnetic from "./index";

export default function Index() {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  useEffect(() => {
    setPath(progress);
  }, [progress, setPath]);

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
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
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
    <div id="contact" className={styles.main}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h1>CONTACTS</h1>
        </div>

        <div className={styles.line}>
          <div
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className={styles.box}
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>

        <div className={styles.social}>
          <FramerMagnetic>
            <a
              href="https://www.linkedin.com/in/bernardo-etges-da-silva-92b9a32a9/"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </FramerMagnetic>
          <FramerMagnetic>
            <a
              href="https://github.com/Be008"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </FramerMagnetic>
          <FramerMagnetic>
            <a
              href="mailto:bernardoetges1@gmail.com"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </FramerMagnetic>
          <FramerMagnetic>
            <a
              href="https://www.instagram.com/be_etges/"
              target="_blank"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </FramerMagnetic>
        </div>
      </div>
    </div>
  );
}
