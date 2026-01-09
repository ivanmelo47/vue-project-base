<template>
  <header class="admin-header">
    <div class="header-left">
      <button class="btn-toggle" @click="$emit('toggle-sidebar')">
        <i class="bi bi-list"></i>
      </button>
      <h2 class="page-title">{{ title }}</h2>
    </div>
      <div class="user-profile-dropdown" :class="{ 'active': isDropdownOpen }">
        <button class="profile-btn" @click="toggleDropdown">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff" alt="Admin" class="avatar">
          <span class="username">Admin User</span>
          <i class="bi bi-chevron-down arrow-icon"></i>
        </button>
        
        <div class="dropdown-menu">
            <div class="dropdown-header">
                <p class="user-name">Admin User</p>
                <p class="user-role">Administrator</p>
            </div>
            <ul>
                <li>
                    <RouterLink to="/admin/profile" @click="isDropdownOpen = false">
                        <i class="bi bi-person"></i> My Profile
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin/settings" @click="isDropdownOpen = false">
                        <i class="bi bi-gear"></i> Settings
                    </RouterLink>
                </li>
                
                <!-- Theme Toggle -->
                <li>
                    <div class="menu-item-switch" @click.stop="themeStore.toggleTheme">
                        <div class="switch-label">
                            <i class="bi" :class="themeStore.theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'"></i>
                            <span>Dark Mode</span>
                        </div>
                        <div class="form-switch">
                            <input class="form-check-input" type="checkbox" :checked="themeStore.theme === 'dark'" role="switch">
                        </div>
                    </div>
                </li>

                <!-- Scale Selector -->
                <li class="scale-section">
                    <div class="scale-label">
                        <i class="bi bi-display"></i>
                        <span>System Scale: {{ themeStore.scale }}%</span>
                    </div>
                    <div class="scale-controls">
                        <select 
                            class="form-select form-select-sm scale-select" 
                            :value="themeStore.scale" 
                            @click.stop
                            @change="themeStore.setScale(parseInt(($event.target as HTMLSelectElement).value))"
                        >
                            <option :value="80">80%</option>
                            <option :value="90">90%</option>
                            <option :value="100">100%</option>
                            <option :value="120">120%</option>
                            <option :value="140">140%</option>
                        </select>
                    </div>
                </li>

                <li class="divider"></li>
                <li>
                    <a href="#" class="text-danger" @click.prevent="isDropdownOpen = false">
                        <i class="bi bi-box-arrow-right"></i> Logout
                    </a>
                </li>
            </ul>
        </div>
      </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

defineProps<{
  title: string
}>()

defineEmits(['toggle-sidebar'])

const themeStore = useThemeStore()
const isDropdownOpen = ref(false)

const toggleDropdown = (event: Event) => {
    event.stopPropagation()
    isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
    isDropdownOpen.value = false
}

// Initialize theme on mount (delegating to store)
onMounted(() => {
    window.addEventListener('click', closeDropdown)
    themeStore.initTheme()
})

onUnmounted(() => {
    window.removeEventListener('click', closeDropdown)
})
</script>
