import { defineStore } from "pinia";
export const applicationTasksDataStore = defineStore("applicationtasks", {
  state: () => ({ tasks: [] }),
  getters: {
    tasksDataSource(state) {
      const data = state.tasks;
      return data.slice(0, 100);
    },
  },
  actions: {
    // deleteTicket(id: number) {
    //   this.tickets = this.tickets.filter((ticket) => ticket.id != id);
    // },
  },
});
