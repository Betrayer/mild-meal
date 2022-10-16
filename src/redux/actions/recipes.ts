import {
  GET_RECIPES,
  GET_RECIPES_RESPONCE,
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
