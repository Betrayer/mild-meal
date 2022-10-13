import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import "./recipeNutritionsSection.scss";

const RecipeNutritionsSection: FC = () => {
  const handleClick = () => {
    alert("clicked!");
  };
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <section className={`recipe-nutritions-section ${currentThemeColor}`}>
      <div className="recipe-nutritions-section__content">
        <span className="recipe-nutritions-section__content__title"></span>
        <span className="recipe-nutritions-section__content__size"></span>
        <span className="recipe-nutritions-section__content__calories"></span>
        <ul className="recipe-nutritions-section__content__nutritions"></ul>
      </div>
      <span className="recipe-nutritions-section__button" onClick={handleClick}>
        SHOW NUTRITION FACTS
      </span>
    </section>
  );
};

export default RecipeNutritionsSection;
