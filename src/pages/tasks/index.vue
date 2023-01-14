<template>
  <div class="index-posts">
    <div class="row">
      <div class="col-lg-4" v-for="data in dataSource" :key="data.id">
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
import { computed, onBeforeMount } from "vue";
import { applicationTasksDataStore } from "@/stores/applicationTasksDataStore";
import { tasksApi } from "@/stores/api/tasksApi";
import taskCard from "@/components/cards/taskCard";

const tasks = applicationTasksDataStore();
const tasksApiModule = tasksApi();

const dataSource = computed(() => {
  return tasks.tasksDataSource;
});

onBeforeMount(() => {
  return tasksApiModule.tasks();
});
</script>

<style></style>
