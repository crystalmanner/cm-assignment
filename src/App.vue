<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <div>
        <div v-for="recipe in recipes" :key="recipe.id" class="premium-recipe">
          <PremiumRecipeCard :recipeData="recipe" />
        </div>
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
          console.log(res, "userinfo");
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
          console.log(res, "recipes");
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

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

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
