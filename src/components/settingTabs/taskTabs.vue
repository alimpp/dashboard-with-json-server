<template>
  <div class="task-tab d-flex flex-column pt-4 px-3">
    <div class="row">
      <createTaskModal />
      <div class="col-lg-3" v-for="data in dataSource" :key="data.id">
        <taskCard
          :id="data.id"
          :title="data.title"
          :body="data.body"
          :status="data.status"
          :assigned="data.assigned"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import taskCard from "@/components/cards/taskCard";
import { allTasks } from "@/api/tasksApiModule";
import { tasksDataStore } from "@/stores/tasksDataStore";
import createTaskModal from "@/components/modals/createTaskModal";

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
