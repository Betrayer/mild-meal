import React, { FC } from "react";
import "./recipeDescriptionSection.scss";

const RecipeDescriptionSection: FC = () => {
  const handleClick = () => {
    alert("clicked!");
  };

  return (
    <section className="recipe-description-section">
      <div className="recipe-description-section__content">
        <div className="recipe-description-section__content__cutaway"></div>
        <div className="recipe-description-section__content__info">
          <div className="recipe-description-section__content__info__ingredients"></div>
          <div className="recipe-description-section__content__info__details"></div>
        </div>
        <span
          className="recipe-description-section__content__button"
          onClick={handleClick}
        >
          SHOW NUTRITION FACTS
        </span>
      </div>
    </section>
  );
};

export default RecipeDescriptionSection;
