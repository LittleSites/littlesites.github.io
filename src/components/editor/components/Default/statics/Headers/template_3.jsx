import { useEffect } from "react";
import Image from "next/image";
import styles from "./headers_statics/template_3.module.css";

export const StaticTemplate = ({ values }) => {
  const texts = values.texts;
  const images = values.images;

  useEffect(() => console.log(values), []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={images.logo} width={60} height={60} alt="Logo" />
      </div>
    </header>
  );
};
