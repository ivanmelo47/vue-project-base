<template>
  <div class="stats-card">
    <div class="meta">
        <h3>{{ title }}</h3>
        <div class="value">{{ value }}</div>
    </div>
    <div class="icon">
        <slot name="icon">#</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  value: string | number
}>()
</script>
