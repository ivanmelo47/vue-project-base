<template>
  <div class="user-profile">
    <AdminHeader title="My Profile" />
    <div class="content-wrapper">
        <div class="profile-card">
            <div class="avatar">U</div>
            <div class="info">
                <h3>User Name</h3>
                <p>user@example.com</p>
                <span class="role-badge">Standard User</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '@/views/private/admin/components/AdminHeader.vue'
</script>

<style scoped>
.profile-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.avatar {
    width: 64px;
    height: 64px;
    background: #42b883;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
}
.role-badge {
    background: #dbeafe;
    color: #1e40af;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
}
</style>
