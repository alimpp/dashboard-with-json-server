<template>
  <div class="topbar-layout">
    <profileModal />
    <accountCard class="mx-3" />
    <themeSwitcher />
    <languageSwitcher class="mx-3" />
  </div>
</template>

<script setup>
import themeSwitcher from "@/components/themeSwitcher";
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
