<template>
  <div class="landing-page">
    <header class="hero">
      <div class="container">
        <h1>Gestión Escolar Simplificada</h1>
        <p>Potencie su institución educativa con nuestra plataforma integral de administración.</p>
        <RouterLink to="/login" class="cta-button">Acceder al Portal</RouterLink>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <div class="feature-card">
          <h3>Administración de Alumnos</h3>
          <p>Gestione expedientes, calificaciones y asistencia de forma eficiente.</p>
        </div>
        <div class="feature-card">
          <h3>Portal Docente</h3>
          <p>Herramientas para que los profesores planifiquen y evalúen mejor.</p>
        </div>
        <div class="feature-card">
          <h3>Comunicación</h3>
          <p>Mantenga informada a toda la comunidad educativa.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
