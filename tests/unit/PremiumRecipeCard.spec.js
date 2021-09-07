import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard.vue";
import RecipeStarRating from "../../src/components/RecipeStarRating.vue";
import LabelWithIcon from "../../src/components/LabelWithIcon.vue";

const testRecipeData = {
  id: "1",
  isPremium: true,
  isFavorite: true,
  isPublished: true,
  isDeleted: false,
  status: "ok",
  title:
    "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
  images: [
    {
      id: "1:img",
      url:
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
    }
  ],
  rating: {
    count: 200,
    score: 4.5
  },
  details: {
    units: {
      proteins: "g",
      carbs: "g",
      fats: "g",
      energy: "kJ",
      ca: "mg",
      mg: "mg",
      fe: "mg"
    },
    nutrients: {
      proteins: 22,
      carbs: 13,
      fats: 8,
      ca: 16,
      mg: 20,
      fe: 10
    },
    energy: 774
  },
  preparationTimeMinutes: 25
};

const testUserInfo = {
  firstName: "Jon",
  lastName: "Doe",
  email: "jon.doe@carbmanager.com",
  energyUnits: "calories"
};

describe("PremiumRecipeCard", () => {
  const wrapper = mount(PremiumRecipeCard, {
    propsData: {
      recipeData: testRecipeData,
      userInfo: testUserInfo
    }
  });
  it("RecipeStarRating should be rendered properly", () => {
    const recipeStarRating = wrapper.findComponent(RecipeStarRating);
    expect(recipeStarRating.exists()).toBe(true);
  });

  it("LabelWithIcon should be rendered properly", () => {
    const labelWithIcon = wrapper.findComponent(LabelWithIcon);
    expect(labelWithIcon.exists()).toBe(true);
  });

  it("The number of LabelWithIcon should be 6", () => {
    const labelWithIcons = wrapper.findAllComponents(LabelWithIcon);
    expect(labelWithIcons).toHaveLength(6);
  });

  it("computed property should work properly", () => {
    expect(wrapper.vm.getHeartIconUrl).toEqual("heart");
  });
});
