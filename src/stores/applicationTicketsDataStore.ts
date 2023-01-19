import { defineStore } from "pinia";
import { ITickets } from "@/services/interfaces";
export const applicationTicketsDataStore = defineStore("applicationtickets", {
  state: () => ({ tickets: [] as ITickets[] }),
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
