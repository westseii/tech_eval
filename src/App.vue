<script setup>
  import { RouterLink, RouterView } from "vue-router";
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
</style>
