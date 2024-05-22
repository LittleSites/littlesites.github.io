import styles from './LinkInput.module.css'

export default function LinkInput({ name, label }) {
  return (
    <section className={ styles[`link-input`] }>
      {/* <label
        htmlFor={name}
        className={styles[`link-input__label`]}
      >{ label }</label> */}

      <input
        type="text"
        name={name}
        id={name}
        placeholder={ label }

        className={styles[`link-input__input`]}
      />
    </section>
  )
}
