<template>
  <div class="master-audit">
    <AdminHeader title="Audit Logs" />
    <div class="content-wrapper">
        <div class="log-entry" v-for="i in 5" :key="i">
            <span class="timestamp">2023-10-27 10:{{ 30 + i }} AM</span>
            <span class="action">User admin updated settings</span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '@/views/private/admin/components/AdminHeader.vue'
</script>

<style scoped>
.log-entry {
    background: white;
    padding: 1rem;
    border-bottom: 1px solid #f3f4f6;
    display: flex;
    gap: 2rem;
}
.timestamp { color: #6b7280; font-family: monospace; }
</style>
