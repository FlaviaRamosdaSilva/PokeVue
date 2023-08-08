

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend} from 'chart.js'
import {BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

let dataValues = [15, 25]

const chartData = {
  labels: [  "janeiro", "fevereiro"  ],
  datasets: [{
    data: dataValues,
  backgroundColor: 'black'
}],
  };

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 14, // Tamanho da fonte
          family: 'Arial', // Família da fonte
          weight: 'bold', // Peso da fonte (normal, bold, etc.)
          color: 'black' // Cor da fonte (substitua 'red' pela cor desejada)
        }
      }
    },
    scales:{
    y: [{ticks: {min: 0, max: 350 }}] //You can repeat the same for X-axis if it contains integers. 
 } 
  }
  };


</script>

<template>
  <div class="bar">
  <Bar 
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</div>
</template>

<style scoped>
.bar {
  height: 350px;
  width: 350px;
}
</style>