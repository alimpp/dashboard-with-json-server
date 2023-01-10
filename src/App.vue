<template>
  <div
    :class="{
      application_dark_mode_theme: watchTheme === 'dark',
      application_light_mode_theme: watchTheme === 'light',
      rtl_design: $i18n.locale === 'fa',
    }"
  >
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();

// watchTheme === 'dark'
//         ? 'application_dark_mode_theme'
//         : 'application_light_mode_theme'

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss"></style>
