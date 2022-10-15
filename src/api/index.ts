import axios from "axios";

const id = 4632;
const apiKey = "b6b05a91090c429a8d997afa6012aad4";

export const getRecipes = async () => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`,
      {}
    )
    .then((res) => console.log(res));
};
