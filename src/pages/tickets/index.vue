<template>
  <div class="index-blogs">
    {{dataSource}}
  </div>
</template>

<script setup>
import {computed , onBeforeMount } from 'vue'
import { applicationTicketsDataStore } from "@/stores/applicationTicketsDataStore";
import {ticketsApi} from '@/stores/api/ticketsApi'

const ticketsApiModule = ticketsApi()
const tickets = applicationTicketsDataStore()

const dataSource = computed(() => {
  return tickets.ticketsDataSource
})

onBeforeMount (() => {
  ticketsApiModule.tickets()
})
</script>

<style lang="scss" scoped>
.index-blogs{
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
