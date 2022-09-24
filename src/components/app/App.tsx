import React, { FC } from "react";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import Header from "../header/header";
import LoginAndRegistrationSection from "../loginAndRegistrationSection/loginAndRegistrationSection";
import "./index.scss";

const App: FC = () => {
  return (
    <>
      <div className="appWrapper">
        <Header />
        {/* <HomePage /> */}
        <RecipePage/>
        <LoginAndRegistrationSection/>
      </div>
    </>
  );
};

export default App;
