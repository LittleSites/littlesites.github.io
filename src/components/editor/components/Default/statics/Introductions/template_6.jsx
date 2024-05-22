import Image from 'next/image'

import styles from './styles/template_6.module.css'
import { ID_STATIC } from '.';

export function StaticTemplate({ values }) {
  const title = values.texts[`introduction-6--title`]
  const slogan = values.texts[`introduction-6--slogan`]

  const image = values.images[`introduction-6--image`]

  return (
    <section className={ styles[`introduction-6`] } id={ ID_STATIC }>
      
      <figure className={ styles[`introduction-6__figure`] }>
        <img className={ styles[`introduction-6__image`] } src={ image } alt={title} />
      </figure>

      <article className={ styles[`introduction-6__summary`] }>
        <h1 className={ styles[`introduction-6__title`] }>{ title }</h1>
        <h3 className={ styles[`introduction-6__slogan`] }>{ slogan }</h3>
      </article>

    </section>
  )
}