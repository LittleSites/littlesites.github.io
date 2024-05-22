import { useState } from 'react';

import styles from './styles/template_3.module.css'
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout';
import InputImage from '@/components/editor/components/Shared/InputImage';

export const props = {
  unique: false,
};

const defaultValues = {
  title1: 'About Us',
  description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
  turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed ac turpis. Donec sit amet eros. Lorem ipsum dolor
  sit amet, consectetur adipiscing elit. Sed ac turpis. Donec sit amet eros.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis.
  Donec sit amet eros. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Sed ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Sed ac turpis. Donec sit amet eros. Lorem
  ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis. Donec
  sit amet eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed ac turpis. Donec sit amet eros. Lorem ipsum dolor
  sit amet, consectetur adipiscing elit. Sed ac turpis. Donec sit amet eros.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis.
  Donec sit amet eros. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Sed ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Sed ac turpis. Donec sit amet eros. Lorem
  ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis. Donec
  sit amet eros.`,
  title2: 'Our History',
  description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
  turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed ac turpis. Donec sit amet eros. Lorem ipsum dolor
  sit amet, consectetur adipiscing elit. Sed ac turpis. Donec sit amet eros.`
}


export function InputTemplate({ item, index, state, setState, className }) {
  const [ image, setImage ] = useState('')

  return (
    <InputTemplateLayout 
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
      className={ className }
    >
      <section className={ styles[`about-3`] }>
        
        <article className={ styles[`about-3__us`] }>
          
          <input 
            type="text"
            name='about-3--title1'
            defaultValue={ defaultValues.title1 }
            placeholder={ defaultValues.title1 }
            className={ styles[`about-3__title`]}
          />

          <textarea 
            name='about-3--description1'
            defaultValue={ defaultValues.description1 }
            placeholder={ defaultValues.description1 }
            className={ styles[`about-3__description`]}
          ></textarea>

        </article>

        <article className={ styles[`about-3__history`] }>
          
          <figure className={ styles[`about-3__figure`] }>
            <InputImage name='about-3--image' setImage={ setImage } />
            
            <img 
              className={ styles[`about-3__image`] }
              src={ image } alt="" 
            />
          </figure>

          <section>

            <input 
              type="text"
              name='about-3--title2'
              defaultValue={ defaultValues.title2 }
              placeholder={ defaultValues.title2 }

              id={ styles[`about-3__history-title`] }
              className={ styles[`about-3__title`]}
            />
            
            <textarea 
              name='about-3--description2'
              defaultValue={ defaultValues.description2 }
              placeholder={ defaultValues.description2 }

              id={ styles[`about-3__history-description`] }
              className={ styles[`about-3__description`]}
            ></textarea>

          </section>

        </article>
      </section>
    </InputTemplateLayout>
  )
}
