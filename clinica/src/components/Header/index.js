"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
// import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <Image className={styles.img} src='/images/impressao.png' alt='Imagem do álbum do Bon Jovi' width={40} height={40} /> */}
        <h1 className={styles.h1}>Clínica MO</h1>
      </div>
      <button
        className={styles.menuButton + (menuOpen ? " " + styles.open : "")}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={styles.nav + (menuOpen ? " " + styles.navOpen : "")}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/medico">
              Médico
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/paciente">
              Paciente
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/consulta">
              Consulta
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.navDesktop}>
        <ul className={styles.ulDesktop}>
          <li className={styles.liDesktop}>
            <Link className={styles.linkDesktop} href="/">
              Home
            </Link>
          </li>
          <li className={styles.liDesktop}>
            <Link className={styles.linkDesktop} href="/medico">
              Médico
            </Link>
          </li>
          <li className={styles.liDesktop}>
            <Link className={styles.linkDesktop} href="/Paciente">
              Paciente
            </Link>
          </li>
          <li className={styles.liDesktop}>
            <Link className={styles.linkDesktop} href="/consulta">
              Consulta
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

