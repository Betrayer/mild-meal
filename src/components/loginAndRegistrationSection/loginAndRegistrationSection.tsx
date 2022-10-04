import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../loginForm/loginForm";
import RegistrationForm from "../registrationForm/registrationForm";
import { app } from "../../configs/firebase.config";
import { LoginData } from "../../types/types";
import { loginResponce } from "../../redux/actions/auth";

import "./loginAndRegistrationSection.scss";

interface LoginAndRegistrationProps {
  handleLoginButton: () => void;
}

const LoginAndRegistrationSection: FC<LoginAndRegistrationProps> = ({
  handleLoginButton,
}) => {
  const [formSwitcher, setFormSwitcher] = useState(true);
  const [login, setLogin] = useState<LoginData>({
    email: "",
    password: "",
  });

  const switchForm = (): void => {
    setFormSwitcher(!formSwitcher);
  };

  const auth = getAuth(app);
  const dispatch = useDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        dispatch(loginResponce(user.accessToken));
        console.log(user); //TBD: вытащить и сохранить нужные данные
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR:", errorCode, "ISSUE:", errorMessage);
      });
  };

  const handleInput = (e: FormEvent<HTMLInputElement>): void => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <section className="login-and-registration-section">
      {formSwitcher ? (
        <LoginForm
          switchForm={switchForm}
          handleLoginButton={handleLoginButton}
          handleFormSubmit={handleFormSubmit}
          handleInput={handleInput}
          login={login}
        />
      ) : (
        <RegistrationForm
          switchForm={switchForm}
          handleLoginButton={handleLoginButton}
        />
      )}
    </section>
  );
};

export default LoginAndRegistrationSection;
