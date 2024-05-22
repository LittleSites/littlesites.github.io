import Link from 'next/link';

import styles from './styles/template_1.module.css';
import { ID_STATIC } from '.';

export const StaticTemplate = ({ values }) => {
  const title = values.texts['introduction-1--title']
  const slogan = values.texts['introduction-1--slogan']
  const ctaText = values.texts['introduction-1--cta']
  const cta = '#contact'
  
  const image = values.images['introduction-1--image']

  return (
    <section className={styles.MainTemplate1} id={ ID_STATIC }>

      <article className={styles.MainTemplate1__article}>
        <h1 className={styles.MainTemplate1__Title}>{title}</h1>
        <p className={styles.MainTemplate1__Slogan}>{slogan}</p>

        <Link
        href={cta}
        className={styles.MainTemplate1__CTA}
        >{ctaText}</Link>

      </article>

      <article className={styles.MainTemplate1__image}>
        <figure>
          <img src={image} alt={title} />
        </figure>
      </article>

    </section>
  );
};
