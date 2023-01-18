<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex flex-column px-3 py-2">
        <span class="size_small gray_color">{{ title }}</span>
        <div class="d-flex mt-2">
          <editTaskModal />
          <i class="bi bi-trash3 px-2 pt-1 app_pointer"></i>
        </div>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";
import editTaskModal from "@/components/modals/editTaskModal";
const props = defineProps({
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  id: {
    type: Number,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
