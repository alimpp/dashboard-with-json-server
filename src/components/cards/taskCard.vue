<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex flex-column px-3 py-2">
        <span class="size_small">{{ title }}</span>
        <p class="size_very_small">{{ body }}</p>
        <span class="size_small primary_color">{{ $t("status") }}</span>
        <p class="size_very_small">{{ status }}</p>
        <span class="size_small primary_color">{{ $t("assinged") }}</span>
        <div class="d-flex flex-column" v-if="assigned == ''">
          <select
            v-model="employee"
            class="form-select mt-2"
            aria-label="Default select example"
          >
            <option selected>{{ $t("sidebar.employees") }}</option>
            <option v-for="data in dataSource" :key="data.id" :value="data.username">
              {{ data.username }}
            </option>
          </select>
          <baseButton
            @click="taskAssignedTo"
            class="mt-2"
            :name="$t('submit')"
            color="primary"
          />
        </div>
        <p class="size_very_small" v-else>{{ assigned }}</p>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import baseCard from "@/components/base/baseCard";
import baseButton from "@/components/base/baseButton";
import { employeesDataStore } from "@/stores/employeesDataStore";
import { allEmployee } from "@/api/employeesApiModule";
import { taskAssignTo } from "@/api/tasksApiModule";

const employeesDataStoreModule = employeesDataStore();

const employee = ref("");

const taskAssignedTo = () => {
  taskAssignTo(
    {
      id: props.id,
      title: props.title,
      body: props.body,
      status: props.status,
      assigned: employee.value,
    },
    props.id
  );
  setTimeout(() => {
    location.reload();
  }, 2000);
};

const dataSource = computed(() => {
  return employeesDataStoreModule.employees;
});

onBeforeMount(() => {
  allEmployee();
});

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
  assigned: {
    type: Object,
    default: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped></style>
