<template>
  <div class="index-dashboard-layout">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="router-container px-4">
      <topbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import sidebar from "@/layout/dashboard/sidebar";
import topbar from "@/layout/dashboard/topbar";
</script>

<style lang="scss" scoped>
.index-dashboard-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  .router-container {
    width: 100%;
    height: 100vh;
  }
}
</style>
