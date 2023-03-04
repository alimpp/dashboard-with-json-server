<template>
  <div class="task-tab d-flex flex-column pt-2 px-3">
    <div class="row">
      <div class="col-lg-3">
        {{ dataSource }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import taskCard from "@/components/cards/taskCard";
import {allTasks} from '@/api/tasksApiModule'
import { tasksDataStore } from "@/stores/tasksDataStore";

const taskDataStoreModule = tasksDataStore();

const dataSource = computed(() => {
  return taskDataStoreModule.tasks;
});

onBeforeMount(() => {
  allTasks();
});
</script>

<style lang="scss" scoped>
.task-tabs {
  height: 85vh;
  margin: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
