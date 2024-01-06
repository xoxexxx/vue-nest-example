import { defineStore } from "pinia";
import router from './router'
export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            isAuth: false,
            email: "",
            password: "",
            verify: ""
        }
    },
    actions: {
        login() {
            this.isAuth = true
            router.push({ path: '/' })
        },
        exit() {
            this.isAuth = false
        }
    }  
})


