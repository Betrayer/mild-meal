import React, { FC, useState } from "react";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import Header from "../header/header";
import LoginAndRegistrationSection from "../loginAndRegistrationSection/loginAndRegistrationSection";
import "./index.scss";

const App: FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginButton = () => {
    setShowLoginModal(!showLoginModal)
  }

  return (
      <div className="appWrapper">
        <Header handleLoginButton={handleLoginButton}/>
        {showLoginModal && <LoginAndRegistrationSection handleLoginButton={handleLoginButton}/>}
        {/* <HomePage /> */}
        {/* <RecipePage/> */}
        {/* <LoginAndRegistrationSection/> */}
      </div>
  );
};

export default App;
