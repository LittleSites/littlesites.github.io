import Link from 'next/link'
import styles from './headers_statics/template_4.module.css'

export function StaticTemplate({ values }) {
  const title = values.texts['header-4--title']
  const services = values.texts['header-4--services']
  const about = values.texts['header-4--about']

  return (
    <header className={ styles[`header-4`] }>
      <Link href="#">
        <h1
          className={ styles[`header-4__title`] }
        >{ title }</h1>
      </Link>

      <nav className={ styles[`header-4__navbar`] }>
        <ul className={ styles[`header-4__list`] }>
          <li>
            <Link 
              href="#services"
              className={ styles[`header-4__list-item`] }
            >{ services }</Link>
          </li>
          <li>
            <Link 
              href="#about"
              className={ styles[`header-4__list-item`] }
            >{ about }</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
