'use client';
import { useState } from "react";

import styles from './styles/template_3.module.css';
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";
import InputImage from "@/components/editor/components/Shared/InputImage";

export const props = {
  unique: false,
};

const defaultValues = {
  title: 'Title',
  slogan: `a
  description
  of your brand
  
  don't worry about the scrollbar
  `,
};

export const InputTemplate = ({ item, index, state, setState, className }) => {
  const [ image, setImage ] = useState('')

  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
      className={ className }
    >
      
      <section className={styles.MainTemplate3}>

        <figure className={styles.MainTemplate3__Figure}>

          <InputImage
            name='introduction-3--image'
            setImage={setImage}
          />

          <img className={styles.MainTemplate3__Image} src={ image }/>
        </figure>
        
        <section className={styles.MainTemplate3__Summary}>
          <input 
            type='text'
            name='introdunction-3--title'
            defaultValue={ defaultValues.title }
            placeholder={ defaultValues.title }
            
            className={styles.MainTemplate3__Title}
          />
          <textarea 
            className={styles.MainTemplate3__Description}
            defaultValue={ defaultValues.slogan }
            placeholder={ defaultValues.slogan }

            name='introduction-3--slogan'
          ></textarea>
        </section>

      </section>

    </InputTemplateLayout>
  )
}
