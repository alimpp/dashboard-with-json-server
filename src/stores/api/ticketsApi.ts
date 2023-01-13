import { defineStore } from "pinia";
import {applicationTicketsDataStore} from '../applicationTicketsDataStore'
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import axios from "axios";
import { toast_message } from "@/services/notifications";

const applicationTicketsData = applicationTicketsDataStore();

export const ticketsApi = defineStore("ticketsapi", {
  actions: {
    async tickets() {
      const res = await axios
        .get(`${application_base_url}${application_path.GET.TICKETS}`)
        .then((res) => {
          applicationTicketsData.tickets = res.data;
        })
        .catch((error) => {});
    },
    async deleteTickets(id: number) {
      await axios.delete(
        `${application_base_url}${application_path.DELETE.DELETE_TICKETS}/${id}`
      );
      toast_message('Tickets deleted','success',3000)
      applicationTicketsData.deleteTicket(id)
    },
  },
});
