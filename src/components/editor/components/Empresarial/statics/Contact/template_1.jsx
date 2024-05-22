import styles from './styles/template_1.module.css'

import facebookIcon from '../../../../../../../public/icons/editor/facebook.svg'
import instagramIcon from '../../../../../../../public/icons/editor/Instagram_dark.svg'
import whatsappIcon from '../../../../../../../public/icons/editor/whatsapp.svg'

export function StaticTemplate({ values }) {
  const title = values.texts['contact-1--title']
  const message = values.texts['contact-1--message']

  const facebookLink = values.texts['contact-1--facebook-link']
  const instagramLink = values.texts['contact-1--instagram-link']
  const whatsappLink = values.texts['contact-1--whatsapp-link']

  return (
    <section className={ styles[`contact-1`] }>
      <h1 className={ styles[`contact-1__title`] }>{ title }</h1>
      <p className={ styles[`contact-1__message`] }>{ message }</p>

      <section className={ styles[`contact-1__container`] }>

        <figure className={ styles[`contact-1__figure`] }>

          <a href={ facebookLink }>
            <img 
              className={ styles[`contact-1__icon`] }
              src={facebookIcon.src} 
              alt="Facebook"
            />
            <figcaption>Facebook</figcaption>
          </a>
          
        </figure>

        <figure className={ styles[`contact-1__figure`] }>

          <a href={ instagramLink }>
            <img 
              className={ styles[`contact-1__icon`] }
              src={instagramIcon.src} 
              alt="Instagram"
            />
            <figcaption>Instagram</figcaption>
          </a>
          
        </figure>

        <figure className={ styles[`contact-1__figure`] }>

          <a href={ whatsappLink }>
            <img 
              className={ styles[`contact-1__icon`] }
              src={whatsappIcon.src} 
              alt="Whatsapp"
            />
            <figcaption>Whatsapp</figcaption>
          </a>
          
        </figure>

      </section>

    </section>
  )
}
