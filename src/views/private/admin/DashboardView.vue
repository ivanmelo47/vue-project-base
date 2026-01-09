<template>
  <div class="admin-dashboard">
    <div class="stats-grid">
        <AdminStatsCard title="Total Users" value="1,240">
            <template #icon><i class="bi bi-people-fill"></i></template>
        </AdminStatsCard>
        <AdminStatsCard title="Revenue" value="$45,200">
             <template #icon><i class="bi bi-currency-dollar"></i></template>
        </AdminStatsCard>
        <AdminStatsCard title="Active Sessions" value="245">
             <template #icon><i class="bi bi-activity"></i></template>
        </AdminStatsCard>
        <AdminStatsCard title="Pending Orders" value="12">
             <template #icon><i class="bi bi-box-seam-fill"></i></template>
        </AdminStatsCard>
    </div>
    
    <div class="recent-activity" style="margin-top: 2rem;">
        <h3>Recent Activity</h3>
        <p>System functioning normally.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminStatsCard from '@/views/private/admin/components/AdminStatsCard.vue'
</script>


