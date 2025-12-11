<script setup lang="ts">
import { RouterView } from 'vue-router'
// Import Public/Main Styles
import '@/sass/main.scss' 
</script>

<template>
  <div class="default-layout">
     <!-- Defines the structure for public pages -->
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/admin">Admin Panel</RouterLink>
      </nav>
    </header>
    
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Layout specific scoped styles if any */
</style>
