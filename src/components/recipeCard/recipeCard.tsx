import React, { FC } from "react";
import "./recipeCard.scss";

const RecipeCard: FC = () => {
  return (
    <div className="recipe-card">
      <div className="recipe-card__upper-part">
        <div className="recipe-card__upper-part__picture"></div>
        <div className="recipe-card__upper-part__points-and-name">
          <div className="recipe-card__upper-part__points-and-name__points"></div>
          <span className="recipe-card__upper-part__points-and-name__name">
            rice with richmond rice and rice water with rice butter
          </span>
        </div>
      </div>
      <div className="recipe-card__lower-part">
        <span className="recipe-card__lower-part__description">rice gently covered in rice coat made of crunchy rice andrice rice rice</span>
      </div>
    </div>
  );
};

export default RecipeCard;