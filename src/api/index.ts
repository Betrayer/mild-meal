import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getRecipe = async (id: number) => {
  const res = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
  );
  return res.data;
};

export const getRandomRecipes = async (): Promise<any> => {
  console.log("request IAP");
  const res = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`
  );

  return res.data.recipes;
};


const ingredients = "cucumber"
// export const searchByIngredient = async (ingredients: string) => {
const searchByIngredient = async () => {
  const res = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${ingredients}&number=2`
  );
  // return res.data;
  console.log(res.data);
};

searchByIngredient();