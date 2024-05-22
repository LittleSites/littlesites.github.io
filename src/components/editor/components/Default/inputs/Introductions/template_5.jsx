import styles from './styles/template_5.module.css'
import InputTemplateLayout from "@/components/editor/components/Shared/InputTemplateLayout";

export const props = {
  unique: false,
};

const defaultValues = {
  title: 'Title',
}

export function InputTemplate({ item, index, state, setState, className }) {
  return (
    <InputTemplateLayout
      item={item}
      index={index}
      state={state}
      setState={setState}
      className={className}
    >
      
      <section className={ styles[`introduction-5`] }>

        <input 
          type="text"
          placeholder={ defaultValues.title }
          defaultValue={ defaultValues.title }
          name='introduction-5--title'
          className={ styles[`introduction-5__title`] }
        />

      </section>

    </InputTemplateLayout>
  )
}