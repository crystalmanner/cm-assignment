<template>
  <div class="d-flex align-center">
    <img
      v-if="isShowIcon"
      :alt="imageIconAlt || 'svg icon'"
      :src="imageIconSrc"
      class="image-icon mr-2"
      :style="`${'width:' + (imageIconSize || '15px')}`"
    />
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
      type: String,
      required: true
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
    type: {
      type: String,
      required: true
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
      switch (this.type) {
        case "time":
          return getHoursAndMins(this.labelTxt);
        default:
          return this.labelTxt;
      }
    }
  }
};
</script>
