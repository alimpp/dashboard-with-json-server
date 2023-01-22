import { defineStore } from "pinia";
import axios from "axios";
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import { toast_message } from "@/services/notifications";
import { applicationTasksDataStore } from "@/stores/applicationTasksDataStore";

const applicationTasksData = applicationTasksDataStore();

export const tasksApi = defineStore("tasksapi", {
  actions: {
    async tasks() {
      const res = await axios
        .get(`${application_base_url}${application_path.GET.TASKS}`)
        .then((res) => {
          applicationTasksData.tasks = res.data;
        })
        .catch((error) => {
          toast_message("Your network is low please try again", "error", 3000);
        });
    },
    async deleteTask(id: number) {
      await axios.delete(
        `${application_base_url}${application_path.DELETE.DELTE_TASK}/${id}`
      );
      toast_message("Task deleted", "success", 3000);
      applicationTasksData.deleteTask(id);
    },
    async editTask(data: any) {
      await axios
        .put(
          `${application_base_url}${application_path.PUT.UPDATE_TASK}/${data.id}`,
          {
            title: data.title,
          }
        )
        .then((res) => {
          toast_message("Task updated", "success", 2000);
        })
        .catch((err) => {
          toast_message("Your network is low please try again", "error", 3000);
        });
      applicationTasksData.editTask(data);
    },
  },
});
