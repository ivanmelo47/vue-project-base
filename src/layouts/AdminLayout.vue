<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <div class="admin-content-area">
      <AdminHeader :title="$route.name?.toString() || 'Dashboard'" />
      
      <main class="admin-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AdminSidebar from '@/views/private/admin/components/AdminSidebar.vue'
import AdminHeader from '@/views/private/admin/components/AdminHeader.vue'

// Import Admin Styles
import '@/sass/admin.scss'
</script>

<style scoped lang="scss">
/* Layout styles are now handled in _layout.scss */
</style>
