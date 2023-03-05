<template>
  <div class="index-posts">
    <baseEmpty
      :text="$t('emptyticket')"
      :buttonName="$t('sidebar.tasks')"
      routeName="Setting"
      v-if="tasksDataStoreModule.tasks.length === 0"
    />
    <div class="row" v-else>
      <baseLoading class="mt-5" v-if="loading" />
      <div class="col-lg-3 app_animation" v-for="data in dataSource" :key="data.id" v-else>
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
import { computed, onBeforeMount, ref, onMounted } from "vue";
import baseLoading from "@/components/base/baseLoading";
import taskCard from "@/components/cards/taskCard";
import baseEmpty from "@/components/base/baseEmpty";
import { allTasks } from "@/api/tasksApiModule";
import { tasksDataStore } from "@/stores/tasksDataStore";
const loading = ref(false);

const tasksDataStoreModule = tasksDataStore();

const dataSource = computed(() => {
  return tasksDataStoreModule.tasks;
});

onBeforeMount(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    allTasks();
  }, 1000);
});
</script>

<style lang="scss" scoped>
.index-posts {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
