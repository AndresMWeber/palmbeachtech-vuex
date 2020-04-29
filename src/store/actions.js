import axios from "axios";

export async function getRecipes(context) {
  await axios
    .get("https://sampleapis.com/recipes/api/recipes")
    .then((response) => {
      if (response.data.length) {
        context.commit("updateRecipes", response.data);
      }
    });
}
