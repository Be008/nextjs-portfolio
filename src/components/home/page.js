import React from "react";
import styles from "./style.module.css";
import AnimatedTextCharacter from "../animtext/title";
import AnimatedTextWord from "../animtext/textbelow";
import AnimatedTextBio from "../animtext/textbio";

export default function index() {
  return (
    <main id="home" className={styles.main}>
      <div className={styles.home}>
        <div className={styles.top}>
          <AnimatedTextCharacter text="BERNARDO ETGES" />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <AnimatedTextBio
              text={
                "Greetings, my name is Bernardo Etges da Silva, and I am a front-end developer passionate about technology, creativity, and design. My journey began in high school, where I explored both front-end and back-end development. Today, I focus on crafting engaging digital experiences, blending technical precision with artistic expression."
              }
            />
          </div>
          <div className={styles.right}>
            <AnimatedTextWord text="WEB DEVELOPER" />
          </div>
        </div>
      </div>
    </main>
  );
}
