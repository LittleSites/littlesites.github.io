import Link from 'next/link'

import styles from './headers_statics/template_5.module.css'

export function StaticTemplate({ values }) {
  const home = values.texts['header-5--home']
  const services = values.texts['header-5--services']
  const about = values.texts['header-5--about']
  const contact = values.texts['header-5--contact']

  return (
    <header className={ styles[`header-5`] }>
      <nav className={ styles[`header-5__navbar`] }>
        <ul className={ styles[`header-5__list`] }>
          <li>
            <Link 
              href="#"
              className={ styles[`header-5__list-item`] }
            >{ home }</Link>
          </li>
          <li>
            <Link 
              href="#about"
              className={ styles[`header-5__list-item`] }
            >{ about }</Link>
          </li>
          <li>
            <Link 
              href="#services"
              className={ styles[`header-5__list-item`] }
            >{ services }</Link>
          </li>
          <li>
            <Link 
              href="#contact"
              className={ styles[`header-5__list-item`] }
            >{ contact }</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}