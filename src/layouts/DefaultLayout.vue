<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
// Import Public Styles
import '@/sass/public.scss' 
import { useThemeStore } from '@/stores/theme'
import PublicNavbar from '@/components/PublicNavbar.vue'
import PublicFooter from '@/components/PublicFooter.vue'

const themeStore = useThemeStore()

onMounted(() => {
    themeStore.initTheme()
})
</script>

<template>
  <div class="default-layout">
    <PublicNavbar />
    <main>
      <RouterView />
    </main>
    <PublicFooter />
  </div>
</template>

<style scoped>
.default-layout {
    background-color: var(--admin-bg);
    color: var(--admin-text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
</style>
