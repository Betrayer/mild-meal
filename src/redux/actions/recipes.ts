import {
  GET_RECIPES,
  GET_RECIPES_RESPONCE,
  GET_CHOSEN_RECIPE,
  GET_CHOSEN_RECIPE_RESPONCE,
  RecipesActions,
} from "../actionTypes/recipes";
import { Recipe } from "../../types/types";

export const getRecipes = (): RecipesActions => ({
  type: GET_RECIPES,
});

export const getRecipesResponse = (payload: any): RecipesActions => ({
  type: GET_RECIPES_RESPONCE,
  payload,
});

export const getChosenRecipe = (payload: number): RecipesActions => ({
  type: GET_CHOSEN_RECIPE,
  payload,
});

export const getChosenRecipeResponse = (payload: any): RecipesActions => ({
  type: GET_CHOSEN_RECIPE_RESPONCE,
  payload,
});
