import Image from "next/image"
import styles from '@/styles/components/cards/SitesCard.module.css'

export default function SiteCard() {
  return (
    <article>
      <Image src="/site.jpg" width={300} height={200} alt="site" />
      <h2>Site Card</h2>
      <p>Site card content</p>
    </article>
  )
}
