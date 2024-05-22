'use client'
import { useState } from 'react'

import styles from './styles/template_1.module.css'
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout'
import InputImage from '@/components/editor/components/Shared/InputImage'

export const props = {
  unique: false,
};

const defaultValues = {
  texts: {
    'services-1--title': 'Our Services',
    'services-1--service1': 'Service 1',
    'services-1--service2': 'Service 2',
    'services-1--service3': 'Service 3',
    'services-1--service4': 'Service 4',
    'services-1--description1': 'Description 1',
    'services-1--description2': 'Description 2',
    'services-1--description3': 'Description 3',
    'services-1--description4': 'Description 4',
  },
  images: {
    'services-1--image1': 'https://via.placeholder.com/150',
    'services-1--image2': 'https://via.placeholder.com/150',
    'services-1--image3': 'https://via.placeholder.com/150',
    'services-1--image4': 'https://via.placeholder.com/150',
  }
}

export function InputTemplate({ item, index, state, setState, className }) {
  const [images, setImages] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
  });

  const handleImageChange = (name, value) => {
    setImages({ ...images, [name]: value });
  };

  return (
    <InputTemplateLayout
      item={item}
      index={index}
      state={state}
      setState={setState}
      className={className}
    >

      <section className={ styles[`services-1`] }>

        <input 
          type="text"
          name='services-1--title'
          defaultValue={ defaultValues.texts['services-1--title'] }
          placeholder={ defaultValues.texts['services-1--title'] }

          className={ styles[`services-1__title`] }
        />

        <section className={ styles[`services-1__container`] }>

          {
            Array.from({ length: 4 }).map((_, index) => {
              const service = defaultValues.texts[`services-1--service${index + 1}`]
              const description = defaultValues.texts[`services-1--description${index + 1}`]
              const imageName = `image${index + 1}`;

              return (
                <article key={index} className={ styles[`services-1__service`] }>

                  <figure className={ styles[`services-1__service-figure`] }>
                    <InputImage
                      name={`services-1--${imageName}`}
                      setImage={(value) => handleImageChange(imageName, value)}
                    />
                    <img 
                      className={ styles[`services-1__service-image`] } 
                      src={images[imageName]}
                    />
                  </figure>

                  <input 
                    type="text"
                    name={`services-1--service${index + 1}`}
                    defaultValue={service}
                    placeholder={service}

                    className={ styles[`services-1__service-title`] }
                  />
                  <input 
                    type="text"
                    name={`services-1--description${index + 1}`}
                    defaultValue={description}
                    placeholder={description}
                    
                    className={ styles[`services-1__service-description`] }
                  />

                </article>
              )
            })
          }
        </section>

      </section>

    </InputTemplateLayout>
  )
}
