import React, { FC } from "react";

import "./registrationForm.scss";

interface RegistrationProps {
  handleClick: () => void;
  handleLoginButton: () => void;
}

const handleSubmit = (e: any) => {
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
      <input
        className="registration-form__name registration-input"
        type="text"
        placeholder="name"
      />
      <input
        className="registration-form__email registration-input"
        type="text"
        placeholder="email"
      />
      <input
        className="registration-age registration-input"
        type="text"
        placeholder="age"
      />
      <input
        className="registration-city registration-input"
        type="text"
        placeholder="city"
      />
      <input
        className="registration-form__password registration-input"
        type="text"
        placeholder="passsword"
      />
      <input
        className="registration-form__confirm-password registration-input"
        type="text"
        placeholder="confirm passsword"
      />
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
