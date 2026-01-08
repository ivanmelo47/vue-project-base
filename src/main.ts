import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'




const app = createApp(App)

document.title = import.meta.env.VITE_APP_TITLE || 'Vue Project Base'

app.use(createPinia())
app.use(router)

app.mount('#app')
