<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex flex-column px-3 py-2">
        <span class="size_small gray_color">{{ title }}</span>
        <div class="d-flex mt-2">
          <editTaskModal :title="title" :id="id" />
          <div
            class="spinner-border spinner-border-sm mx-2 mt-2"
            role="status"
            v-if="loading"
          ></div>
          <i
            v-else
            class="bi bi-trash3 px-2 pt-1 app_pointer"
            @click="deleteTask(id)"
          ></i>
        </div>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { ref } from "vue";
import baseCard from "@/components/base/baseCard";
import editTaskModal from "@/components/modals/editTaskModal";
import { tasksApi } from "@/stores/api/tasksApi";

const tasksApiModule = tasksApi();
const loading = ref(false);

const deleteTask = async (id) => {
  loading.value = true;
  await tasksApiModule.deleteTask(id);
  loading.value = false;
};

const props = defineProps({
  id: {
    type: Number,
    default: "",
    required: false,
  },
  body: {
    type: String,
    default: "",
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  status: {
    type: String,
    default: "",
    required: false,
  },
  assigened: {
    type: Object,
    default: {},
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
