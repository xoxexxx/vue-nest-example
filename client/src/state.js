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


export const useStatisticStore = defineStore("statistics", {
    state: () => {
        return {
            log: "",
            val: "",
            total: "",
            cookies: "", 
            passwords: "", 
            wallets: "",  
            autofills: "",
            social: "",
            cards: "",
            date: "",
        }
    },
    actions: {
       async pushStatistic() {
            try {
                const res = await fetch("http://localhost:3000/statistics", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                     },
                    body: JSON.stringify({log: this.log, val: this.val})
                }).then(res => console.log(res))

            } catch (error) {
                console.error(error);
            }
            
        },
        async pushDateStatistic() {
            try {
                const res = await fetch("http://localhost:3000/", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                     },
                    body: JSON.stringify({ total: this.total,
                    cookies: this.cookies, 
                    passwords: this.passwords, 
                    wallets: this.wallets,  
                    autofills: this.autofills,
                    social: this.social,
                    cards: this.cards,
                    date: this.date,
                })
                }).then(res => console.log(res))
            } catch (error) {
                console.error(error);
            }
            console.log(this.total, this.cookies, this.passwords, this.wallets, this.autofills, this.social, this.cards, new Date(this.date))
        },
    }  
})

