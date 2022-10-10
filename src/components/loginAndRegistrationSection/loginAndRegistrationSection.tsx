import React, {
  FC,
  FormEvent,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import LoginForm from "../loginForm/loginForm";
import RegistrationForm from "../registrationForm/registrationForm";
import { app } from "../../configs/firebase.config";
import { AuthData } from "../../types/types";
import { loginResponce, registerResponce, isAuth } from "../../redux/actions/auth";

import "./loginAndRegistrationSection.scss";

interface LoginAndRegistrationProps {
  handleLoginButton: () => void;
}

const LoginAndRegistrationSection: FC<LoginAndRegistrationProps> = ({
  handleLoginButton,
}) => {
  const [formSwitcher, setFormSwitcher] = useState(true);

  const [authCredentials, setAuthCredentials] = useState<AuthData>({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const switchForm = (): void => {
    setFormSwitcher(!formSwitcher);
  };

  const auth = getAuth(app);
  const sectionRef = useRef(null);
  const dispatch = useDispatch();

  const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      authCredentials.email,
      authCredentials.password, 
    )
      .then((userCredential) => {
        const user: any = userCredential.user;
        dispatch(loginResponce(user.accessToken));
        dispatch(isAuth(true));
        handleLoginButton();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR:", errorCode, "ISSUE:", errorMessage);
      });
  };

  const handleRegistrationFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authCredentials.passwordConfirmation === authCredentials.password &&
      createUserWithEmailAndPassword(
        auth,
        authCredentials.email,
        authCredentials.password
      )
        .then((userCredential) => {
          const user: any = userCredential.user;
          dispatch(registerResponce(user.accessToken));
          handleLoginButton();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("ERROR:", errorCode, "ISSUE:", errorMessage);
        });
  };

  const handleAuthInput = (e: FormEvent<HTMLInputElement>): void => {
    setAuthCredentials({
      ...authCredentials,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleOutsideClick = (
    ref: MutableRefObject<null>,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    ref.current === event.target && handleLoginButton();
  };

  return (
    <section
      ref={sectionRef}
      onClick={(event) => handleOutsideClick(sectionRef, event)}
      className="login-and-registration-section"
    >
      {formSwitcher ? (
        <LoginForm
          switchForm={switchForm}
          handleLoginButton={handleLoginButton}
          handleLoginFormSubmit={handleLoginFormSubmit}
          handleAuthInput={handleAuthInput}
          authCredentials={authCredentials}
        />
      ) : (
        <RegistrationForm
          switchForm={switchForm}
          handleRegistrationFormSubmit={handleRegistrationFormSubmit}
          handleLoginButton={handleLoginButton}
          handleAuthInput={handleAuthInput}
          authCredentials={authCredentials}
        />
      )}
    </section>
  );
};

export default LoginAndRegistrationSection;
