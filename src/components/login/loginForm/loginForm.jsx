import styles from "@/styles/pages/sites/login.module.css";
import MainButton from "@/components/buttons/MainButton";
import { loginUser } from "@/libs/api/auth/login";

export default function LoginForm({ loginSelector, cargando, setCargando }) {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setCargando(true);

    const username = e.target.username.value;
    const password = e.target.password.value;

    loginUser(username, password).then((credentialsAreCorrect) => {

      setCargando(false);
      if (credentialsAreCorrect) window.location.reload();

    });
  };

  return (
    <form
      onSubmit={handleSubmitLogin}
      className={loginSelector ? styles.form : styles.hidden}
    >
      <div className={styles.inputsContainer}>
        <label htmlFor="username" className={styles.label}>
          Nombre de usuario
        </label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          className={styles.input}
        />

        <p className={cargando ? styles.loading : styles.hidden}>Cargando...</p>
      </div>

      <MainButton 
        className={styles.submitbtn} 
        type="submit"
        onClick={() => {}}
      >
        Iniciar sesión
      </MainButton>

    </form>
  );
}
