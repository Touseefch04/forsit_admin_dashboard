<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Revenue Analysis</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="p-4 bg-white rounded shadow">
        <h2 class="text-lg font-semibold">Total Orders</h2>
        <p class="text-xl">{{ revenue.orders }}</p>
      </div>
      <div class="p-4 bg-white rounded shadow">
        <h2 class="text-lg font-semibold">Total Sales</h2>
        <p class="text-xl">${{ revenue.sales.toFixed(2) }}</p>
      </div>
      <div class="p-4 bg-white rounded shadow">
        <h2 class="text-lg font-semibold">Top Category</h2>
        <p class="text-xl">{{ topCategory }}</p>
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-lg font-semibold mb-2">Revenue Trend</h2>
      <line-chart :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  components: {
    LineChart: {
      extends: Line,
      props: ['chartData'],
      mounted() {
        this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false });
      }
    }
  },
  data() {
    return {
      revenue: {
        orders: 0,
        sales: 0,
        categories: {},
        trends: [],
      },
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Revenue',
            data: [],
            borderColor: '#3b82f6',
            tension: 0.4,
            fill: false,
          },
        ],
      },
    };
  },
  computed: {
    topCategory() {
      const entries = Object.entries(this.revenue.categories);
      if (entries.length === 0) return 'N/A';
      return entries.sort((a, b) => b[1] - a[1])[0][0];
    },
  },
  async mounted() {
    const res = await axios.get('http://localhost:5000/api/revenue');
    this.revenue = res.data;

    this.chartData.labels = res.data.trends.map(t => t.date);
    this.chartData.datasets[0].data = res.data.trends.map(t => t.revenue);
  },
};
</script>

<style scoped>
.line-chart {
  height: 300px;
}
</style>