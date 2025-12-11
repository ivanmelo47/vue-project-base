<template>
  <div class="admin-table-container">
    <table>
        <thead>
            <tr>
                <th v-for="header in headers" :key="header">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headers: string[]
}>()
</script>
