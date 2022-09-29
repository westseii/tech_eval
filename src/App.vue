<script setup>
  import { RouterLink, RouterView } from "vue-router";

  // root endpoint for the server/database
  const api = import.meta.env.VITE_API_ADDRESS;
</script>

<template>
  <header class="header container">
    <h1>App</h1>
  </header>

  <main class="main container">
    <RouterView />
  </main>
</template>

<style scoped>
  .container {
    padding: 0 16px;
    width: 100%;
  }

  .main {
    margin-bottom: 64px;
  }
</style>
