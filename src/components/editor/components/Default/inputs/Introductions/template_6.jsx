'use client'

import { useState } from 'react'

import styles from './styles/template_6.module.css'
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout';
import InputImage from '@/components/editor/components/Shared/InputImage';

export const props = {
  unique: false,
};

const defaultValues = {
  title: 'Title',
  slogan: 'slogan',
}

export function InputTemplate({ item, index, state, setState, className }) {
  const [image, setImage] = useState('')
  
  return (
    <InputTemplateLayout
      item={item}
      index={index}
      state={state}
      setState={setState}
      className={className}
    >

      <section className={ styles[`introduction-6`] }>
        
        <figure className={ styles[`introduction-6__figure`] }>
          <InputImage 
            name={`introduction-6--image`}
            setImage={setImage}
          />
                  
          <img className={ styles[`introduction-6__image`] } src={ image }/>
        </figure>

        <article className={ styles[`introduction-6__summary`] }>
          <input
            type="text"
            defaultValue={ defaultValues.title }
            placeholder={ defaultValues.title }
            name="introduction-6--title"
            className={ styles[`introduction-6__title`] }
          />
          <input 
            type="text"
            defaultValue={ defaultValues.slogan }
            placeholder={ defaultValues.slogan }
            name="introduction-6--slogan"
            className={ styles[`introduction-6__slogan`] }
          />
        </article>

      </section>

    </InputTemplateLayout>
  )
}