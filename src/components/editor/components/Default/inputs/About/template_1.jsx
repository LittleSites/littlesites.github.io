import { useState } from 'react';

import styles from './styles/template_1.module.css';
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout';
import InputImage from '@/components/editor/components/Shared/InputImage';

export const props = {
  unique: false,
};

const defaultValues = {
  title: 'Title',
  description: `a
description
of your 
brand`,
  image: ''
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
      <section className={ styles[`about-1`] }>

        <article className={ styles[`about-1__article`] }>
          <input 
            type="text"
            name='about-1--title'
            defaultValue={ defaultValues.title }
            placeholder={ defaultValues.title }
            className={ styles[`about-1__title`] }
          />
          <textarea 
            name='about-1--description'
            defaultValue={ defaultValues.description }
            placeholder={ defaultValues.description }

            className={ styles[`about-1__description`] }></textarea>
        </article>

        <figure className={ styles[`about-1__figure`] }>
          <InputImage
            name='about-1--image'
            setImage={ setImage }
          />
          
          <img
            src={ image } 
            className={ styles[`about-1__image`] }
          />
        </figure>

      </section>
    </InputTemplateLayout>
  )
}
