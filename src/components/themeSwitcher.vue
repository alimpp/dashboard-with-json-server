<template>
 <div class="btn-group">
  <button style="height:38px;" type="button" class="btn-sm btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-palette"></i> {{$t('theme')}}
  </button>
  <ul class="dropdown-menu">
    <li @click="changeTheme"><a class="dropdown-item d-flex justify-content-center" href="#">
    <i class="bi bi-brightness-high px-1"></i>
    {{$t('lightmode')}}  
    </a></li>
    <li @click="changeTheme"><a class="dropdown-item d-flex justify-content-center" href="#">
    <i class="bi bi-moon-stars px-1"></i>
    {{$t('darkmode')}}  
    </a></li>
  </ul>
</div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
const changeTheme = () => {
  theme.changeThemeStatus();
};
</script>

<style lang="scss" scoped>
.change-theme-container {
  i {
    padding: 0px 10px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
