import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ticketsDataStore } from '@/stores/ticketsDataStore'
import { ErrorNotification } from '@/services/notifications'
import { SuccessNotification } from '@/services/notifications'

const ticketsDataStoreModule = ticketsDataStore()

export const allTickets = async () => {
    await axios.get(`${application_base_url}${application_path.GET.TICKETS}`)
    .then((res) => {
        ticketsDataStoreModule.tickets = res.data
    }).catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const replayTicket = async (param : any , id : number) => {
    await axios.put(`${application_base_url}${application_path.PUT.REPLAY_TICKETS}/${id}` , {
        id : param.id , 
        email : param.email , 
        title : param.title ,
        body : param.body , 
        replayTikcet : param.replayTikcet
    })
    .then(() => {
        SuccessNotification(2000, 'Message Successefull','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const CreateTicket = async (param : any) => {
    await axios.post(`${application_base_url}${application_path.POST.CREATE_TICKETS}` , {
        email : param.email , 
        title : param.title ,
        body : param.body , 
        replayTikcet : ""
    })
    .then(() => {
        SuccessNotification(2000, 'Ticket Created','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
} 

export const deleteTicket = async (id: number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_TICKETS}/${id}`)
    .then(() => {
        SuccessNotification(2000, 'Ticket Deleted','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}