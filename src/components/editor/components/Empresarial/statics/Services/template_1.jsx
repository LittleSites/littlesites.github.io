import styles from './styles/template_1.module.css'

import { ID_STATIC } from '.'

export function StaticTemplate({ values }) {
  const title = values.texts['services1--title']
  const description = values.texts['services-1--description']

  return (
    <section className={ styles[`services-1`] } id={ ID_STATIC }>
      <article className={ styles[`services-1__summary`] }>
        <h2 className={ styles[`services-1__title`] }>{title}</h2>
        <p className={ styles[`services-1__description`] }>{description}</p>
      </article>

      <section className={ styles[`services-1__container`] }>
        { 
          Array.from({ length : 3}).map((_, index) => {
          const title = values.texts[`services-1--title${index + 1}`]
          const description = values.texts[`services-1--description${index + 1}`]
          const image = values.images[`services-1--image${index + 1}`]

          const background = {
            backgroundImage: `url(${image})`
          }

          return (
            <article 
              key={index} 
              className={ styles[`services-1__service`] }
              style={ background }
            >
              <div className={ styles[`services-1__service-overlay`] }></div>
              
              <h3 className={ styles[`services-1__service-title`]}>{title}</h3>
              <p className={ styles[`services-1__service-description`] }>{description}</p>
            </article>
            )
          })
        }
      </section>
    </section>
  )
}
