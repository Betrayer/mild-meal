import React, { FC } from "react";
import Header from "../header/header";
import HomePage from "../../pages/homepage/HomePage";
import RecipePage from "../../pages/recipePage/recipePage";
import RecipeCard from "../recipeCard/recipeCard";
import "./index.scss";

const App: FC = () => {
  return (
    <>
      <div className="appWrapper">
        {/* <Header /> */}
        {/* <HomePage /> */}
        {/* <RecipePage/> */}
        <RecipeCard/>
      </div>
    </>
  );
};

export default App;
