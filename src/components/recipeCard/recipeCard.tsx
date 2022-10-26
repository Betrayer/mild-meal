import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./recipeCard.scss";
import gluten from "../../assets/images/gluten.png";
import gluten_free from "../../assets/images/gluten-free.png";
import vegan from "../../assets/images/vegan.png";
import non_vegan from "../../assets/images/non-vegan.png";
import cooking_time from "../../assets/images/cooking-time2.png";
import { useDispatch } from "react-redux";
import { getChosenRecipe } from "../../redux/actions/recipes";

interface RecipeCardProps {
  recipe: any;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recipeRedirect = (): void => {
    dispatch(getChosenRecipe(recipe.id))
    navigate("/recipe/#");
  };
 
  return (
    <li className="recipe-card" onClick={recipeRedirect}>
      <img
        className="recipe-card__picture"
        src={recipe.image}
        alt={recipe.title}
      />
      <img className="recipe-card__time" src={cooking_time} alt="time" />
      <span className="recipe-card__time-num">{recipe.readyInMinutes}</span>

      {recipe.glutenFree ? (
        <img className="recipe-card__gluten" src={gluten} alt="gluten" />
      ) : (
        <img className="recipe-card__gluten" src={gluten_free} alt="gluten-free" />
      )}

      {recipe.vegan ? (
        <img className="recipe-card__vegan" src={vegan} alt="vegan" />
      ) : (
        <img className="recipe-card__vegan" src={non_vegan} alt="non-vegan" />
      )}
      <span className="recipe-card__description">{recipe.title}</span>
    </li>
  );
};

export default RecipeCard;
