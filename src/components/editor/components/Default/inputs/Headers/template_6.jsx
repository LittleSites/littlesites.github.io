import styles from "./headers_statics/template_6.module.css"
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";

export const props = {
  unique: true,
};

const defaultValues = {
  about: "About",
  services: "Services",
}

export function InputTemplate({ item, index, state, setState }) {
  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
    >

      <header className={ styles[`header-6`] }>
        <nav className={ styles[`header-6__navbar`] }>
          <ul className={ styles[`header-6__list`] }>
            <li>
              <input
                type="text"
                name="header-6--about"
                className={ styles[`header-6__list-item`] }

                placeholder={ defaultValues.about }
                defaultValue={ defaultValues.about }
              />
            </li>
            <li>
              <input
                type="text"
                name="header-6--services"
                className={ styles[`header-6__list-item`] }

                placeholder={ defaultValues.services }
                defaultValue={ defaultValues.services }
              />
            </li>
          </ul>
        </nav>
      </header>

    </InputTemplateLayout>
  )
}
