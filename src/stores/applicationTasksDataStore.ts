import { defineStore } from "pinia";
import { ITasks } from "@/services/interfaces";

export const applicationTasksDataStore = defineStore("applicationtasks", {
  state: () => ({ tasks: [] as ITasks[] }),
  getters: {
    tasksDataSource(state) {
      const data = state.tasks;
      return data.slice(0, 100);
    },
  },
  actions: {
    deleteTicket(id: number) {
      this.tasks = this.tasks.filter((task) => task.id != id);
    },
  },
});
