<template>
  <div
    class="sidebar-layout"
    :class="{
      sidebar_dark_mode_theme: watchTheme === 'dark',
      sidebar_light_mode_theme: watchTheme === 'light',
      isOpen: isOpen,
    }"
  >
    <div class="d-flex justify-content-end px-2 pt-3">
      <i
        class="bi bi-arrow-right size_medium app_pointer"
        v-if="!isOpen"
        @click="changeStatusSidebar"
      ></i>
      <i
        class="bi bi-arrow-left size_medium app_pointer"
        v-if="isOpen"
        @click="changeStatusSidebar"
      ></i>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img src="@/assets/images/profile-image.jpg" alt="profile image">
      <span class="size_very_small pt-1" v-if="isOpen">jhondoe1990@yahoo.com</span>
    </div>
    <div class="d-flex flex-column pt-5">
      <div class="d-flex justify-content-center">
        <i class="bi bi-bar-chart app_pointer"></i>
        <router-link
          class="app_link white_color px-2"
          to="/dashboard"
          v-if="isOpen"
          >{{ $t("sidebar.dashboard") }}</router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-1">
        <i class="bi bi-blockquote-left app_pointer"></i>
        <router-link
          class="app_link white_color px-2"
          to="/blogs"
          v-if="isOpen"
          >{{ $t("sidebar.blogs") }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const isOpen = ref(false);

const changeStatusSidebar = () => {
  isOpen.value = !isOpen.value;
};

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.sidebar-layout {
  width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
.isOpen {
  width: 170px;
  transition: 0.1s;
}
.router-link-active {
  border-bottom: 1px solid #fff;
  padding: 0px 3px;
  border-radius: 2px;
  margin: 0px 5px;
}
</style>
