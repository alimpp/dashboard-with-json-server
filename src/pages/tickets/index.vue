<template>
  <div class="index-tickets px-2">
    <baseEmpty
      :text="$t('emptyticket')"
      :buttonName="$t('sidebar.tickets')"
      routeName="Setting"
      v-if="ticketsDataStoreModule.tickets.length === 0"
    />
    <div v-else>
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
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import baseLoading from "@/components/base/baseLoading";
import ticketsCard from "@/components/cards/ticketsCard";
import baseEmpty from "@/components/base/baseEmpty";
import { allTickets } from "@/api/ticketsApiModule";
import { ticketsDataStore } from "@/stores/ticketsDataStore";

const loading = ref(false);
const ticketsDataStoreModule = ticketsDataStore();

const dataSourece = computed(() => {
  return ticketsDataStoreModule.tickets;
});

onBeforeMount(() => {
  loading.value = true;
  console.log(ticketsDataStoreModule.tickets.length);
  setTimeout(() => {
    loading.value = false;
    allTickets();
  }, 1000);
});
</script>

<style lang="scss" scoped>
.index-tickets {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
