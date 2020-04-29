import axios from "axios";
import * as actions from "@/store/actions";

jest.mock("axios");

describe("getRecipes", () => {
  it("calls one updateRecipes mutation", async () => {
    axios.get.mockResolvedValue({ data: [{ name: "Brownie" }] });
    const commit = jest.fn();
    await actions.getRecipes({ commit });
    expect(commit).toHaveBeenCalledWith("updateRecipes", [
      {
        name: "Brownie",
      },
    ]);

    expect(commit).toHaveBeenCalledTimes(1);
  });
});
