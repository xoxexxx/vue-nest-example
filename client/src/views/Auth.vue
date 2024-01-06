<template>
    <form  v-on:submit.prevent="auth">
    <label>{{store.email}}</label>
        <input type="email" placeholder="email" v-model="store.email">
        <input type="password" placeholder="password" v-model="store.password">
        <input type="password" placeholder="confirm pass" v-model="store.verify">
        <button type="submit">{{store.isAuth}}</button>
    </form>
</template>

<script setup>
    import {useAuthStore} from '../state.js'

    const store = useAuthStore()
    const { login, exit } = useAuthStore()

        async function auth(e) {
            try {
                const response = await fetch('http://localhost:3000/api', {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                     },
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password,
                    })
                }).then(res =>  {
                   login()
                })
            } catch (error) {
                console.error(error);
        }
    }

</script>

<style scoped>
    label {
    display: block;
    }
    form {
        width: 340px;
        margin: 0 auto; 
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    input {
        margin-bottom: 5px;
        width: 340px;
        padding: 10px 20px;
        border-radius: 8px;
        outline: none;
        border: 1px green solid;
    }
    button {
        width: 340px;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        outline: none;
        border: 1px green solid;
        color: green;
    }
</style>