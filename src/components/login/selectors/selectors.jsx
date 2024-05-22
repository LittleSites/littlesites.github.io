import styles from "@/styles/pages/sites/login.module.css";
import selectorsStyles from "./selectors.module.css";

export default function Selectors({ loginSelector, setLoginSelector }) {
  return (
    <article className={selectorsStyles.selectorsContainer}>
      <div
        className={
          loginSelector
            ? selectorsStyles.selected + " " + selectorsStyles.loginDiv
            : selectorsStyles.notSelected + " " + selectorsStyles.loginDiv
        }
        onClick={() => {
          setLoginSelector(true);
        }}
      >
        <h2>Iniciar sesión</h2>
      </div>
      <div
        className={
          loginSelector
            ? selectorsStyles.notSelected + " " + selectorsStyles.registerDiv
            : selectorsStyles.selected + " " + selectorsStyles.registerDiv
        }
        onClick={() => setLoginSelector(false)}
      >
        <h2>Crear cuenta</h2>
      </div>
    </article>
  );
}
