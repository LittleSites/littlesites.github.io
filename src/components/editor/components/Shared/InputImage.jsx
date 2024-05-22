import styles from './InputImage.module.css'

import { warningAlert } from "@/libs/misc/alerts/warningAlert";
import { isValidImage } from "@/libs/misc/validation/file-validation";

export default function InputImage({ name, setImage }) {
  return (
    <>
      <label 
        htmlFor={ name }
        className={ styles[`input-image__label`] }
        onClick={ (e) => {
          e.preventDefault()
          document.querySelector(`input[name=${ name }]`).click()
        }
      }
      >Select an image</label>
      <input
        type='file'
        name={ name }
        accept='image/*'
        className={ styles[`input-image__input`] }
        onChange={ (e) => {
          const file = e.target.files[0]
          if ( !file ) return
          if (isValidImage(file)) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => setImage(reader.result)
          } else {
            warningAlert('Invalid image')
          }
        }}
      />

    </>
  )
}
