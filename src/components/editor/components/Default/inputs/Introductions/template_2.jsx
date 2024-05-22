'use client';
import { useState } from "react";

import styles from "./styles/template_2.module.css";
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";
import InputImage from "@/components/editor/components/Shared/InputImage";

export const props = {
  unique: false,
};

const defaultValues = {
  title: "Title",
  slogan: `a
  description
  of your brand

  don't worry about the scrollbar

  `,
  ctaText: "Contact",
};

export const InputTemplate = ({ item, index, state, setState, className }) => {
  const [ image, setImage ] = useState('')

  const MainSectionStyle = {
    backgroundImage: `url(${image})`,
  }

  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
      className={ className }
    >

      <section style={MainSectionStyle} className={styles.MainTemplate2}>

        <figure className={styles.MainTemplate2__Image}>
          <InputImage
            name='introduction-2--image'
            setImage={setImage}
          />
        </figure>

        <article  className={styles.MainTemplate2__Article}>
          <input 
            type='text'
            name='introduction-2--title'
            defaultValue={ defaultValues.title }
            placeholder={ defaultValues.title }

            className={styles.MainTemplate2__Title}
          />
          <input
            type='text'
            name='introduction-2--slogan'
            defaultValue={ defaultValues.slogan }
            placeholder={ defaultValues.slogan }

            className={styles.MainTemplate2__Slogan}
          />

          <input
            type='text'
            name='introduction-2--cta'
            defaultValue={ defaultValues.ctaText }
            placeholder={ defaultValues.ctaText }
            
            className={styles.MainTemplate2__CTA}
          />

        </article>

      </section>

    </InputTemplateLayout>
  );
};
