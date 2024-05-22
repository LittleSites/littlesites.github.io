import React from "react";
import styles from "@/styles/pages/loading.module.css";

export default function LoadingPage() {
  return (
    <section className={styles.sectionLoading}>
      <h2 className={styles.h2}>Cargando...</h2>
    </section>
  );
}
