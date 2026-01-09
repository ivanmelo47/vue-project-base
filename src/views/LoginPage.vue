<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <h2>Bienvenido</h2>
        <p>Ingrese a su cuenta</p>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input type="text" id="username" v-model="username" placeholder="juan.perez" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="••••••••" required />
        </div>
        <button type="submit" class="btn-submit">Ingresar</button>
      </form>
      <div class="login-footer">
        <RouterLink to="/">Volver al Inicio</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  // Mock login - in a real app this would call an auth store/service
  console.log('Logging in with', username.value)
  // Redirect to admin dashboard on success
  router.push('/admin')
}
</script>
