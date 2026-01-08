<template>
  <div class="charts-view">
    <div class="page-header mb-4">
      <h2 class="page-title">Charts & Analytics</h2>
      <p class="text-muted">Example charts using Chart.js and Vue-Chartjs</p>
    </div>

    <div class="row">
      <!-- Bar Chart -->
      <div class="col-12 col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="card-title mb-0">Monthly Revenue</h5>
          </div>
          <div class="card-body">
            <div class="chart-container">
              <Bar :data="barData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>

      <!-- Doughnut Chart -->
      <div class="col-12 col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="card-title mb-0">User Distribution</h5>
          </div>
          <div class="card-body">
            <div class="chart-container">
              <Doughnut :data="doughnutData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>

       <!-- Line Chart -->
       <div class="col-12 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <h5 class="card-title mb-0">Traffic Growth</h5>
          </div>
          <div class="card-body">
             <div class="chart-container" style="height: 300px">
              <Line :data="lineData" :options="chartOptions" />
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
} from 'chart.js'
import { Bar, Doughnut, Line } from 'vue-chartjs'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement)

// Common Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

// Data for Bar Chart
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue 2024',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40]
    }
  ]
}

// Data for Doughnut Chart
const doughnutData = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

// Data for Line Chart
const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Active Users',
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
}
</style>
