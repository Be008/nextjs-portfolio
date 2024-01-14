"use client";
import styles from "./page.module.css";
import Cursor from "../components/cursor";
import Home from "../components/home/page";
import About from "../components/about/page";
import Works from "../components/works/page";
import Contact from "../components/contact/page";

export default function Index() {
  return (
    <div className={styles.main}>
      <Cursor />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}
