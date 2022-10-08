import React, { FC, FormEvent, useRef } from "react";
import { AuthData } from "../../types/types";

import "./registrationForm.scss";

interface RegistrationProps {
  switchForm: () => void;
  handleLoginButton: () => void;
  handleRegistrationFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleAuthInput: (e: FormEvent<HTMLInputElement>) => void;
  authCredentials: AuthData;
}

const RegistrationForm: FC<RegistrationProps> = ({
  switchForm,
  handleLoginButton,
  handleRegistrationFormSubmit,
  handleAuthInput,
  authCredentials,
}) => {
  const modalRef = useRef(null);
  return (
    <form
      ref={modalRef}
      className="registration-form"
      onSubmit={(e) => handleRegistrationFormSubmit(e)}
    >
      <div
        className="registration-form__close-button"
        onClick={handleLoginButton}
      />
      <span className="registration-form__title">registration form</span>
      <input type="text" name="name" placeholder="name" />
      <input
        required
        type="email"
        name="email"
        placeholder="email"
        value={authCredentials.email}
        onChange={handleAuthInput}
      />
      <input type="number" name="age" placeholder="age" />
      <input type="text" name="city" placeholder="city" />
      <input
        required
        minLength={5}
        type="password"
        name="password"
        placeholder="password"
        value={authCredentials.password}
        onChange={handleAuthInput}
      />
      <input
        required
        minLength={5}
        type="password"
        name="passwordConfirmation"
        placeholder="confirm passsword"
        value={authCredentials.passwordConfirmation}
        onChange={handleAuthInput}
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
        onClick={switchForm}
      >
        i have an account, i wanna log in
      </button>
    </form>
  );
};

export default RegistrationForm;
