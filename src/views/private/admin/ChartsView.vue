<template>
  <div class="charts-view">
    <div class="page-header mb-4">
      <h2 class="page-title">Charts & Analytics</h2>
      <p class="text-muted">Interactive dashboards and data visualization</p>
    </div>

    <!-- Stats Row -->
    <div class="row mb-4">
      <div class="col-12 col-md-3 mb-3 mb-md-0">
        <AdminStatsCard title="Total Revenue" value="$45,230">
          <template #icon>
            <i class="bi bi-currency-dollar"></i>
          </template>
        </AdminStatsCard>
      </div>
      <div class="col-12 col-md-3 mb-3 mb-md-0">
        <AdminStatsCard title="Active Users" value="1,245">
          <template #icon>
            <i class="bi bi-people-fill"></i>
          </template>
        </AdminStatsCard>
      </div>
      <div class="col-12 col-md-3 mb-3 mb-md-0">
        <AdminStatsCard title="Bounce Rate" value="12.5%">
          <template #icon>
            <i class="bi bi-arrow-down-right-circle"></i>
          </template>
        </AdminStatsCard>
      </div>
      <div class="col-12 col-md-3">
        <AdminStatsCard title="Server Load" value="45%">
          <template #icon>
            <i class="bi bi-hdd-rack-fill"></i>
          </template>
        </AdminStatsCard>
      </div>
    </div>

    <div class="row">
      <!-- Main Line Chart (Merged) -->
      <div class="col-12 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-transparent border-0 d-flex justify-content-between align-items-center pt-3 px-4">
            <h5 class="card-title fw-bold mb-0 text-primary">Traffic Overview</h5>
            <div class="dropdown">
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button">This Year</button>
            </div>
          </div>
          <div class="card-body px-4 pb-4">
            <div class="chart-container main-chart">
              <Line :data="lineData" :options="mainChartOptions" />
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Charts -->
      <div class="col-12 col-lg-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-transparent border-0 pt-3 px-4">
            <h5 class="card-title fw-bold mb-0">Monthly Revenue</h5>
          </div>
          <div class="card-body px-4 pb-4">
            <div class="chart-container">
              <Bar :data="barData" :options="barOptions" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-header bg-transparent border-0 pt-3 px-4">
            <h5 class="card-title fw-bold mb-0">Demographics</h5>
          </div>
          <div class="card-body px-4 pb-4 d-flex justify-content-center align-items-center">
            <div class="chart-container doughnut-container">
              <Doughnut :data="doughnutData" :options="doughnutOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  type ChartOptions
} from 'chart.js'
import { Bar, Doughnut, Line } from 'vue-chartjs'
import AdminStatsCard from '@/views/private/admin/components/AdminStatsCard.vue'

// Register ChartJS components including Filler for gradients
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler)

// --- Chart Configuration ---

// Common grid styling
const gridOptions = {
  color: 'rgba(0, 0, 0, 0.05)',
  borderColor: 'transparent',
}

// 1. Line Chart (Traffic)
const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Visitors',
      fill: true,
      backgroundColor: (ctx: any) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
        return gradient;
      },
      borderColor: '#3b82f6',
      borderWidth: 3,
      tension: 0.4, // Curved lines
      pointBackgroundColor: '#fff',
      pointBorderColor: '#3b82f6',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      data: [6500, 5900, 8000, 8100, 5600, 5500, 7200, 8500, 9100, 8700, 9500, 10200]
    }
  ]
}

const mainChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#1e293b',
      bodyColor: '#64748b',
      borderColor: '#e2e8f0',
      borderWidth: 1,
      padding: 10,
    }
  },
  scales: {
    x: { grid: { display: false } },
    y: { 
      grid: gridOptions, 
      border: { display: false } 
    }
  }
}

// 2. Bar Chart (Revenue)
const barData = {
  labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#10b981',
      borderRadius: 6,
      barThickness: 24,
      data: [12000, 19000, 15000, 22000, 28000, 24000]
    }
  ]
}

const barOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false } },
    y: { 
      grid: gridOptions, 
      border: { display: false } 
    }
  }
}

// 3. Doughnut Chart (Demographics)
const doughnutData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      backgroundColor: ['#6366f1', '#f43f5e', '#f59e0b'],
      borderWidth: 0,
      hoverOffset: 4,
      data: [55, 30, 15]
    }
  ]
}

const doughnutOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: { usePointStyle: true, padding: 20 }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
}

.main-chart {
  height: 350px;
}

.doughnut-container {
  height: 250px;
  width: 250px !important; /* Fix width for center alignment */
}

/* Enhancements for cards */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
}

.stats-card {
    /* Ensure local overrides if necessary, though simpler to use global component styles */
    background: var(--admin-card-bg); /* Assuming this var exists */
}
</style>
