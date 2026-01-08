<template>
  <div class="admin-layout" :class="{ 'is-collapsed': isSidebarCollapsed }">
    <div v-if="isMobileOpen" class="sidebar-overlay" @click="isMobileOpen = false"></div>
    <AdminSidebar 
        :collapsed="isSidebarCollapsed" 
        :class="{ 'mobile-open': isMobileOpen }"
    />
    
    <div class="admin-content-area">
      <AdminHeader 
        :title="($route.meta.title as string) || $route.name?.toString() || 'Dashboard'" 
        @toggle-sidebar="toggleSidebar"
      />
      
      <main class="admin-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AdminSidebar from '@/views/private/admin/components/AdminSidebar.vue'
import AdminHeader from '@/views/private/admin/components/AdminHeader.vue'

// Import Admin Styles
import '@/sass/main.scss'

const route = useRoute()
const isSidebarCollapsed = ref(false)
const isMobileOpen = ref(false)

const toggleSidebar = () => {
    if (window.innerWidth < 768) {
        isMobileOpen.value = !isMobileOpen.value
    } else {
        isSidebarCollapsed.value = !isSidebarCollapsed.value
    }
}

// Close mobile sidebar on route change
watch(route, () => {
    isMobileOpen.value = false
})
</script>

<style scoped lang="scss">
/* Layout styles are now handled in _layout.scss */
</style>
