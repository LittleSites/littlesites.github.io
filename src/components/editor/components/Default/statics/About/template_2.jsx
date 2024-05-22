import styles from './styles/template_2.module.css'
import { ID_STATIC } from '.'

export function StaticTemplate({ values }) {
  const title = values.texts[`about-2--title`]
  const content = values.texts[`about-2--content`]

  return (
    <section className={ styles[`about-2`] } id={ ID_STATIC }>

      <h2 className={ styles[`about-2__title`] }>{ title }</h2>
      <pre className={ styles[`about-2__description`] }>
        { content }
      </pre>
      
    </section>
  )
}
