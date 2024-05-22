import styles from './styles/template_5.module.css'
import { ID_STATIC } from '.';

export function StaticTemplate({ values }) {
  const title = values.texts[`introduction-5--title`]
  return (
    <section className={ styles[`introduction-5`] } id={ ID_STATIC }>

      <h1 className={ styles[`introduction-5__title`] }>{ title }</h1>

    </section>
  )
}