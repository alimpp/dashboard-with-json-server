import { defineStore } from "pinia";
export const applicationTicketsDataStore = defineStore("applicationtickets", {
  state: () => ({ tickets: [] }),
  getters: {
    ticketsDataSource(state) {
      const data = state.tickets;
      return data.slice(0, 100);
    },
  },
  actions: {
    deleteTicket(id: number) {
      this.tickets = this.tickets.filter((ticket) => ticket.id != id);
    },
  },
});
