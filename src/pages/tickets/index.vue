<template>
  <div class="index-blogs px-2">
    <baseLoading class="mt-5" v-if="loading" />
    <div class="row app_animation" v-else>
      <div class="row">
        <div class="col-lg-3" v-for="data in dataSourece" :key="data.id">
          <ticketsCard
            :id="data.id"
            :email="data.email"
            :title="data.title"
            :body="data.body"
            :replayTikcet="data.replayTikcet"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import baseLoading from "@/components/base/baseLoading";
import ticketsCard from "@/components/cards/ticketsCard";
import { allTickets } from "@/api/ticketsApiModule";
import { ticketsDataStore } from "@/stores/ticketsDataStore";

const loading = ref(false);
const ticketsDataStoreModule = ticketsDataStore();

const dataSourece = computed(() => {
  return ticketsDataStoreModule.tickets;
});

onBeforeMount(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    allTickets();
  }, 2000);
});
</script>

<style lang="scss" scoped>
.index-blogs {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
