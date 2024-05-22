import styles from './styles/template_1.module.css'
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";

export const props = {
  unique: false,
};

const defaultValues = {
  title: 'About',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
  consectetur, nunc nec vehicula ultricies, nunc elit ultricies
  sapien, nec ultricies nunc elit nec sapien. Nullam consectetur, nunc
  nec vehicula ultricies, nunc elit ultricies sapien, nec ultricies
  nunc elit nec sapien.`
}

export function InputTemplate({ item, index, state, setState, className }) {
  return (
    <InputTemplateLayout
      item={ item }
      index={ index }
      state={ state }
      setState={ setState }
      className={ className }
    >
      <section className={ styles[`about-1`] }>

        <input 
          type="text"
          name="about-1--title"
          defaultValue={ defaultValues.title }
          placeholder={ defaultValues.title }
          className={ styles[`about-1__title`] }
        />
        <textarea 
          name="about-1--content"
          defaultValue={ defaultValues.content }
          placeholder={ defaultValues.content }
          className={ styles[`about-1__description`] }
        ></textarea>
        
      </section>

    </InputTemplateLayout>
  )
}
