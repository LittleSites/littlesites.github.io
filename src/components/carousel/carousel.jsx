'use client'

import Image from 'next/image'
import { useState } from 'react'

const carouselObjects = [
  {
    img: '/images/gato.gif',
    text: 'texto descriptivo 1',
    text2: 'Hola'
  },
  {
    img: '/images/gradient.png',
    text: 'texto descriptivo 2',
    text2: 'Hola2'
  },
  {
    img: '/images/gato.gif',
    text: 'texto descriptivo 3',
    text2: 'Hola3'
  },
  {
    img: '/images/gradient.png',
    text: 'texto descriptivo 4',
    text2: 'Hola4'
  }
]

export default function Carousel () {
  const [selectedIndex, SetSelectedIndex] = useState(0)

  const previous = () => {
    if (selectedIndex <= 0) {
      SetSelectedIndex(carouselObjects.length - 1)
    } else {
      SetSelectedIndex(selectedIndex - 1)
    }
  }

  const next = () => {
    if (selectedIndex >= carouselObjects.length - 1) {
      SetSelectedIndex(0)
    } else {
      SetSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <>
      <section className='carousel'>
        <article className='carousel-article'>
          <button className='right btn' onClick={previous}>
            <Image
              src='/images/icons/arrow-prev.svg'
              width={150}
              height={150}
              alt='arrow'
              className='carousel-arrow'
            />
          </button>
          <div>
            <p>{carouselObjects[selectedIndex].text2}</p>
            <Image
              src={carouselObjects[selectedIndex].img}
              width={500}
              height={500}
              alt='Gato gif'
            />
            <p>{carouselObjects[selectedIndex].text}</p>
          </div>
          <button className='left btn' onClick={next}>
            <Image
              src='/images/icons/arrow-next.svg'
              width={150}
              height={150}
              alt='arrow'
              className='carousel-arrow'
            />
          </button>
        </article>
      </section>
    </>
  )
}
