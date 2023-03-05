<template>
  <div class="topbar-layout">
    <profileModal />
    <themeSwitcher class="mx-2" />
    <languageSwitcher class="mx-1" />
  </div>
</template>

<script setup>
import themeSwitcher from "@/components/themeSwitcher";
import languageSwitcher from "@/components/languageSwitcher";
import profileModal from "@/components/modals/profileModal";
</script>

<style lang="scss" scoped>
.topbar-layout {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 10px 10px;
}
</style>
