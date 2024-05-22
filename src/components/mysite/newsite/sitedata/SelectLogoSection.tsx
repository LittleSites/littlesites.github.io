import fomrStyle from '@/styles/components/mysite/newsite/FormSection.module.css';
import { ChangeEvent, createRef, useEffect, useState } from 'react';
import sitesCache from '@/libs/utils/cache';

export default function SelectLogoSection({ setSiteLogo, logo }: any) {
  const inputRef = createRef();
  const logoRef = createRef();

  const handleSelectLogo = (event: any) => {
    event.preventDefault();

    // @ts-ignore
    inputRef.current.click();
  };

  const setLogoPreview = (logo: File) => {
    if (logo) {
      const fileReader = new FileReader();

      fileReader.onload = (evento: any) => {
        const urlTemporal = evento.target.result;
        // @ts-ignore
        logoRef.current.src = urlTemporal;
      };

      fileReader.readAsDataURL(logo);
    }
  };
  
  const handleLogoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // @ts-ignore
    const logo = event.target.files[0];
    if ( !logo ) return;
    if(logo.type === "image/png") setSiteLogo(logo);
  };

  useEffect(() => {
    setLogoPreview(logo);
  }, [logo]);

  return (
    <div className={fomrStyle.dataSection}>
      <p className={fomrStyle.label}>Logo del site</p>
      <br />
      <img
        //@ts-ignore
        ref={logoRef}
        src='https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg?w=740&t=st=1712973061~exp=1712973661~hmac=a9b044f8cbf6696d29e9fa2e811403ebcece5b40491ce8438d0b1bac2809f0c1'
        className={fomrStyle.logo}
        width={300}
        height={300}
      />
      <br />
      <button className={fomrStyle.input} onClick={handleSelectLogo}>
        Selecciona una imagen
      </button>

      <input
        //@ts-ignore
        ref={inputRef}
        name='siteLogo'
        type='file'
        accept='image/png'
        onChange={handleLogoSelected}
        style={{ display: 'none' }}
      />
    </div>
  );
}
