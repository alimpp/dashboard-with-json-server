import { defineStore } from "pinia";
export const applicationTicketsDataStore = defineStore("applicationtickets", {
  state: () => ({ tickets: []}),
  getters: {
    ticketsDataSource(state){
        return state.tickets
    }
  },
  actions: {},
});
