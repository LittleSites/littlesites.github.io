import Link from "next/link";
import styles from "@/styles/pages/sites/notFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFoundContainer}>
      <h2 className={styles.notfound}>Error 404</h2>
      <h2 className={styles.text}>Pagina no encontrada</h2>
      <Link href="/">volver a inicio</Link>
    </section>
  );
}
