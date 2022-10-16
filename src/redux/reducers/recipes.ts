import { GET_RECIPES_RESPONCE, RecipesActions } from "../actionTypes/recipes";
import { Recipe } from "../../types/types";

interface RecipesState {
  randomRecipes: any;
}

const initialState: RecipesState = {
  randomRecipes: [],
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
    default:
      return state;
  }
};
