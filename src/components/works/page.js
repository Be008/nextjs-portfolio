"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";

const projects = [
  {
    title: "Indicações front-end (2022)",
    src: "indicafront.jpg",
    color: "#8C8C8C",
    href: "https://senacscs.github.io/t2/bernardo/primeiro/indicacoesfront/indicacoes.html",
  },
  {
    title: "Projeto PP (2022)",
    src: "tcc.jpg",
    color: "#635649",
    href: "https://senacscs.github.io/t2/bernardo/primeiro/projeto1/index.html",
  },
  {
    title: "Fibonacci (2022)",
    src: "fibonacci.jpg",
    color: "#EFE8D3",
    href: "https://senacscs.github.io/t2/bernardo/primeiro/fibonacci/index.html",
  },
  {
    title: "Foguete (2022)",
    src: "foguete.jpg",
    color: "#495a63",
    href: "https://senacscs.github.io/t2/bernardo/primeiro/foguete/index.html",
  },
  {
    title: "Laptop (2022)",
    src: "laptop.png",
    color: "#d0e5e1",
    href: "https://senacscs.github.io/t2/bernardo/primeiro/talentos/index.html",
  },
  {
    title: "Tunísia (2022)",
    src: "tunisia.jpg",
    color: "#c4a9a9",
    href: "https://senacscs.github.io/t2/bernardo/primeiro/country/index.html",
  },
  {
    title: "Jogo de história (2023)",
    src: "historia.jpg",
    color: "#abaa95",
    href: "https://senacscs.github.io/t2/bernardo/segundo/jogodehistoria/index.html",
  },
  {
    title: "Indicações back-end (2023)",
    src: "indicaback.jpg",
    color: "#e5d0e4",
    href: "https://senacscs.github.io/t2/bernardo/segundo/indicacoesback/indicacoesbackend.html",
  },
  {
    title: "Poo (2023)",
    src: "poo.jpg",
    color: "#3d5380",
    href: "https://senacscs.github.io/t2/bernardo/segundo/poo/index.html",
  },
  {
    title: "Nexia (2023)",
    src: "nexia.jpg",
    color: "#707c58",
    href: "https://senacscs.github.io/t2/bernardo/segundo/nexia/index.html",
  },
  {
    title: "JNS (2023)",
    src: "jns.png",
    color: "#706D63",
    href: "https://senacscs.github.io/t2/goritz/segundo/jns/index.html",
  },
  {
    title: "Ptjs (2023)",
    src: "ptjs.png",
    color: "#cfcfcf",
    href: "https://senacscs.github.io/t2/bernardo/segundo/ptjs/index.html",
  },
  {
    title: "Se a cidade fosse nossa (2023)",
    src: "cidade.jpg",
    color: "#706D63",
    href: "https://senacscs.github.io/t2/bernardo/segundo/cidade/index.html",
  },
  {
    title: "Indicações mobile",
    src: "mobile.png",
    color: "#8c8c8c",
    href: "https://senacscs.github.io/t2/bernardo/terceiro/indicacoesmobile/",
  },
  {
    title: "Strawberry list",
    src: "strawberry.jpg",
    color: "#c7fcc7",
    href: "https://senacscs.github.io/t2/bernardo/terceiro/listaingles/",
  },
  {
    title: "Jogo",
    src: "jogo.jpg",
    color: "#535453",
    href: "https://senacscs.github.io/t2/bernardo/terceiro/jogo_texto/",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main id="works" className={styles.main}>
      <div className={styles.works}>
        <h1 className={styles.h1}>School Works</h1>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              href={project.href}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
