<template>
  <aside class="admin-sidebar" :class="{ 'collapsed': collapsed }">
    <div class="logo-area">
        <i class="bi bi-shield-lock-fill logo-icon"></i>
        <span class="logo-text" v-if="!collapsed">AdminPanel</span>
    </div>
    <nav>
      <ul>
        <li>
            <RouterLink to="/admin" title="Dashboard" active-class="ignore-active" exact-active-class="router-link-active">
                <i class="bi bi-speedometer2"></i>
                <span v-if="!collapsed">Dashboard</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/admin/users" title="Users">
                <i class="bi bi-people"></i>
                <span v-if="!collapsed">Users</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/admin/reports" title="Reports">
                <i class="bi bi-file-earmark-bar-graph"></i>
                <span v-if="!collapsed">Reports</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/admin/settings" title="Settings">
                <i class="bi bi-gear"></i>
                <span v-if="!collapsed">Settings</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/admin/audit" title="Audit Logs">
                <i class="bi bi-journal-text"></i>
                <span v-if="!collapsed">Audit Logs</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/admin/profile" title="My Profile">
                <i class="bi bi-person-circle"></i>
                <span v-if="!collapsed">My Profile</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/admin/tasks" title="My Tasks">
                <i class="bi bi-list-check"></i>
                <span v-if="!collapsed">My Tasks</span>
            </RouterLink>
        </li>

        <li class="separator"></li>
        <li>
            <RouterLink to="/" title="Back to Home">
                <i class="bi bi-box-arrow-left"></i>
                <span v-if="!collapsed">Back to Home</span>
            </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
    collapsed: boolean
}>()
</script>

<style scoped>
/* Styles handled in admin.scss */
</style>
