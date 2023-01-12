<template>
  <div class="index-blogs px-2">
    <baseLoading class="mt-5" v-if="loading" />
    <div class="row" v-else>
      <div class="col-lg-4 app_animation" v-for="data in dataSource" :key="data.id">
        <ticketsCard :email="data.email" :body="data.body" :id="data.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref ,computed, onBeforeMount } from "vue";
import baseLoading from "@/components/base/baseLoading";
import { applicationTicketsDataStore } from "@/stores/applicationTicketsDataStore";
import { ticketsApi } from "@/stores/api/ticketsApi";
import ticketsCard from "@/components/cards/ticketsCard";
const ticketsApiModule = ticketsApi();
const tickets = applicationTicketsDataStore();

const loading = ref(false)

const dataSource = computed(() => {
  return tickets.ticketsDataSource;
});

onBeforeMount(() => {
  ticketsApiModule.tickets();
  loading.value = true
  setTimeout(() => {
     loading.value = false
  }, 3000)
});
</script>

<style lang="scss" scoped>
.index-blogs {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
