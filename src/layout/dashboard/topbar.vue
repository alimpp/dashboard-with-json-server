<template>
  <div class="topbar-layout">
    <accountCard />
       <languageSwitcher class="mx-3" />
    <changeTheme class="mt-1" />
  </div>
</template>

<script setup>
import changeTheme from "@/components/changeTheme";
import languageSwitcher from "@/components/languageSwitcher";
import accountCard from "@/components/cards/accountCard";
</script>

<style lang="scss" scoped>
.topbar-layout {
  width: 100%;
  height: 70px;
  display: flex;
  padding: 10px 10px;
}
</style>
