import React from "react";
import styles from "./headers_statics/template_1.module.css";
import Image from "next/image";

export const StaticTemplate = ({ values }) => {
  const texts = values.texts;
  const images = values.images;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={images.logo} alt="Logo" width={60} height={60} />
        <p className={styles.title}>{texts.title}</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <p>{texts.introduction}</p>
          </li>
          <li className={styles.navItem}>
            <p>{texts.about}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};
