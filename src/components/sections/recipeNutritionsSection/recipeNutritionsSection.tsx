import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { nanoid } from "nanoid";
import "./recipeNutritionsSection.scss";

const RecipeNutritionsSection: FC = () => {
  const [nutritionsPosition, setNnutritionsPosition] = useState("hidden-under");
  const [buttonKeyword, setButtonKeyword] = useState("show");

  const handleNutritionsButton = () => {
    setNnutritionsPosition(nutritionsPosition ? "" : "hidden-under");
    setButtonKeyword(buttonKeyword === "show" ? "hide" : "show");
  };
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  const recipe = useSelector((state: RootState) => state.recipes.chosenRecipe);

  return (
    <section
      className={`recipe-nutritions-section ${nutritionsPosition} ${currentThemeColor}`}
    >
      <div className="recipe-nutritions-section__content">
        <span className="recipe-nutritions-section__content__title">
          Nutritions:
        </span>
        <ul className="recipe-nutritions-section__content__nutritions">
          {recipe.nutrition.nutrients.map((item: any) => (
            <li key={nanoid(10)}>
              <span>{item.name}</span>
              <div />
              <span>{item.amount}</span>
              <span>{item.unit}</span>
            </li>
          ))}
        </ul>
      </div>
      <span
        className="recipe-nutritions-section__button"
        onClick={handleNutritionsButton}
      >
        {buttonKeyword} NUTRITION FACTS
      </span>
    </section>
  );
};

export default RecipeNutritionsSection;
