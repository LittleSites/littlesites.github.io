'use client'
import { useState } from 'react'

import styles from './styles/template_1.module.css'
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout'
import InputImage from '@/components/editor/components/Shared/InputImage'

export const props = {
  unique: false,
};

const defaultValues = {
  texts : {
    'services-1--title' : 'Our Services',
    'services-1--description' : 'Description',
    'services-1--title1' : 'Service 1',
    'services-1--description1' : 'Description 1',
    'services-1--title2' : 'Service 2',
    'services-1--description2' : 'Description 2',
    'services-1--title3' : 'Service 3',
    'services-1--description3' : 'Description 3',
  },
  images : {
    'services-1--image1' : 'https://via.placeholder.com/150',
    'services-1--image2' : 'https://via.placeholder.com/150',
    'services-1--image3' : 'https://via.placeholder.com/150',
  }
}

export function InputTemplate({ item, index, state, setState, className }) {
  const [ images, setImages ] = useState({
    'services-1--image1' : defaultValues.images['services-1--image1'],
    'services-1--image2' : defaultValues.images['services-1--image2'],
    'services-1--image3' : defaultValues.images['services-1--image3'],
  })

  const handleImageChange = (name, value) => {
    setImages({ ...images, [name]: value });
  };

  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
      className={ className }
    >
      <section className={ styles[`services-1`] }>
        <article className={ styles[`services-1__summary`] }>
          <input
            type="text"
            name="services-1--title"
            defaultValue={ defaultValues.texts['services-1--title'] }
            placeholder={ defaultValues.texts['services-1--title'] }

            className={ styles[`services-1__title`] }
          />
          <input
            type="text"
            name="services-1--description"
            defaultValue={ defaultValues.texts['services-1--description'] }
            placeholder={ defaultValues.texts['services-1--description'] }

            className={ styles[`services-1__description`] }
          />
        </article>

        <section className={ styles[`services-1__container`] }>
          { 
            Array.from({ length : 3}).map((_, index) => {
            const title = defaultValues.texts[`services-1--title${index + 1}`]
            const description = defaultValues.texts[`services-1--description${index + 1}`]
            const imageName = `services-1--image${index + 1}`
            const image = images[ imageName ]

            const background = {
              backgroundImage: `url(${image})`
            }

            return (
              <article 
                key={index} 
                className={ styles[`services-1__service`] }
                style={ background }
              >
                <InputImage
                  name={ imageName }
                  setImage={(value) => handleImageChange(imageName, value)}
                />
                {/* <div className={ styles[`services-1__service-overlay`] }></div> */}
                
                <input 
                  type="text"
                  name={`services-1--title${index + 1}`}
                  defaultValue={title}
                  placeholder={title}

                  className={ styles[`services-1__service-title`]}
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
