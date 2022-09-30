import React, { FC, FormEvent } from "react";

import "./registrationForm.scss";

interface RegistrationProps {
  handleClick: () => void;
  handleLoginButton: () => void;
}

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  alert("registration");
};

const RegistrationForm: FC<RegistrationProps> = ({
  handleClick,
  handleLoginButton,
}) => {
  return (
    <form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
      <div
        className="registration-form__close-button"
        onClick={handleLoginButton}
      />
      <span className="registration-form__title">registration form</span>
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="number" placeholder="age" />
      <input type="text" placeholder="city" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="confirm passsword" />
      <label className="checkbox-wrapper">
        <input className="registration-form__checkbox" type="checkbox" /> i
        promise to be a good boy/girl/helicopter
      </label>
      <button
        className="registration-form__buttons__register-button"
        type="submit"
      >
        register
      </button>
      <button
        className="registration-form__buttons__login-button"
        onClick={handleClick}
      >
        i have an account, i wanna log in
      </button>
    </form>
  );
};

export default RegistrationForm;
