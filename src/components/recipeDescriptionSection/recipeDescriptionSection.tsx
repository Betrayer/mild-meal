import React, { FC } from "react";
import "./recipeDescriptionSection.scss";

const RecipeDescriptionSection: FC = () => {

  return (
    <section className="recipe-description-section">
      <div className="recipe-description-section__content">
        <div className="recipe-description-section__content__cutaway"></div>
        <div className="recipe-description-section__content__info">
          <div className="recipe-description-section__content__info__ingredients"></div>
          <div className="recipe-description-section__content__info__details"></div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDescriptionSection;
