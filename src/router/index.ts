import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    },
    // --- Admin Routes ---
    {
      path: '/admin',
      component: AdminLayout,
      children: [
         {
           path: '',
           name: 'admin-dashboard',
           component: () => import('@/views/private/admin/DashboardView.vue')
         },
         {
           path: 'users',
           name: 'admin-users',
           component: () => import('@/views/private/admin/UsersView.vue')
         },
         {
           path: 'reports',
           name: 'admin-reports',
           component: () => import('@/views/private/admin/ReportsView.vue')
         }
      ]
    },
    // --- Master Routes ---
    {
      path: '/master',
      component: AdminLayout,
      children: [
        {
          path: '',
          redirect: { name: 'master-settings' } 
        },
        {
          path: 'settings',
          name: 'master-settings',
          component: () => import('@/views/private/master/SettingsView.vue')
        },
        {
          path: 'audit',
          name: 'master-audit',
          component: () => import('@/views/private/master/AuditLogView.vue')
        }
      ]
    },
    // --- User Routes ---
    {
      path: '/user',
      component: AdminLayout,
      children: [
        {
          path: '',
          redirect: { name: 'user-profile' }
        },
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('@/views/private/user/ProfileView.vue')
        },
        {
          path: 'tasks',
          name: 'user-tasks',
          component: () => import('@/views/private/user/MyTasksView.vue')
        }
      ]
    }
  ]
})

export default router
