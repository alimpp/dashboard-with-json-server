<template>
  <div class="tickets-tabs d-flex flex-column pt-2 px-3">
    <createTicketModal />
    <div class="row mb-5">
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
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import createTicketModal from "@/components/modals/createTicketModal";
import ticketsCard from "@/components/cards/ticketsCard";
import { allTickets } from "@/api/ticketsApiModule";
import { ticketsDataStore } from "@/stores/ticketsDataStore";

const ticketsDataStoreModule = ticketsDataStore();  

const dataSourece = computed(() => {
  return ticketsDataStoreModule.tickets;
});

onBeforeMount(() => {
  allTickets();
});
</script>

<style>
.tickets-tabs {
  height: 85vh;
  margin: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
