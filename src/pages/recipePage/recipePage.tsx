import React, { FC } from "react";
import RecipeDescriptionSection from "../../components/sections/recipeDescriptionSection/recipeDescriptionSection";
import RecipeNutritionsSection from "../../components/sections/recipeNutritionsSection/recipeNutritionsSection";

import "./recipePage.scss";

const RecipePage: FC = () => {
  return (
    <div className="recipePage">
      <RecipeDescriptionSection />
      <RecipeNutritionsSection />
    </div>
  );
};

export default RecipePage;
