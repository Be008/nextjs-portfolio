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
                "Greetings, my name is Bernardo Etges da Silva, and I am a passionate programming enthusiast. Currently, I am enrolled in high school and technical education at Senac RS school, where I am learning about both front-end and back-end development."
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
