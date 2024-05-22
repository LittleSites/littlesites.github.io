import styles from './styles/template_1.module.css'
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout.jsx'
import LinkInput from '@/components/editor/components/Shared/LinkInput.jsx'

import facebookIcon from '../../../../../../../public/icons/editor/facebook.svg'
import instagramIcon from '../../../../../../../public/icons/editor/Instagram_dark.svg'
import whatsappIcon from '../../../../../../../public/icons/editor/whatsapp.svg'

export const props = {
  unique: true,
};

const defaultValues = {
  texts : {
    'contact-1--title': 'Contact',
    'contact-1--message': 'Feel free to contact me',
    'contact-1--facebook-link': 'https://www.facebook.com/',
    'contact-1--instagram-link': 'https://www.instagram.com/',
    'contact-1--whatsapp-link': 'https://www.whatsapp.com/',
  },
}

export function InputTemplate({ item, index, state, setState }) {
  const title = defaultValues.texts['contact-1--title']
  const message = defaultValues.texts['contact-1--message']

  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
    >
      <section className={ styles[`contact-1`] }>
        <input 
          type="text"
          name='contact-1--title'
          defaultValue={ title }
          placeholder={ title }

          className={ styles[`contact-1__title`] }
        />
        
        <input
          type="text"
          name='contact-1--message'
          defaultValue={ message }
          placeholder={ message }

          className={ styles[`contact-1__message`] }
        />

        <section className={ styles[`contact-1__container`] }>

          <figure className={ styles[`contact-1__figure`] }>

            <LinkInput
              name='contact-1--facebook-link'
              label='Facebook link'
            />

            <img 
              className={ styles[`contact-1__icon`] }
              src={facebookIcon.src} 
              alt="Facebook"
            />
            <figcaption>Facebook</figcaption>
            
          </figure>

          <figure className={ styles[`contact-1__figure`] }>

            <LinkInput
              name='contact-1--instagram-link'
              label='Instagram link'
            />

            <img 
              className={ styles[`contact-1__icon`] }
              src={instagramIcon.src} 
              alt="Instagram"
            />
            <figcaption>Instagram</figcaption>
            
          </figure>

          <figure className={ styles[`contact-1__figure`] }>

            <LinkInput
              name='contact-1--whatsapp-link'
              label='Whatsapp link'
            />

            <img 
              className={ styles[`contact-1__icon`] }
              src={whatsappIcon.src} 
              alt="Whatsapp"
            />
            <figcaption>Whatsapp</figcaption>
            
          </figure>

        </section>

      </section>
    </InputTemplateLayout>
  )
}
