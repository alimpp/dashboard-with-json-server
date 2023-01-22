<template>
  <div class="index-posts">
    <baseLoading class="mt-5" v-if="loading" />
    <div class="row" v-else>
      <div
        class="col-lg-4 app_animation"
        v-for="data in dataSource"
        :key="data.id"
      >
        <taskCard
          :id="data.id"
          :title="data.title"
          :completed="data.completed"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref , onMounted } from "vue";
import { applicationTasksDataStore } from "@/stores/applicationTasksDataStore";
import { tasksApi } from "@/stores/api/tasksApi";
import taskCard from "@/components/cards/taskCard";
import baseLoading from "@/components/base/baseLoading";

const tasks = applicationTasksDataStore();
const tasksApiModule = tasksApi();
const loading = ref(false);

const dataSource = computed(() => {
  return tasks.tasksDataSource;
});

onBeforeMount(() => {
  tasksApiModule.tasks();
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style lang="scss" scoped>
.index-posts {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
