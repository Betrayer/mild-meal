import React, { FC } from "react";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import Header from "../header/header";
import "./index.scss";

const App: FC = () => {
  return (
    <>
      <div className="appWrapper">
        <Header />
        {/* <HomePage /> */}
        <RecipePage/>
      </div>
    </>
  );
};

export default App;
