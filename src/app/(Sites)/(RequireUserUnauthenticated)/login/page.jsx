"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/styles/pages/sites/login.module.css";
import Selectors from "@/components/login/selectors/selectors";
import LoginForm from "@/components/login/loginForm/loginForm";
import RegisterForm1 from "@/components/login/registerForms/registerForm1";
import RegisterForm2 from "@/components/login/registerForms/registerForm2";
import RegisterForm3 from "@/components/login/registerForms/registerForm3";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";
import { loginUser } from "@/libs/api/auth/login"
import { signup } from "@/libs/api/auth/signup";

const Page = () => {
  const router = useRouter();
  const [loginSelector, setLoginSelector] = useState(true);
  const [signInSelector, setSignInSelector] = useState(0);
  const [isPasswordRight, setIsPasswordRight] = useState(true);
  const [cargando, setCargando] = useState(false);

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    setCargando(true);

    const form = event.target;

    const password = form.password.value;
    const verify_password = form.verify_password.value;

    const username = form.username.value;
    const email = form.email.value;
    const names = form.names.value;
    const lastname = form.lastname.value;

    const userData = {
      username,
      password,
      email,
      first_name: names,
      last_name: lastname,
    };

    if (password == verify_password) {

      setIsPasswordRight(true);
      let accountWasCreated = await signup(userData);

      if ( accountWasCreated ) {
        loginUser(username, password);
      }

    } else {
      fireErrorAlert('Las contraseñas no coinciden.');
    }
  };

  const DotsSelector = (dotIndex) => {
    if (signInSelector === dotIndex) {
      return styles.selectedDot;
    }
    return styles.dot;
  };


  return (
    <section className={styles.background}>
      <article className={styles.GeneralContainer}>
        <Selectors
          loginSelector={loginSelector}
          setLoginSelector={setLoginSelector}
        />

        <div
          className={loginSelector ? styles.hidden : styles.pointsContainer}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={DotsSelector(index)}
              onClick={() => {
                setSignInSelector(index);
              }}
            />
          ))}
        </div>

        <div>
          <LoginForm
            loginSelector={loginSelector}
            cargando={cargando}
            setCargando={setCargando}
          />

          <form onSubmit={handleSubmitSignIn}>
            <RegisterForm1
              loginSelector={loginSelector}
              registerSelector={signInSelector}
              setRegisterSelector={setSignInSelector}
            />
            <RegisterForm2
              loginSelector={loginSelector}
              registerSelector={signInSelector}
              setRegisterSelector={setSignInSelector}
            />
            <RegisterForm3
              loginSelector={loginSelector}
              registerSelector={signInSelector}
              isPasswordRight={isPasswordRight}
            />
          </form>
        </div>
      </article>
    </section>
  );
}

export default Page;