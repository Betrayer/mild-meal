import React, { FC } from "react";
import ThemeChangeButton from "../themeChangeButton/themeChangeButton";

interface LoginButtonProps {
  handleLoginButton: () => void;
}

const LoginButton: FC<LoginButtonProps> = ({ handleLoginButton }) => {
  return (
    <>
      <span className="login-button" onClick={handleLoginButton}>
        log in
      </span>
      {window.innerWidth >= 768 && <ThemeChangeButton />}
    </>
  );
};

export default LoginButton;
