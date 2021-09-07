import { mount } from "@vue/test-utils";
import RecipeStarRating from "../../src/components/RecipeStarRating.vue";
import StarRating from "vue-star-rating";

const testPropData = {
  rate: 4.5,
  inactiveColor: "#AAAEB3",
  activeColor: "#FDA01E",
  readOnly: true,
  starSize: 12,
  padding: 2
};

describe("RecipeStarRating", () => {
  const wrapper = mount(RecipeStarRating, {
    propsData: testPropData
  });

  it("Vue StarRating should be rendered properly", () => {
    const recipeStarRating = wrapper.findComponent(StarRating);
    expect(recipeStarRating.exists()).toBe(true);
  });
});
