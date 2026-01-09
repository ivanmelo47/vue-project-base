import { createRouter, createWebHistory } from 'vue-router'

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
          name: 'landing',
          component: () => import('@/views/LandingPage.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/LoginPage.vue')
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
          component: () => import('@/views/private/admin/DashboardView.vue'),
          meta: { title: 'Dashboard' }
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/private/admin/UsersView.vue'),
          meta: { title: 'User Management' }
        },
        {
          path: 'reports',
          name: 'admin-reports',
          component: () => import('@/views/private/admin/ReportsView.vue'),
          meta: { title: 'Reports & Analytics' }
        },
        {
          path: 'charts',
          name: 'admin-charts',
          component: () => import('@/views/private/admin/ChartsView.vue'),
          meta: { title: 'Charts' }
        },
        // Moved from Master
        {
          path: 'settings',
          name: 'admin-settings',
          component: () => import('@/views/private/master/SettingsView.vue'),
          meta: { title: 'System Settings' }
        },
        {
          path: 'audit',
          name: 'admin-audit',
          component: () => import('@/views/private/master/AuditLogView.vue'),
          meta: { title: 'Audit Logs' }
        },
        // Moved from User
        {
          path: 'profile',
          name: 'admin-profile',
          component: () => import('@/views/private/user/ProfileView.vue'),
          meta: { title: 'My Profile' }
        },
        {
          path: 'tasks',
          name: 'admin-tasks',
          component: () => import('@/views/private/user/MyTasksView.vue'),
          meta: { title: 'My Tasks' }
        }
      ]
    }
  ]
})

export default router
