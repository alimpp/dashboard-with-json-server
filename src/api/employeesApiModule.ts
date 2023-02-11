import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification } from '@/services/notifications'
import { SuccessNotification } from '@/services/notifications'
import { employeesDataStore } from '@/stores/employeesDataStore'

const employeesDataStoreModule = employeesDataStore()

export const allEmployee = async () => {
    await axios.get(`${application_base_url}${application_path.GET.EMPLOYEES}`)
    .then((res)=> {
        employeesDataStoreModule.employees = res.data
    })
    .catch(()=> {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const createEmpolyee = async (param : any) => {
    await axios.post(`${application_base_url}${application_path.POST.CREATE_EMPLOYEES}`, {
        username : param.username , 
        email : param.email , 
        image : param.image
    })
    .then(() => {
        SuccessNotification(2000, 'Ticket created','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}