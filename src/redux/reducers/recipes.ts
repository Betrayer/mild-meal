import {
  GET_CHOSEN_RECIPE_RESPONCE,
  GET_RECIPES_RESPONCE,
  GET_RECIPES_BY_KEYWORDS_RESPONSE,
  GET_RECIPES_BY_TAG_RESPONSE,
  RecipesActions,
  GET_USER_COLLECTION_RESPONSE,
} from "../actionTypes/recipes";
import { Recipe } from "../../types/types";
import { UserCollection } from "../../types/types";

interface RecipesState {
  randomRecipes: any;
  chosenRecipe: any;
  searchResults: any;
  tagSearchResults: any;
  userCollection: any;
}

const initialState: RecipesState = {
  randomRecipes: [],
  chosenRecipe: {},
  searchResults: [],
  tagSearchResults: [],
  userCollection: { favorites: {}, todo: {}, saved: {} },
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
    case GET_RECIPES_BY_KEYWORDS_RESPONSE:
      return {
        ...state,
        searchResults: action.payload,
      };
    case GET_RECIPES_BY_TAG_RESPONSE:
      return {
        ...state,
        tagSearchResults: action.payload,
      };
    case GET_USER_COLLECTION_RESPONSE:
      return {
        ...state,
        userCollection: action.payload,
      };
    default:
      return state;
  }
};
