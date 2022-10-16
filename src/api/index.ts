import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const id = 4632;

// export const getRecipes = async () => {
//   const res = await axios.get(
//     `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`,
//     {}
//   );
//   return res.data;
// };

export const getRandomRecipes = async (): Promise<any> => {
  console.log("request IAP");
  const res = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`
  );

  return res.data.recipes;
};
