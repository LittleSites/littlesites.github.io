import styles from './headers_statics/template_5.module.css'
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";

export const props = {
  unique: true,
};

const defaultValues = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  contact: 'Contact',
}

export function InputTemplate({ item, index, state, setState }) {
  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
    >

      <header className={ styles[`header-5`] }>
        <nav className={ styles[`header-5__navbar`] }>
          <ul className={ styles[`header-5__list`] }>
            <li>
              <input
                type='text'
                name='header-5--home'
                className={ styles[`header-5__list-item`] }

                placeholder={ defaultValues.home }
                defaultValue={ defaultValues.home }
              />
            </li>
            <li>
              <input
                type='text'
                name='header-5--about'
                className={ styles[`header-5__list-item`] }

                placeholder={ defaultValues.about }
                defaultValue={ defaultValues.about }
              />
            </li>
            <li>
              <input
                type='text'
                name='header-5--services'
                className={ styles[`header-5__list-item`] }

                placeholder={ defaultValues.services }
                defaultValue={ defaultValues.services }
              />
            </li>
            <li>
              <input
                type='text'
                name='header-5--contact'
                className={ styles[`header-5__list-item`] }

                placeholder={ defaultValues.contact }
                defaultValue={ defaultValues.contact }
              />
            </li>
          </ul>
        </nav>
      </header>

    </InputTemplateLayout>
  )
}