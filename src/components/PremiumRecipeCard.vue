<template>
  <div class="recipe-card mb-4">
    <div
      class="recipe-image-area position-relative"
      :style="{ 'background-image': 'url(' + recipeData.images[0].url + ')' }"
    ></div>
    <div class="recipe-body">
      <h3 class="recipe-title">{{ recipeData.title }}</h3>
      <div class="recipe-rating-area"></div>
      <div class="recipe-energy-area"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipeData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.recipe-card {
  max-width: 343px;
  min-height: 318px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);

  &:hover {
    .recipe-image-area {
      opacity: 0.8;
    }
  }
  .recipe-image-area {
    border-radius: 12px 12px 0 0;
    min-height: 200px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(22, 27, 35, 0.2) 70.94%,
      rgba(26, 29, 34, 0.79) 106.25%
    );
    background-position: center;
    background-size: cover;
  }
}
</style>
