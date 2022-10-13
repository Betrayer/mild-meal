import React, { FC, useState } from "react";
import "./recipeNutritionsSection.scss";

const RecipeNutritionsSection: FC = () => {
  const [nutritionsPosition, setNnutritionsPosition] = useState("hidden-under");
  const [butonKeyword, setButtonKeyword] = useState("show")

  const handleNutritionsButton = () => {
    setNnutritionsPosition(nutritionsPosition ? "" : "hidden-under");
    setButtonKeyword(butonKeyword === "show" ? "hide" : "show")
    console.log(butonKeyword)
  };

  return (
    <section className={`recipe-nutritions-section ${nutritionsPosition}`}>
      <div className="recipe-nutritions-section__content">
        <span className="recipe-nutritions-section__content__title"></span>
        <span className="recipe-nutritions-section__content__size"></span>
        <span className="recipe-nutritions-section__content__calories"></span>
        <ul className="recipe-nutritions-section__content__nutritions"></ul>
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
