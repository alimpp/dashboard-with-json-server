import { defineStore } from 'pinia'

export const employeesDataStore = defineStore('employees' , {
    state: () => ({employees : []}) ,  
    actions : {}
})