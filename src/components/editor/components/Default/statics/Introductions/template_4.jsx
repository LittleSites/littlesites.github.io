import Link from 'next/link'
import Image from 'next/image'

import styles from './styles/template_4.module.css'
import { ID_STATIC } from '.';

export function StaticTemplate({ values }) {
  const title = values.texts['introduction-4--title']
  const focus = values.texts['introduction-4--focus']
  const ctaText = values.texts['introduction-4--cta']

  const image = values.images['introduction-4--image']

  return (
    <section className={ styles[`introduction-4`] } id={ ID_STATIC }>

      <figure className={ styles[`introduction-4__image`] }>
        <img
          src={ image }
        />
      </figure>

      <article className={ styles[`introduction-4__content`] }>
        <p className={ styles[`introduction-4__focus`] }>{ focus }</p>
        <h3 className={ styles[`introduction-4__title`] }>{ title }</h3>
        <Link 
          href="#services"
          className={ styles[`introduction-4__cta`] }
        >{ ctaText }</Link>
      </article>

    </section>
  )
}
