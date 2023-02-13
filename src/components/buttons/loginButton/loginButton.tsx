import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { getAuth, signOut } from "firebase/auth";
import ThemeChangeButton from "../themeChangeButton/themeChangeButton";
import { useDispatch } from "react-redux";
import { isAuth, loginResponce } from "../../../redux/actions/auth";

import "./loginButton.scss";

interface LoginButtonProps {
  handleLoginButton: () => void;
}

const LoginButton: FC<LoginButtonProps> = ({ handleLoginButton }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const logOut = () => {
    signOut(auth);
    dispatch(isAuth(false));
    dispatch(loginResponce({
      uid: "",
      accessToken: "",
      displayName: "",
      email: "",
      emailVerified: false,
      isAnonymous: false,
    }));
  };

  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuth);
  return (
    <>
      {isLoggedIn ? (
        <span className="login-button" onClick={logOut}>
          log out
        </span>
      ) : (
        <span className="login-button" onClick={handleLoginButton}>
          log in
        </span>
      )}
      {window.innerWidth >= 768 && <ThemeChangeButton />}
    </>
  );
};

export default LoginButton;
