<template>
  <div class="index-employees d-flex flex-column pt-2 px-3">
    <baseLoading v-if="loading" />
    <div class="row app_animation" v-else>
      <div class="col-lg-3" v-for="data in dataSource" :key="data.id">
        <employeeCard
          :id="data.id"
          :email="data.email"
          :username="data.username"
          :image="data.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { allEmployee } from "@/api/employeesApiModule";
import baseLoading from "@/components/base/baseLoading";
import employeeCard from "@/components/cards/employeeCard";
import { employeesDataStore } from "@/stores/employeesDataStore";

const employeesDataStoreModule = employeesDataStore();
const loading = ref(false);

const dataSource = computed(() => {
  return employeesDataStoreModule.employees;
});

onBeforeMount(() => {
  loading.value = true 
  setTimeout(() => {
    allEmployee();
    loading.value = false 
  }, 1000);
});
</script>

<style>
.index-employees {
  height: 85vh;
  margin: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
