import React, { FC, useState } from "react";
import "./loginAndRegistrationSection.scss";

const LoginAndRegistrationSection: FC = () => {
  const [loginForm, setLoginForm] = useState(true);

  const switchForms = () => {
    setLoginForm(!loginForm);
  };

  const login = () => {
    alert("logging in");
  };

  const register = () => {
    alert("regging");
  };

  return (

    <section className="login-and-registration-section">
      <div
        className={`login-and-registration-section__login-form ${
          loginForm ? "" : "hidden"
        }`}
      >
        <div className="login-and-registration-section__login-form__fields"></div>
        <div className="login-and-registration-section__login-form__buttons ">
          <button
            className="login-and-registration-section__login-form__buttons__login-button"
            onClick={login}
          >
            login
          </button>
          <button
            className="login-and-registration-section__login-form__buttons__register-button"
            onClick={switchForms}
          >
            register
          </button>
        </div>
      </div>

      <div
        className={`login-and-registration-section__registration-form ${
          loginForm ? "hidden" : ""
        }`}
      >
        <div className="login-and-registration-section__registration-form__fields"></div>
        <div className="login-and-registration-section__registration-form__buttons ">
          <button
            className="login-and-registration-section__registration-form__buttons__register-button"
            onClick={register}
          >
            register
          </button>
          <button
            className="login-and-registration-section__registration-form__buttons__login-button"
            onClick={switchForms}
          >
            login
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginAndRegistrationSection;
