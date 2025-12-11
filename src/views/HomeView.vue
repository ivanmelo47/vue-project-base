<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>Welcome to your Vue 3 + Vite + TypeScript app!</p>
    <p>Pinia Counter: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
