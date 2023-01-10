<template>
  <div class="topbar-layout">
      <profileModal />
      <accountCard class="mx-3" />
      <languageSwitcher />
      <changeTheme class="mt-2 mx-1" />
      <i class="bi bi-wifi size_2xl mx-1"></i>
      <div class="d-flex mx-5">
        <i class="bi bi-instagram size_2xl mx-1"></i>
        <i class="bi bi-telegram size_2xl mx-1"></i>
        <i class="bi bi-facebook size_2xl mx-1"></i>
        <i class="bi bi-whatsapp size_2xl mx-1"></i>
        <i class="bi bi-twitter size_2xl mx-1"></i>
        <i class="bi bi-twitch size_2xl mx-1"></i>
        <i class="bi bi-youtube size_2xl mx-1"></i>
      </div>
    
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
  padding: 10px 10px;
}
</style>
