<template>
  <aside class="admin-sidebar">
    <div class="logo-area">
        <span>AdminPanel</span>
    </div>
    <nav>
      <ul>
        <li class="section-title">Admin</li>
        <li><RouterLink to="/admin">Dashboard</RouterLink></li>
        <li><RouterLink to="/admin/users">Users</RouterLink></li>
        <li><RouterLink to="/admin/reports">Reports</RouterLink></li>

        <li class="section-title">Master</li>
        <li><RouterLink to="/master/settings">Settings</RouterLink></li>
        <li><RouterLink to="/master/audit">Audit Logs</RouterLink></li>

        <li class="section-title">User</li>
        <li><RouterLink to="/user/profile">My Profile</RouterLink></li>
        <li><RouterLink to="/user/tasks">My Tasks</RouterLink></li>

        <li class="separator"></li>
        <li><RouterLink to="/">Back to Home</RouterLink></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.section-title {
    padding: 1rem 1.5rem 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #64748b;
    font-weight: bold;
    letter-spacing: 0.05em;
}
.separator {
    margin: 1rem 0;
    border-top: 1px solid rgba(255,255,255,0.1);
}
</style>
