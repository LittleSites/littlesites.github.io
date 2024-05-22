import styles from '@/styles/components/cards/WhiteBox.module.css';
import Image from 'next/image';

interface Props {
  title: string;
  img: string;
  onClick?: () => void;
}

const ALT_MSG = (title: string) => `${title} Logo`;

export default function WhiteBox({ title, img, onClick }: Props) {
  return (
    <article className={styles.WhiteBox} onClick={onClick}>
      <p className={styles.WhiteBox__Title}>{title}</p>
      <figure className={styles.WhiteBox__Figure}>
        <Image src={img} height={400} width={300} alt={ALT_MSG(title)} />
      </figure>
    </article>
  );
}
