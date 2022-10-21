import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import "./recipeNutritionsSection.scss";
import { nanoid } from "nanoid";

const RecipeNutritionsSection: FC = () => {
  const [nutritionsPosition, setNnutritionsPosition] = useState("hidden-under");
  const [butonKeyword, setButtonKeyword] = useState("show")

  const handleNutritionsButton = () => {
    setNnutritionsPosition(nutritionsPosition ? "" : "hidden-under");
    setButtonKeyword(butonKeyword === "show" ? "hide" : "show")
    console.log(butonKeyword)
  };
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  const recipe = useSelector((state: RootState) => state.recipes.chosenRecipe);

  return (
    <section className={`recipe-nutritions-section ${nutritionsPosition} ${currentThemeColor}`}>
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
        {butonKeyword} NUTRITION FACTS
      </span>
    </section>
  );
};

export default RecipeNutritionsSection;
