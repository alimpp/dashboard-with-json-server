import { defineStore } from "pinia";
import axios from "axios";
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import { toast_message } from "@/services/notifications";
import {applicationTasksDataStore} from '@/stores/applicationTasksDataStore'

const applicationTasksData = applicationTasksDataStore()

export const tasksApi = defineStore("tasksapi", {
  actions: {
    async tasks() {
      const res = await axios.get(
        `${application_base_url}${application_path.GET.TASKS}`
      )
      .then((res) => {
        applicationTasksData.tasks = res.data
      })
      .catch((error) => {
        toast_message('Your network is low please try again' , 'error' , 3000)
      });
    },
  },
});
