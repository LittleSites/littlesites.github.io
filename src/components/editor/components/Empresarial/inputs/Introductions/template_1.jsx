'use client';
import { useState } from "react";

import styles from "./styles/template_1.module.css";
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";
import InputImage from "@/components/editor/components/Shared/InputImage";

export const props = {
  unique: false,
};

const defaultValues = {
  title: "Title",
  slogan: "Slogan",
  ctaText: "Contact us button",
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
          <section className={styles.MainTemplate1}>
            <article className={styles.MainTemplate1__article}>
              <input 
                type='text' 
                name='introduction-1--title'
                defaultValue={ defaultValues.title }
                placeholder={ defaultValues.title }

                className={styles.MainTemplate1__Title} 
              />
              <input 
                type='text' 
                name='introduction-1--slogan'
                defaultValue={ defaultValues.slogan }
                placeholder={ defaultValues.slogan }

                className={styles.MainTemplate1__Slogan}
              />
              <input
                type='text'
                name='introduction-1--cta'
                defaultValue={ defaultValues.ctaText }
                placeholder={ defaultValues.ctaText }
                
                className={styles.MainTemplate1__CTA}
              />  
            </article>

            <article className={styles.MainTemplate1__image}>
              <figure>
              {/* className={styles.MainTemplate1__ImageLabel} */}
                <InputImage
                  name='introduction-1--image'
                  setImage={setImage}
                />
                
                <img src={image}/>
              </figure>
            </article>
          </section>
    </InputTemplateLayout>
  );
};
