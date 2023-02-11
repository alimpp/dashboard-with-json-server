import { defineStore } from 'pinia'
import { IEmployee } from '@/services/interfaces'

export const employeesDataStore = defineStore('employees' , {
    state: () => ({employees : [] as IEmployee []}) ,  
    actions : {}
})