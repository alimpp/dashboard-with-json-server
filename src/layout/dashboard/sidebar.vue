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
        class="bi bi-list size_large px-3 app_pointer"
        v-if="!isOpen"
        @click="changeStatusSidebar"
      ></i>
      <i
        class="bi bi-x-lg size_medium app_pointer"
        v-if="isOpen"
        @click="changeStatusSidebar"
      ></i>
    </div>
    <div
      class="d-flex flex-column justify-content-center align-items-center mt-2"
    >
      <img src="@/assets/images/profile-image.jpg" alt="profile image" />
      <span class="size_very_small pt-2" v-if="isOpen"
        >jhondoe1990@yahoo.com</span
      >
    </div>
    <div class="d-flex flex-column pt-2">
      <div class="d-flex justify-content-center mt-5">
        <router-link class="app_link white_color" to="/dashboard">
          <i class="bi bi-bar-chart app_pointer"></i>
          <span class="px-2 size_small" v-if="isOpen">{{
            $t("sidebar.dashboard")
          }}</span></router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/tickets"
          ><i class="bi bi-blockquote-left app_pointer"></i>
          <span class="px-2 size_small" v-if="isOpen">{{
            $t("sidebar.tickets")
          }}</span></router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/tasks"
          ><i class="bi bi-postcard app_pointer"></i>
          <span class="px-2 size_small" v-if="isOpen">{{
            $t("sidebar.tasks")
          }}</span></router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/employees"
          ><i class="bi bi-person app_pointer"></i>
          <span class="px-2 size_small" v-if="isOpen">{{
            $t("sidebar.employees")
          }}</span></router-link
        >
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="app_link white_color" to="/setting">
          <i class="bi bi-gear-wide-connected app_pointer"></i>
          <span class="px-2 size_small" v-if="isOpen">{{
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
