import { defineStore } from "pinia";
import { applicationTicketsDataStore } from "../applicationTicketsDataStore";
import { application_base_url, application_path } from "@/services/applicationPath";
import axios from 'axios'

const applicationTicketsData = applicationTicketsDataStore()

export const ticketsApi = defineStore("ticketsapi", {
  actions: {
    async tickets(){
        const res = await axios.get(`${application_base_url}${application_path.GET.TICKETS}`)
        .then((res) => {
            applicationTicketsData.tickets = res.data
        })
        .catch((error) => {});
    }
  },
});
