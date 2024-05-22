import style from '@/styles/components/mysite/sitelist/SiteCard.module.css';
import MainButton from '../../buttons/MainButton';
import { useRouter } from 'next/navigation';
import SiteManager from '@/libs/api/SiteManager';
import { useEffect } from 'react';
import Image from 'next/image';

export const SiteCard = ({ siteName, siteLogo, siteId, deleteSite }: any) => {
  const router = useRouter();

  return (
    <div className={style.siteCard}>
      <Image className={style.logo} src={siteLogo} alt='site logo' width={300} height={300} />
      <section className={style.cardInfoContainer}>
        <div className={style.infoTextSection}>
          <h4 className={style.siteTitle}>{siteName}</h4>
          <p>https://sites.com/site/{siteId}</p>
        </div>
        <div className={style.buttonsSection}>
          <MainButton
            onClick={() => {
              deleteSite(siteId);
            }}
          >
            Eliminar
          </MainButton>
          <MainButton
            onClick={() => {
              router.push(`/site/${siteId}`);
            }}
          >
            Ver site
          </MainButton>
        </div>
      </section>
    </div>
  );
};
