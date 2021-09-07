<template>
  <div class="d-flex align-center" :style="customStyle">
    <div
      v-if="isShowIcon"
      :style="`${'line-height:' + (imageIconSize || '15px')}`"
    >
      <img
        v-if="type === 'image'"
        :alt="imageIconAlt || 'svg icon'"
        :src="imageIconSrc"
        class="image-icon mr-2"
        :style="`${'width:' + (imageIconSize || '15px')}`"
      />
      <div
        class="custom-icon mr-1 ml-2"
        v-else
        :style="'background-color:' + getCustomItemColor"
      ></div>
    </div>
    <p
      class="my-0"
      :style="
        `${'font-size:' +
          (labelFontSize || '12px') +
          '; color:' +
          (labelFontColor || '#393C40')}`
      "
    >
      {{ getLabelText }}
    </p>
  </div>
</template>

<script>
import { getHoursAndMins } from "../utils/format";

export default {
  props: {
    imageIconSrc: {
      type: String
    },
    imageIconAlt: {
      type: String
    },
    isShowIcon: {
      type: Boolean,
      required: true
    },
    labelTxt: {
      type: [String, Number],
      required: true
    },
    labelType: {
      type: String,
      required: true
    },
    nutrientType: {
      type: String
    },
    type: {
      type: String,
      required: true
    },
    customStyle: {
      type: String
    },
    imageIconSize: {
      type: String
    },
    labelFontSize: {
      type: String
    },
    labelFontColor: {
      type: String
    }
  },
  computed: {
    getLabelText() {
      return this.labelType === "time"
        ? getHoursAndMins(this.labelTxt)
        : this.labelTxt;
    },
    getCustomItemColor() {
      switch (this.nutrientType) {
        case "carbs":
          return "#F94642";
        case "proteins":
          return "#3177BB";
        case "fats":
          return "#FDA120";
        default:
          return "#FFFFFF";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-icon {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
</style>
