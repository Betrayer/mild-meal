import React, { FC } from "react";
import RecipeDescriptionSection from "../../components/recipeDescriptionSection/recipeDescriptionSection";
import RecipeNutritionsSection from "../../components/recipeNutritionsSection/recipeNutritionsSection";

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
