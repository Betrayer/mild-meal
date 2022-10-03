import React, { FC, FormEvent } from "react";
import { LoginData } from "../../types/types";

import "./loginForm.scss";

interface LoginProps {
  switchForm: () => void;
  handleLoginButton: () => void;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInput: (e: FormEvent<HTMLInputElement>) => void;
  login: LoginData;
}

const LoginForm: FC<LoginProps> = ({
  switchForm,
  handleLoginButton,
  handleFormSubmit,
  handleInput,
  login,
}) => {
  return (
    <form className="login-form" onSubmit={(e) => handleFormSubmit(e)}>
      <div className="login-form__close-button" onClick={handleLoginButton} />
      <span className="login-form__title">login form</span>
      <input
        required
        type="email"
        name="email"
        placeholder="email"
        value={login.email}
        onChange={handleInput}
      />
      <input
        required
        type="password"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleInput}
      />
      <button className="login-form__buttons__login-button" type="submit">
        login
      </button>
      <button
        className="login-form__buttons__register-button"
        onClick={switchForm}
      >
        i don't have an account, i wanna register
      </button>
    </form>
  );
};

export default LoginForm;
