import { defineStore } from 'pinia'

export const tasksDataStore = defineStore('tasks' , {
    state: () => ({tasks : []}) ,  
    actions : {}
})