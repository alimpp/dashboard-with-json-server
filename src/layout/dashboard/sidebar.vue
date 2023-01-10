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
      <img src="@/assets/images/profile-image.jpg" alt="profile image" />
      <span class="size_very_small pt-2" v-if="isOpen"
        >jhondoe1990@yahoo.com</span
      >
    </div>
    <div class="d-flex flex-column pt-5">
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/dashboard">
          <i class="bi bi-bar-chart app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.dashboard")
          }}</span></router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/blogs"
          ><i class="bi bi-blockquote-left app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.blogs")
          }}</span></router-link
        >
      </div>
       <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/posts"
          ><i class="bi bi-postcard app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.posts")
          }}</span></router-link
        >
      </div>
       <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/charts"
          ><i class="bi bi-clipboard-data app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.charts")
          }}</span></router-link
        >
      </div>
       <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/cards"
          ><i class="bi bi-card-checklist app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.cards")
          }}</span></router-link
        >
      </div>
       <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/elements"
          ><i class="bi bi-building app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.elements")
          }}</span></router-link
        >
      </div>
       <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/timeline"
          ><i class="bi bi-calendar-week app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.timeline")
          }}</span></router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/setting">
          <i class="bi bi-gear-wide-connected app_pointer"></i>
          <span class="px-2" v-if="isOpen">{{
            $t("sidebar.setting")
          }}</span></router-link
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
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
.isOpen {
  width: 170px;
}
.router-link-active {
  border-bottom: 1px solid #fff;
  padding: 0px 3px;
  border-radius: 2px;
  margin: 0px 5px;
}
</style>
