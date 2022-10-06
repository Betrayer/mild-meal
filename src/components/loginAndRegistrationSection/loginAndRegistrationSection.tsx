import React, { FC, useState } from "react";
import LoginForm from "../loginForm/loginForm";
import RegistrationForm from "../registrationForm/registrationForm";
import "./loginAndRegistrationSection.scss";

interface LoginAndRegistrationProps {
  handleLoginButton: () => void;
}

const LoginAndRegistrationSection: FC<LoginAndRegistrationProps> = ({
  handleLoginButton,
}) => {
  const [toggleForms, setLoginForm] = useState(true);

  const handleClick = () => {
    setLoginForm(!toggleForms);
  };

  return (
    <section className="login-and-registration-section">
      {toggleForms ? (
        <LoginForm
          handleClick={handleClick}
          handleLoginButton={handleLoginButton}
        />
      ) : (
        <RegistrationForm
          handleClick={handleClick}
          handleLoginButton={handleLoginButton}
        />
      )}
    </section>
  );
};

export default LoginAndRegistrationSection;
