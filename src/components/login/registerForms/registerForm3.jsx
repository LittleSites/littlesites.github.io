import MainButton from "@/components/buttons/MainButton";
import styles from "@/styles/pages/sites/login.module.css";

export default function RegisterForm1({ loginSelector, registerSelector, isPasswordRight }) {
  return (
    <div
      className={
        loginSelector
          ? styles.hidden
          : registerSelector == 2
          ? styles.registerFormContainer
          : styles.hidden
      }
    >
      <div className={styles.inputsRegisterContainer}>
        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          className={styles.input}
        />

        <label htmlFor="verify_password" className={styles.label}>
          Repetir contraseña
        </label>
        <input
          type="password"
          placeholder="Repetir contraseña"
          id="verify_password"
          className={styles.input}
        />

        {/* <p className={isPasswordRight ? formStyles.hidden : "error-p"}>
            La contraseña debe ser igual <br /> en ambos campos
          </p> */}

        {/* <p className={cargando ? "cargando" : "hidden"}>Cargando...</p> */}
      </div>

      <MainButton 
        className={styles.submitbtn}
        type="submit"
        onClick={() => {}}
      >
        Crear cuenta
      </MainButton>
    </div>
  );
}