import React, { FC, useEffect, useRef } from "react";

import "./loginForm.scss";

interface LoginProps {
  handleClick: () => void;
  handleLoginButton: () => void;
}

const handleSubmit = (e: any) => {
  e.preventDefault();
  alert("login");
};

const LoginForm: FC<LoginProps> = ({ handleClick, handleLoginButton }) => {
  return (
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="login-form__close-button" onClick={handleLoginButton} />
      <span className="login-form__title">login form</span>
      <input className="login-form__email" type="text" placeholder="email" />
      <input
        className="login-form__password"
        type="text"
        placeholder="passsword"
      />
      <button className="login-form__buttons__login-button" type="submit">
        login
      </button>
      <button
        className="login-form__buttons__register-button"
        onClick={handleClick}
      >
        i don't have an account, i wanna register
      </button>
    </form>
  );
};

export default LoginForm;
