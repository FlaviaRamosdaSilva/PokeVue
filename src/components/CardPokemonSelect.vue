<script setup>
import { ref, watchEffect, triggerRef } from 'vue';
const pokemon = defineProps(["name", "xp", "height", "img", "loading"]);


//gráfico:
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const dataValues = ref([pokemon.xp]);

const chartData = ref({
    labels: [pokemon.name],
    datasets: [{
    data: dataValues.value,
    backgroundColor: [ '#74DDC3' ],
 }],
});

const dataValuesTwo = ref([pokemon.height]);

const chartDataTwo = ref({
    labels: [pokemon.name],
    datasets: [{
    data: dataValuesTwo.value,
    backgroundColor: [ '#74DDC3' ],
}],
});

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
    }
};



watchEffect(() => {
    chartData.value.datasets[0].data = [pokemon.xp];
    chartData.value.labels = [pokemon.name];
    triggerRef(dataValues);
});

watchEffect(() => {
    chartDataTwo.value.datasets[0].data = [pokemon.height];
    chartDataTwo.value.labels = [pokemon.name];
    triggerRef(dataValuesTwo);
});

</script>


<template>
    <div class="card CardPokemonSelected" :class="loading ? '' : 'animate__animated animate__flipInY'">

        <img v-if="pokemon.name" :src="pokemon.img" class="card-img-top pt-2" :alt="pokemon.name">

        <img v-else src="../assets/egg_pokemon.svg" class="card-img-top pt-2" alt="????">

        <div class="card-body">
            <h5 class="card-title text-center"> {{ pokemon.name || '????' }}</h5>
            <hr>
            <div class="row">
                <section class="col">
                    <strong>XP:</strong>
                    <span> {{ pokemon?.xp }} </span>
                </section>


                <section class="col">
                    <strong>Altura:</strong>
                    <span> {{ pokemon?.height }} </span>
                </section>


            </div>
        </div>
    </div>

    <!--inicia os gráficos-->

    <div class="row mt-4">



        <div class="col mb-2 p-4 card bar"> <!--gráfico XP-->
            <p class="text-center text-body-secondary">Valor da XP representado no gráfico:</p>
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>


        <div class="col mb-2 p-4 card bar">  <!--gráfico altura-->
            <p class="text-center text-body-secondary">Valor da altura representado no gráfico:</p>
            <Bar id="my-chart-id-two" :options="chartOptions" :data="chartDataTwo" />
        </div>

    </div>

    <div class="col mb-5" style="height: 20px;"></div>

    <!--termina os gráficos-->
</template>

<style scoped>
.bar {
    height: 250px;
    width: 200px;
}

.CardPokemonSelected {
    height: 75vh;
    background: rgb(234, 234, 242);
    background: radial-gradient(circle, rgba(210, 210, 235, 0.821) 9%, rgba(116, 221, 195, 0.88) 51%, rgba(171, 197, 168, 0.888) 94%);
}

.CardPokemonSelected img {
    height: 250px;
}

@media (max-width: 768px) {
    .CardPokemonSelected {
        height: 30vh;
        width: 40%;
        margin: 0 auto 10px auto;
    }

    .CardPokemonSelected img {
        height: 70px;
    }
}
</style>