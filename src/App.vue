<template>
  <div
    :class="
      watchTheme === 'dark'
        ? 'application_dark_mode_theme'
        : 'application_light_mode_theme'
    "
  >
    <router-view></router-view>
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

<style lang="scss"></style>
