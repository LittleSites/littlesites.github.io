'use client'
import { useState } from 'react'

import styles from './styles/template_2.module.css'
import InputTemplateLayout from '@/components/editor/components/Shared/InputTemplateLayout'
import InputImage from '@/components/editor/components/Shared/InputImage'

export const props = {
  unique: false,
};

const defaultValues = {
  texts : {
    'services-2--title' : 'Our Services',
    'services-2--description' : 'Description',
    'services-2--title1' : 'Service 1',
    'services-2--description1' : 'Description 1',
    'services-2--title2' : 'Service 2',
    'services-2--description2' : 'Description 2',
    'services-2--title3' : 'Service 3',
    'services-2--description3' : 'Description 3',
  },
  images : {
    'services-2--image1' : 'https://via.placeholder.com/150',
    'services-2--image2' : 'https://via.placeholder.com/150',
    'services-2--image3' : 'https://via.placeholder.com/150',
  }
}

export function InputTemplate({ item, index, state, setState, className }) {
  const [ images, setImages ] = useState({
    'services-2--image1' : defaultValues.images['services-2--image1'],
    'services-2--image2' : defaultValues.images['services-2--image2'],
    'services-2--image3' : defaultValues.images['services-2--image3'],
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
      <section className={ styles[`services-2`] }>
        <article className={ styles[`services-2__summary`] }>
          <input
            type="text"
            name="services-2--title"
            defaultValue={ defaultValues.texts['services-2--title'] }
            placeholder={ defaultValues.texts['services-2--title'] }

            className={ styles[`services-2__title`] }
          />
          <input
            type="text"
            name="services-2--description"
            defaultValue={ defaultValues.texts['services-2--description'] }
            placeholder={ defaultValues.texts['services-2--description'] }

            className={ styles[`services-2__description`] }
          />
        </article>

        <section className={ styles[`services-2__container`] }>
          { 
            Array.from({ length : 3}).map((_, index) => {
            const title = defaultValues.texts[`services-2--title${index + 1}`]
            const description = defaultValues.texts[`services-2--description${index + 1}`]
            const imageName = `services-2--image${index + 1}`
            const image = images[ imageName ]

            const background = {
              backgroundImage: `url(${image})`
            }

            return (
              <article 
                key={index} 
                className={ styles[`services-2__service`] }
                style={ background }
              >
                <InputImage
                  name={ imageName }
                  setImage={(value) => handleImageChange(imageName, value)}
                />
                {/* <div className={ styles[`services-2__service-overlay`] }></div> */}
                
                <input 
                  type="text"
                  name={`services-2--title${index + 1}`}
                  defaultValue={title}
                  placeholder={title}

                  className={ styles[`services-2__service-title`]}
                />
                <input 
                  type="text"
                  name={`services-2--description${index + 1}`}
                  defaultValue={description}
                  placeholder={description}

                  className={ styles[`services-2__service-description`] }
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
