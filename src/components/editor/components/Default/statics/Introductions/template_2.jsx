import Link from 'next/link';

import styles from './styles/template_2.module.css';
import { ID_STATIC } from '.';

export function StaticTemplate({ values }) {
  const title = values.texts['introduction-2--title']
  const slogan = values.texts['introduction-2--slogan']
  const ctaText = values.texts['introduction-2--cta']
  const cta = '#contact'
  
  const image = values.images['introduction-2--image']
  const MainSectionStyle = {
    backgroundImage: `url(${image})`,
  }

  return (
    <section style={MainSectionStyle} className={styles.MainTemplate2} id={ ID_STATIC }>

      <article  className={styles.MainTemplate2__Article}>
        <h1 className={styles.MainTemplate2__Title} >{title}</h1>
        <p className={styles.MainTemplate2__Slogan}>{slogan}</p>

        <Link 
          href={cta}
          className={styles.MainTemplate2__CTA}
        >
          {ctaText}
        </Link>

      </article>

    </section>
  )
}
