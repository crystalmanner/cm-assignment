<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper text-center">
        <img
          alt="Carb Manager"
          src="./assets/images/cm-logo.svg"
          class="cm-logo"
        />
      </div>
      <h2 class="text-center">Carb Manager Dev Assignment</h2>
      <div class="d-flex space-between">
        <PremiumRecipeCard
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipeData="recipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
import * as Request from "@/services/request.js";
import { RECIPES, USER_INFO } from "@/endpoints";

export default {
  name: "App",

  components: {
    PremiumRecipeCard
  },

  data: () => ({
    userInfo: {},
    recipes: [],
    error: null
  }),

  created() {
    this.fetchUserInfo();
    this.fetchRecipes();
  },

  mounted() {},

  methods: {
    fetchUserInfo() {
      Request.get(USER_INFO)
        .then(res => {
          this.userInfo = res;
        })
        .catch(err => {
          this.error = err.data;
          console.log(err.data, "err.data");
        });
    },
    fetchRecipes() {
      Request.get(RECIPES)
        .then(res => {
          this.recipes = res;
        })
        .catch(err => {
          this.error = err.data;
          console.log(err.data, "err.data");
        });
    }
  }
};
</script>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}
</style>
