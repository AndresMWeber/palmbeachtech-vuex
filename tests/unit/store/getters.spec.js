import * as getters from "@/store/getters";

const state = {
  recipes: [
    {
      name: "Brownie",
      calories: 500,
      cookTime: 9,
      cuisine: "American",
    },
    {
      name: "Apple Pie",
      calories: 400,
      cookTime: 30,
      cuisine: "Worldwide",
    },
    {
      name: "Crackers",
      calories: 100,
      cookTime: 1,
      cuisine: "Worldwide",
    },
    {
      name: "Soy sweet",
      calories: 200,
      cookTime: 2,
      cuisine: "Asian",
    },
  ],
};

describe("getRecipes", () => {
  it("Returns recipes under 250 calories", () => {
    expect(getters.lowCaloriesRecipes(state)).toHaveLength(2);
  });
});

describe("easyRecipes", () => {
  it("Returns easy recipes", () => {
    expect(getters.easyRecipes(state)).toHaveLength(3);
  });
});

describe("asianRecipes", () => {
  it("Returns asian recipes", () => {
    expect(getters.asianRecipes(state)).toHaveLength(1);
  });
});
