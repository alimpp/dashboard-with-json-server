<template>
  <div class="index-posts">
    <baseLoading class="mt-5" v-if="loading" />
    <div class="row" v-else></div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref, onMounted } from "vue";
const loading = ref(false);
onBeforeMount(() => {});
</script>

<style lang="scss" scoped>
.index-posts {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
