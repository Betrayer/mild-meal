import React, { FC } from "react";
import "./index.scss";
import Header from "../header/header";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import ProfilePage from "../../pages/profilePage/profilePage";

const App: FC = () => {
  return (
    <>
      <div className="appWrapper">
        <Header />
        {/* <HomePage /> */}
        {/* <RecipePage/> */}
        <ProfilePage />
      </div>
    </>
  );
};

export default App;
