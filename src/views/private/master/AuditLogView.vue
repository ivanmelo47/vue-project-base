<template>
  <div class="master-audit">
    <div class="content-wrapper">
        <div class="log-entry" v-for="i in 5" :key="i">
            <span class="timestamp">2023-10-27 10:{{ 30 + i }} AM</span>
            <span class="action">User admin updated settings</span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No specific imports
</script>


