<template>
  <div class="master-settings">
    <AdminHeader title="System Settings" />
    <div class="content-wrapper">
        <div class="card">
            <h3>Global Configuration</h3>
            <p>System Maintenance Mode: <span class="badge">Off</span></p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '@/views/private/admin/components/AdminHeader.vue'
</script>

<style scoped>
.card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.badge {
    background: #e5e7eb;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
}
</style>
