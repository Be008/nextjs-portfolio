"use client";
import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function index({ index, title, setModal, href }) {
  function handleClick() {
    window.open(href, "_blank");
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </p>
    </div>
  );
}
