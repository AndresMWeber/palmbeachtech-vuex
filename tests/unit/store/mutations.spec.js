import * as mutations from "@/store/mutations";

describe("updateRecipes", () => {
  it("updates the recipes value in the state as string", () => {
    const state = { recipes: [] };
    mutations.updateRecipes(state, "foobar");
    expect(state.recipes).toBe("foobar");
  });

  it("updates the recipes value in the state as realistic list", () => {
    const state = { recipes: [] };
    mutations.updateRecipes(state, [
      {
        name: "Brownie",
      },
    ]);
    expect(state.recipes[0].name).toBe("Brownie");
  });
});
