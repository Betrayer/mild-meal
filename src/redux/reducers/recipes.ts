import {
  GET_CHOSEN_RECIPE_RESPONCE,
  GET_RECIPES_RESPONCE,
  RecipesActions,
} from "../actionTypes/recipes";
import { Recipe } from "../../types/types";

interface RecipesState {
  randomRecipes: any;
  chosenRecipe: any;
}

const initialState: RecipesState = {
  randomRecipes: [],
  chosenRecipe: {},
};

export const recipesReducer = (
  state = initialState,
  action: RecipesActions
): RecipesState => {
  switch (action.type) {
    case GET_RECIPES_RESPONCE:
      return {
        ...state,
        randomRecipes: action.payload,
      };
    case GET_CHOSEN_RECIPE_RESPONCE:
      return {
        ...state,
        chosenRecipe: action.payload,
      };
    default:
      return state;
  }
};
