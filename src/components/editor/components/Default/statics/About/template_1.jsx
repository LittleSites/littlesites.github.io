import Image from 'next/image'

import styles from './styles/template_1.module.css'
import { ID_STATIC } from '.'

export function StaticTemplate({ values }) {
  const title = values.texts[`about-1--title`]
  const description = values.texts[`about-1--description`]

  const image = values.images[`about-1--image`]

  return (
    <section className={ styles[`about-1`] } id={ ID_STATIC }>

      <article className={ styles[`about-1__article`] }>
        <h3 className={ styles[`about-1__title`] }>{ title }</h3>
        <pre className={ styles[`about-1__description`] }>{ description }</pre>
      </article>

      <figure className={ styles[`about-1__figure`] }>
        <img
          src={ image } 
          alt={ title }
          className={ styles[`about-1__image`] }
        />
      </figure>

    </section>
  )
}
