<template>
  <div>{{ recipeData.title }}</div>
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
