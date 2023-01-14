<template>
  <div class="index-posts">
    {{ dataSource }}
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { applicationTasksDataStore } from "@/stores/applicationTasksDataStore";
import { tasksApi } from "@/stores/api/tasksApi";

const tasks = applicationTasksDataStore();
const tasksApiModule = tasksApi()

const dataSource = computed(() => {
  return tasks.tasksDataSource;
});

onBeforeMount(() => {
  return tasksApiModule.tasks()
})
</script>

<style></style>
