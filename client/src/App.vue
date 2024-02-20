<script setup>
  import { RouterLink, RouterView } from 'vue-router';

    import {useAuthStore} from './state.js'

    const store = useAuthStore()

</script>

<template>
  <nav>
      <div> 
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
        <RouterLink to="/">About</RouterLink>
      </div>
      <div v-if="!store.isAuth">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/">Register</RouterLink>
      </div>
  </nav>
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
