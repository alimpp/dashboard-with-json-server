<template>
  <div class="index-blogs px-2">
    <div class="row">
      <div class="col-lg-4" v-for="data in dataSource" :key="data.id">
        <ticketsCard :email="data.email" :body="data.body" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { applicationTicketsDataStore } from "@/stores/applicationTicketsDataStore";
import { ticketsApi } from "@/stores/api/ticketsApi";
import ticketsCard from "@/components/cards/ticketsCard";
const ticketsApiModule = ticketsApi();
const tickets = applicationTicketsDataStore();

const dataSource = computed(() => {
  return tickets.ticketsDataSource;
});

onBeforeMount(() => {
  ticketsApiModule.tickets();
});
</script>

<style lang="scss" scoped>
.index-blogs {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
