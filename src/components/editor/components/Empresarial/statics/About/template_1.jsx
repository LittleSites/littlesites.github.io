import styles from './styles/template_1.module.css'
import { ID_STATIC } from '.'

export function StaticTemplate({ values }) {
  const title = values.texts[`about-1--title`]
  const content = values.texts[`about-1--content`]

  return (
    <section className={ styles[`about-1`] } id={ ID_STATIC }>

      <h2 className={ styles[`about-1__title`] }>{ title }</h2>
      <pre className={ styles[`about-1__description`] }>
        { content }
      </pre>
      
    </section>
  )
}
