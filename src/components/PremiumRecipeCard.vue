<template>
  <code style="text-align: left">
    <pre>{{ id }}</pre>
  </code>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>
