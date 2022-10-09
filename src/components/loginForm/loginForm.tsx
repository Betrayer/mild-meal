import React, { FC, FormEvent, useRef } from "react";
import { AuthData } from "../../types/types";

import "./loginForm.scss";

interface LoginProps {
  switchForm: () => void;
  handleLoginButton: () => void;
  handleLoginFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleAuthInput: (e: FormEvent<HTMLInputElement>) => void;
  authCredentials: AuthData;
}

const LoginForm: FC<LoginProps> = ({
  switchForm,
  handleLoginButton,
  handleLoginFormSubmit,
  handleAuthInput,
  authCredentials,
}) => {
  const modalRef = useRef(null);

  return (
    <form
      ref={modalRef}
      className="login-form"
      onSubmit={(e) => handleLoginFormSubmit(e)}
    >
      <div className="login-form__close-button" onClick={handleLoginButton} />
      <span className="login-form__title">login form</span>
      <input
        required
        type="email"
        name="email"
        placeholder="email"
        value={authCredentials.email}
        onChange={handleAuthInput}
      />
      <input
        required
        type="password"
        name="password"
        placeholder="password"
        value={authCredentials.password}
        onChange={handleAuthInput}
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
