import MainButton from "@/components/buttons/MainButton";
import styles from "@/styles/pages/sites/login.module.css";

export default function RegisterForm2({ loginSelector, registerSelector, setRegisterSelector, }) {
  return (
    <div
      className={
        loginSelector
          ? styles.hidden
          : registerSelector == 1
          ? styles.registerFormContainer
          : styles.hidden
      }
    >
      <div className={styles.inputsRegisterContainer}>
        <label htmlFor="names" className={styles.label}>
          Nombres
        </label>
        <input
          type="text"
          placeholder="Nombres"
          id="names"
          className={styles.input}
        />

        <label htmlFor="lastname" className={styles.label}>
          Apellidos
        </label>
        <input
          type="text"
          placeholder="Apellidos"
          id="lastname"
          className={styles.input}
        />
      </div>

      <MainButton 
        className={styles.submitbtn} 
        onClick={(e) => {
          setRegisterSelector(2);
        }}
      >
        Siguiente
      </MainButton>
    </div>
  );
}
