import MainButton from "@/components/buttons/MainButton";
import styles from "@/styles/pages/sites/login.module.css"

export default function RegisterForm1({ loginSelector, registerSelector, setRegisterSelector }) {
  return (
    <div
      className={
        loginSelector
          ? styles.hidden
          : registerSelector == 0
          ? styles.registerFormContainer
          : styles.hidden
      }
    >
      <div className={styles.inputsRegisterContainer}>
        <label htmlFor="username" className={styles.label}>
          Nombre de usuario
        </label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>
          Correo electrónico
        </label>
        
        <input
          type="text"
          placeholder="Correo electrónico"
          id="email"
          className={styles.input}
        />
      </div>

      <MainButton 
        className={styles.submitbtn} 
        onClick={(e) => {
          setRegisterSelector(1);
        }}
      >
        Siguiente
      </MainButton>
      
    </div>
  );
}
