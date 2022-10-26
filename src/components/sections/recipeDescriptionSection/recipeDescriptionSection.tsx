import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { nanoid } from "nanoid";
import gluten from "../../../assets/images/gluten.png";
import gluten_free from "../../../assets/images/gluten-free.png";
import vegan from "../../../assets/images/vegan.png";
import non_vegan from "../../../assets/images/non-vegan.png";
import time from "../../../assets/images/cooking-time.png";
import "./recipeDescriptionSection.scss";

const RecipeDescriptionSection: FC = () => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  const recipe = useSelector((state: RootState) => state.recipes.chosenRecipe);

  return (
    <section className={`recipe-description-section ${currentThemeColor}`}>
      <div className="recipe-description-section__content">
        <div className="recipe-description-section__content__cutaway">
          <span className="description">{recipe.title}</span>
          <div className="wrapper">
            <img
              className="recipe-card__picture"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="details-wrapper">
              <img className="recipe-card__gluten" src={time} alt="time" />
              <span className="recipe-card__time">
                {recipe.readyInMinutes}
                <br />
                min
              </span>
              <img
                className="recipe-card__gluten"
                src={recipe.glutenFree ? gluten : gluten_free}
                alt="gluten"
              />
              <img
                className="recipe-card__vegan"
                src={recipe.vegan ? vegan : non_vegan}
                alt="vegan"
              />
            </div>
          </div>
        </div>
        <div className="recipe-description-section__content__info">
          <ul className="ingredients-list">
            <span className="ingredients-list-title">Ingredients:</span>
            {recipe.extendedIngredients.map((ingredient: any) => (
              <li className="ingredients-list-item" key={nanoid(10)}>
                <div className="ingredients-list__content-wrapper">
                  <span>
                    {ingredient.amount.toString().length > 5
                      ? Math.round(ingredient.amount * 100) / 100
                      : ingredient.amount}{" "}
                    {ingredient.measures.metric.unitShort}
                  </span>
                  <div />
                  <span>{ingredient.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="list-wrapper">
            <span>Description:</span>
            <ol className="recipe-description-section__content__info__details">
              {recipe.analyzedInstructions.map((step: any) =>
                step.steps.map((step: any) => (
                  <li key={nanoid(10)}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDescriptionSection;
