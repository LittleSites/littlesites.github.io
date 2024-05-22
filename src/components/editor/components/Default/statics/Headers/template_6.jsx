import Link from "next/link"

import styles from "./headers_statics/template_6.module.css"

export function StaticTemplate({ values }) {
  const services = values.texts['header-6--services']
  const about = values.texts['header-6--about']

  return (
    <header className={ styles[`header-6`] }>
      <nav className={ styles[`header-6__navbar`] }>
        <ul className={ styles[`header-6__list`] }>
          <li>
            <Link
              href="#about"
              className={ styles[`header-6__list-item`] }
            >{ about }</Link>
          </li>
          <li>
            <Link
              href="#services"
              className={ styles[`header-6__list-item`] }
            >{ services }</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
