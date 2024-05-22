import styles from './styles/template_3.module.css';
import { ID_STATIC } from '.';

export function StaticTemplate({ values }) {
  const title = values.texts['introduction-3--title']
  const slogan = values.texts['introduction-3--slogan']
  
  const image = values.images['introduction-3--image']
  
  return (
    <section className={styles.MainTemplate3} id={ ID_STATIC }>

      <figure className={styles.MainTemplate3__Figure}>
        <img className={styles.MainTemplate3__Image} src={ image } alt={ title } />
      </figure>
      
      <section className={styles.MainTemplate3__Summary}>
        <h1 className={styles.MainTemplate3__Title} >{ title }</h1>
        <pre className={styles.MainTemplate3__Description} >{ slogan }</pre>
      </section>

    </section>
  )
}
