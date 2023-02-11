<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex align-items-center px-3 py-1">
        <img :src="image" alt="employee image">
        <div class="d-flex flex-column align-items-center justify-content-center px-3 pt-2">
          <span class="size_small primary_color">{{ username }}</span>
          <p class="size_very_small">{{ email }}</p>
        </div>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { ref } from "vue";
import baseCard from "@/components/base/baseCard";

const props = defineProps({
  id: {
    type: Number,
    default: "",
    required: false,
  },
  username: {
    type: String,
    default: "",
    required: false,
  },
  email: {
    type: String,
    default: "",
    required: false,
  },
  image: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped>
img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
