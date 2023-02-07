import { defineStore } from 'pinia'
import { ITickets } from '@/services/interfaces'

export const ticketsDataStore = defineStore('tickets' , {
    state: () => ({tickets : [] as ITickets[]}) ,  
    actions : {}
})