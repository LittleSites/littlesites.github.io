import styles from './styles/template_3.module.css'
import { ID_STATIC } from '.'

export function StaticTemplate({ values }) {
  const title1 = values.texts[`about-3--title1`]
  const title2 = values.texts[`about-3--title2`]
  const description1 = values.texts[`about-3--description1`]
  const description2 = values.texts[`about-3--description2`]

  const image = values.images[`about-3--image`]
  return (
    <section className={ styles[`about-3`] } id={ ID_STATIC }>
      
      <article className={ styles[`about-3__us`] }>
        
        <h3 className={ styles[`about-3__title`]}>{ title1 }</h3>

        <pre className={ styles[`about-3__description`]}>{ description1}</pre>

      </article>

      <article className={ styles[`about-3__history`] }>
        
        <figure className={ styles[`about-3__figure`] }>
          <img 
            className={ styles[`about-3__image`] }
            src={ image?.src || image } alt={ title2 } 
          />
        </figure>

        <section>

          <h3 
            id={ styles[`about-3__history-title`] }
            className={ styles[`about-3__title`]}
          >{ title2 }</h3>
          
          <pre 
            id={ styles[`about-3__history-description`] }
            className={ styles[`about-3__description`]}
          >{ description2 }</pre>

        </section>

      </article>
    </section>
  )
}
