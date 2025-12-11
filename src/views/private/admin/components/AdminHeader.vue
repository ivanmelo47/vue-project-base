<template>
  <header class="admin-header">
    <h2 class="page-title">{{ title }}</h2>
    <div class="user-actions">
        <span>Admin User</span>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
