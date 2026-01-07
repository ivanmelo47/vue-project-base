<template>
  <div class="admin-users">
    <div class="actions" style="margin-bottom: 1.5rem;">
        <button class="btn-primary">Add New User</button>
    </div>
    
    <AdminTable :headers="['ID', 'Name', 'Email', 'Role', 'Status']">
        <tr v-for="user in users" :key="user.id">
            <td>#{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
                <span class="status-badge" :class="user.status">{{ user.status }}</span>
            </td>
        </tr>
    </AdminTable>
  </div>
</template>

<script setup lang="ts">
import AdminTable from '@/views/private/admin/components/AdminTable.vue'
import { ref } from 'vue'

const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
])
</script>


