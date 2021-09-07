<template>
  <div
    class="recipe-card mb-4"
    @click="handleClickRecipeCard($event, recipeData.id)"
  >
    <div
      class="recipe-image-area position-relative"
      :style="{
        'background-image': 'url(' + recipeData.images[0].url + ')'
      }"
    >
      <img
        alt="heart icon"
        :src="require('../assets/images/' + getHeartIconUrl + '.svg')"
        class="position-absolute top-3 right-3"
      />
      <LabelWithIcon
        v-if="recipeData.isPremium"
        :imageIconSrc="require('../assets/images/trophy.svg')"
        imageIconAlt="trophy icon"
        :isShowIcon="true"
        labelTxt="Premium Recipe"
        type="image"
        labelType="text"
        labelFontColor="#FFFFFF"
        imageIconSize="12px"
        customStyle="border-radius:10px; background:rgba(255,255,255,.3);"
        class="position-absolute left-2 bottom-2 px-2 py-1"
      />
    </div>
    <div class="recipe-body pt-2 px-3 pb-3">
      <h3 class="recipe-title my-0" :title="recipeData.title">
        {{ recipeData.title }}
      </h3>
      <div class="recipe-rating-area d-flex mt-3">
        <RecipeStarRating
          :rate="recipeData.rating.score"
          inactiveColor="#AAAEB3"
          activeColor="#FDA01E"
          :readOnly="true"
          :starSize="12"
          :padding="2"
        />
        <p class="recipe-rating-count my-0 ml-2">
          {{ recipeData.rating.count }} ratings
        </p>
      </div>
      <div class="recipe-detail-area d-flex mt-2">
        <div class="recipe-normal-info d-flex align-center">
          <LabelWithIcon
            :imageIconSrc="require('../assets/images/clock.svg')"
            imageIconAlt="clock icon"
            :isShowIcon="true"
            :labelTxt="recipeData.preparationTimeMinutes"
            type="image"
            labelType="time"
          />
          <LabelWithIcon
            :imageIconSrc="require('../assets/images/cals.svg')"
            imageIconAlt="cals icon"
            :isShowIcon="true"
            :labelTxt="recipeData.details.energy + ' ' + userInfo.energyUnits"
            type="image"
            labelType="text"
            imageIconSize="12px"
            class="ml-3"
          />
        </div>
        <div class="recipe-nutrient-info ml-auto d-flex align-item">
          <LabelWithIcon
            v-for="(nutrient, index) in nutrients"
            :key="index"
            :isShowIcon="true"
            :labelTxt="
              recipeData.details.nutrients[nutrient] +
                recipeData.details.units[nutrient]
            "
            type="custom"
            :nutrientType="nutrient"
            labelType="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeStarRating from "./RecipeStarRating.vue";
import LabelWithIcon from "./LabelWithIcon.vue";

export default {
  props: {
    recipeData: {
      type: Object,
      required: true
    },
    userInfo: {
      type: Object,
      required: true
    }
  },
  components: {
    RecipeStarRating,
    LabelWithIcon
  },
  data: () => ({
    nutrients: ["carbs", "proteins", "fats"]
  }),
  computed: {
    getHeartIconUrl() {
      return this.recipeData.isFavorite ? "heart" : "heart-outline";
    }
  },
  methods: {
    handleClickRecipeCard(event, id) {
      console.log(event.target, `${"recipe card " + id + " clicked"}`);
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
    cursor: pointer;
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
  .recipe-body {
    .recipe-title {
      display: -webkit-box;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      color: #0c0c0a;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 40px;
    }
    .recipe-rating-area {
      .vue-star-rating {
        line-height: 12px;
      }
      .recipe-rating-count {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        color: #1ca677;
      }
    }
  }
}
</style>
