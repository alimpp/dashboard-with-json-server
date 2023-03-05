import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification } from '@/services/notifications'
import { SuccessNotification } from '@/services/notifications'
import { tasksDataStore } from '@/stores/tasksDataStore'

const tasksDataStoreModule = tasksDataStore()

export const allTasks = async () => {
   await axios.get(`${application_base_url}${application_path.GET.TASKS}`)
   .then((res)=> {
    tasksDataStoreModule.tasks = res.data
})
.catch(()=> {
    ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
})
}

export const taskAssignTo = async (param : any , id : number) => {
    await axios.put(`${application_base_url}${application_path.PUT.ASSIGN_TASK}/${id}`, {
        id : param.id , 
        title : param.title , 
        body : param.body , 
        status : param.status , 
        assigned : param.assigned
    })
    .then(() => {
        SuccessNotification(2000, `Task assign To ${param.assigned}`,'bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const CreateTask = async (param : any) => {
    await axios.post(`${application_base_url}${application_path.POST.CREATE_TASKS}`, {
        title : param.title , 
        body : param.body , 
        status : "In Demo Version..." , 
        assigned : "" ,
    })
    .then(() => {
        SuccessNotification(2000, 'Task Created','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}