<template>
  <div class="employees-tabs d-flex flex-column pt-2 px-3">
    <div class="row">
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
import employeeCard from "@/components/cards/employeeCard";
import { employeesDataStore } from "@/stores/employeesDataStore";

const employeesDataStoreModule = employeesDataStore();

const dataSource = computed(() => {
  return employeesDataStoreModule.employees;
});

onBeforeMount(() => {
  allEmployee();
});
</script>

<style>
.employees-tabs {
  height: 85vh;
  margin: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
