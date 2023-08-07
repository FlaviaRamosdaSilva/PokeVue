

<script setup>
import { defineProps } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const pokemon = defineProps([ "name", "xp", "height", "img", "loading" ]);

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const dataValues = [pokemon.xp];
const NamesPokemon = [pokemon.name];

urlPokemon = ref()

console.log (dataValues)

const chartData = {
  labels: [ { NamesPokemon } ],
  datasets: [{ data: dataValues }]
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
  <div>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</div>
</template>

<style scoped>
div {
  height: 350px;
  width: 350px;
}
</style>