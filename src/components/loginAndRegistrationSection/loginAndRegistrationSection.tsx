import React, { FC, useState, useRef, useEffect } from "react";
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

  // const bodyRef = useRef(null);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     //@ts-ignore
  //     if (sectionRef.current.contains(e.target)) {
  //       handleLoginButton();
  //       // console.log(e.target)
  //     }
  //   });
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "escape") {
  //       handleLoginButton();
  //       console.log("123");
  //     }
  //   });

  // return () => {
  // document.removeEventListener("mousedown", handleLoginButton);
  // document.removeEventListener("keydown", handleLoginButton);
  // };
  // }, []);

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
