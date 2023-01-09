<template>
  <div
    class="sidebar-layout"
    :class="
      watchTheme === 'dark'
        ? 'sidebar_dark_mode_theme'
        : 'sidebar_light_mode_theme'
    "
  ></div>
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
.sidebar-layout {
  width: 200px;
  height: 100vh;
  border-radius: 0 20px 20px 0;
}
</style>
