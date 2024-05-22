import styles from './styles/template_1.module.css'
import { ID_STATIC } from '.'

export function StaticTemplate({ values }) {
  const title = values.texts[`services-1--title`]

  return (
    <section className={ styles[`services-1`] } id={ ID_STATIC }>
      <h2 className={ styles[`services-1__title`] }>{ title }</h2>

      <section className={ styles[`services-1__container`] }>

        {
          Array.from({ length: 4 }).map((_, index) => {
            const service = values.texts[`services-1--service${index + 1}`]
            const description = values.texts[`services-1--description${index + 1}`]
            const image = values.images[`services-1--image${index + 1}`]

            return (
              <article key={index} className={ styles[`services-1__service`] }>

                <figure className={ styles[`services-1__service-figure`] }>
                  <img 
                    className={ styles[`services-1__service-image`] } 
                    src={image} 
                    alt={service}
                  />
                </figure>

                <h3 className={ styles[`services-1__service-title`] }>{service}</h3>
                <p className={ styles[`services-1__service-description`] }>{description}</p>

              </article>
            )
          })
        }
      </section>

    </section>
  )
}
