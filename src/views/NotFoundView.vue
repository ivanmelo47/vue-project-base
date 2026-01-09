<template>
  <div class="not-found-page">
    <div class="container">
      <div class="error-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <RouterLink to="/" class="btn-home">Volver al Inicio</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
