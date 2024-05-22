import styles from './headers_statics/template_4.module.css'
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";

export const props = {
  unique: true,
};

const defaultValues = {
  title: 'Title',
  services: 'Services',
  about: 'About',
}

export function InputTemplate({ item, index, state, setState }) {
  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
    >
      <header className={ styles[`header-4`] }>
          <input
            type="text"
            name='header-4--title'
            className={ styles[`header-4__title`] }

            placeholder={ defaultValues.title }
            defaultValue={ defaultValues.title }
          />

        <nav className={ styles[`header-4__navbar`] }>
          <ul className={ styles[`header-4__list`] }>
            <li>
              <input
                type='text'
                name='header-4--services'
                className={ styles[`header-4__list-item`] }

                placeholder={ defaultValues.services }
                defaultValue={ defaultValues.services }
              />
            </li>
            <li>
              <input
                type='text'
                name='header-4--about'
                className={ styles[`header-4__list-item`] }

                placeholder={ defaultValues.about }
                defaultValue={ defaultValues.about }
              />
            </li>
          </ul>
        </nav>
      </header>

    </InputTemplateLayout>
  )
}
