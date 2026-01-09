<template>
  <nav class="public-nav">
    <div class="container">
      <div class="logo">EduManager</div>
      
      <!-- Desktop Menu -->
      <div class="nav-links desktop-menu">
        <RouterLink to="/" class="nav-item">Inicio</RouterLink>
        <RouterLink to="/login" class="nav-item">Iniciar Sesión</RouterLink>
        <a href="#" @click.prevent="themeStore.toggleTheme" class="nav-item theme-toggle" title="Toggle Theme">
          <i class="bi" :class="themeStore.theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'"></i>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu">
        <i class="bi" :class="isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <RouterLink to="/" class="nav-item" @click="isMobileMenuOpen = false">Inicio</RouterLink>
      <RouterLink to="/login" class="nav-item" @click="isMobileMenuOpen = false">Iniciar Sesión</RouterLink>
      <a href="#" @click.prevent="themeStore.toggleTheme" class="nav-item theme-toggle">
        <span class="label">Tema</span>
        <i class="bi" :class="themeStore.theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'"></i>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
