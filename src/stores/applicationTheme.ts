import { defineStore } from 'pinia'
export const applicationTheme = defineStore('' , {
    state: () => ({themeStatus : 'dark'}) ,  
    actions : {
       changeThemeStatus(){
        if(this.themeStatus === "light"){
            this.themeStatus = "dark"
        } else if(this.themeStatus === "dark"){
            this.themeStatus = "light"
        }
       },
       darkMode(){
        this.themeStatus = 'dark'
       } , 
       lightMode(){
        this.themeStatus = 'light'
       }
    }
})