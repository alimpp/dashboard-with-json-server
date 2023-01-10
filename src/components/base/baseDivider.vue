<template>
  <div class="base-divider-container d-flex flex-column">
    <span>{{ text }}</span>
    <div class="line" :style="{'width': width}"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },
  width: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables/font-size.scss";
.base-divider-container {
  span {
    font-size: $--size-ls;
    font-weight: 600;
    padding: 5px 4px;
  }
  .line {
    // width: 150px;
    height: 1px;
    background: var(--yellow-color);
  }
}
</style>
>
