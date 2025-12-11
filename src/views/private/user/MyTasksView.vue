<template>
  <div class="user-tasks">
    <AdminHeader title="My Tasks" />
    <div class="content-wrapper">
        <ul class="task-list">
            <li>Review documents</li>
            <li>Submit timesheet</li>
            <li>Update profile</li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '@/views/private/admin/components/AdminHeader.vue'
</script>

<style scoped>
.task-list {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    list-style-position: inside;
}
</style>
