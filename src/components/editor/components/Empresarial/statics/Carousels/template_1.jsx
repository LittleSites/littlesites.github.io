import { useState } from 'react';
import style from './styles/template_1.module.css';

export const StaticTemplate = ({ values }) => {
  const texts = values.texts;
  const images = values.images;

  const [imgUrlShowing, setImgUrlShowing] = useState(images.imageUrlOne);

  console.log(texts);
  console.log(images);

  return (
    <section 
      className={style.carouselMain}
    >
      <img 
        className={style.carouselImg} 
        alt='carouselImg' src={imgUrlShowing} 
      />
      <section 
        className={style.carouselSelector}
      >
        <div 
          className={style.option} 
          onClick={() => setImgUrlShowing(images.imageUrlOne)}
        >
          <div className={style.optionLine} />
          <p 
            className={style.title}
          >
            {texts.titleOne}
          </p>
          <p 
            className={style.description}
          >
            {texts.descOne}
          </p>
        </div>
        <div 
          className={style.option} 
          onClick={() => setImgUrlShowing(images.imageUrlTwo)}
        >
          <div className={style.optionLine} />
          <p 
            className={style.title}
          >
            {texts.titleTwo}
          </p>
          <p 
            className={style.description}
          >
            {texts.descTwo}
          </p>
        </div>
        <div 
          className={style.option} 
          onClick={() => setImgUrlShowing(images.imageUrlThree)}
        >
          <div className={style.optionLine} />
          <p 
            className={style.title}
          >
            {texts.titleThree}
          </p>
          <p 
            className={style.description}
          >
            {texts.descThree}
          </p>
        </div>
      </section>
    </section>
  );
};
