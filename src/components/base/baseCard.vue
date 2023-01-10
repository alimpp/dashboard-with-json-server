<template>
  <div class="base-card-container">
    <div class="base-card">
      <slot name="cardContent"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.base-card-container {
  width: 100%;
  .base-card {
    transition: 1s;
    width: 100%;
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
  }
}
</style>
