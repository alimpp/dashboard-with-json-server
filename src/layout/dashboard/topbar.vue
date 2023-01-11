<template>
  <div class="topbar-layout">
      <profileModal />
      <accountCard class="mx-3" />
      <languageSwitcher />
  </div>
</template>

<script setup>
import changeTheme from "@/components/changeTheme";
import languageSwitcher from "@/components/languageSwitcher";
import accountCard from "@/components/cards/accountCard";
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
