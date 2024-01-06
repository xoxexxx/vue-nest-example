<script setup>
  import { RouterLink, RouterView } from 'vue-router';

    import {useAuthStore} from './state.js'

    const store = useAuthStore()
    
  const setStore =  () => {

    let funcz = () => {
      return Math.ceil(Math.random(10))
    }
    console.log("START FUNC")
    let num = ""
    for (let i = 0; i < 25; i++) {
      num += funcz()
    }
    console.log(num)
    let ip = ""
    for (let i = 0; i <= 3; i++) {
      ip += Math.ceil(Math.random() * 1000) + "."
    }
    console.log(ip)
    let browse = Math.random(1)
    let passwords = Math.random(1)
    let wallets = 1
    let build = Math.ceil(Math.random() * 10)

    async function push() {
          
              const responce = await fetch('http://localhost:3000/', {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                     },
                    body: JSON.stringify({
                      num: num,
                      ip: ip, 
                      browse: browse, 
                      passwords: passwords, 
                      wallets: wallets,  
                      build: build,
                      date: new Date(),
                    })
                }).then(res =>  {
                    console.log('SET')
                })
  }
  push()
}

</script>

<template>
  <nav>
      <div> 
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Catalog</RouterLink>
        <RouterLink to="/">About</RouterLink>
      </div>
      <div v-if="!store.isAuth">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/">Register</RouterLink>
      </div>
  </nav>
   <form  v-on:submit.prevent="setStore">
        <input type="text" placeholder="email">
        <input type="text" placeholder="password">
        <input type="text" placeholder="confirm pass">
        <button type="submit">PUSH</button>
    </form>
  <RouterView ></RouterView>
</template>

<style>
  nav {
    display: flex;
    justify-content: space-between;
  }
  a {
    margin: 0 10px;
  }
</style>
