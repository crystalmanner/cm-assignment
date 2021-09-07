<template>
  <star-rating
    :increment="increment || 0.1"
    :rating="rate"
    :inactive-color="inactiveColor"
    :active-color="activeColor"
    :read-only="readOnly"
    :star-size="starSize"
    :show-rating="false"
    :padding="padding"
  ></star-rating>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: {
    rate: {
      type: Number,
      required: true
    },
    increment: {
      type: Number
    },
    inactiveColor: {
      type: String,
      require: true
    },
    activeColor: {
      type: String,
      require: true
    },
    readOnly: {
      type: Boolean,
      require: true
    },
    starSize: {
      type: Number,
      require: true
    },
    padding: {
      type: Number,
      require: true
    }
  },
  components: {
    StarRating
  }
};
</script>
