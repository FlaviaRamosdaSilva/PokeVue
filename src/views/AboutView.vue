
<script setup>
import BarChart from '../components/BarChart.vue';

import { onMounted, reactive, computed, ref } from 'vue';

// Gráfico //
const components = { BarChart };
const name = 'AboutView';

let urlBaseId = ref("https://pokeapi.co/api/v2/pokemon/" + 3);
console.log(urlBaseId)


let pokemons = reactive({ name: [] });
let pokemonId = reactive({ id: [] });


onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
    .then(res => res.json())
    .then(res => pokemons.name = res.results)
})

</script>


<template>
  <div class="container mt-4 text-body-secondary">
    <div class="card">
      <h1 class="text-center">Gráficos da PokeVue</h1>

      <div class="card-body">
        Abaixo seguem os gráficos dos pokemons que listamos na página de Home.
      </div>
      <div class="container">

        <div class="col row mt-4">
          <div class="col">
            <BarChart />
          </div>

             </div>

      </div>
    </div>
  </div>
</template>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.card-list {
  max-height: 75vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .card-list {
    max-height: 45vh;
  }
}
</style>
