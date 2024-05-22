'use client';
import { useState } from "react";

import styles from "./styles/template_4.module.css";
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";
import InputImage from "@/components/editor/components/Shared/InputImage";

export const props = {
  unique: false,
};

const defaultValues = {
  title: "The Title",
  focus: "Some text to draw attention to the title.",
  ctaText: "see out services",
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

      <section className={ styles[`introduction-4`] }>

        <figure className={ styles[`introduction-4__image`] }>
          
          <InputImage
            name='introduction-4--image'
            setImage={setImage}
          />
          
          <img
            src={ image }
          />
        </figure>

        <article className={ styles[`introduction-4__content`] }>
          <input
            type='text'
            name='introduction-4--focus'
            defaultValue={ defaultValues.focus }
            placeholder={ defaultValues.focus }

            className={ styles[`introduction-4__focus`] }
          />
          <input 
            type='text'
            name='introduction-4--title'
            defaultValue={ defaultValues.title }
            placeholder={ defaultValues.title }

            className={ styles[`introduction-4__title`] }
          />
          <input
            type='text'
            name='introduction-4--cta'
            defaultValue={ defaultValues.ctaText }
            placeholder={ defaultValues.ctaText }

            className={ styles[`introduction-4__cta`] }
          />
        </article>

      </section>
      
    </InputTemplateLayout>
  )
}
