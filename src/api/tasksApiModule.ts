import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification } from '@/services/notifications'
import { SuccessNotification } from '@/services/notifications'

export const allTasks = async () => {
   await axios.get(`${application_base_url}${application_path.GET.TASKS}`)
   .then((res)=> {
    res.data
})
.catch(()=> {
    ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
})
}

export const createTask = async (param : any) => {
    await axios.post(`${application_base_url}${application_path.POST.CREATE_TASKS}`, {})
    .then(() => {
        SuccessNotification(2000, 'Task created','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const deleteTask = async (id: number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_TASKS}/${id}`)
    .then(() => {
        SuccessNotification(2000, 'Task Deleted','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}