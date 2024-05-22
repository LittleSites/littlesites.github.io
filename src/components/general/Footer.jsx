import Link from 'next/link';
import styles from '@/styles/components/general/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <section className={styles.Footer__Contact}>
        <h3>Contáctanos</h3>
        <a href='mailto:sites.business.mx@gmail.com'>sites.business.mx@gmail.com</a>
      </section>

      <section className={styles.Footer__Navigation}>
        <ul>
          <li>
            <Link href='/about'>Acerca de</Link>
          </li>
          <li>
            <Link href='/privacy'>Aviso de privacidad</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
