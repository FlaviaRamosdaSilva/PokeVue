<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListPokemons from '../components/ListPokemons.vue';

let pokemons = reactive({ name: [] });

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
    .then(res => res.json())
    .then(res => pokemons.name = res.results);
})

</script>

<template>
  <main>
    <div class="container">

      <div class="row mt-4">

        <div class="col-sm-12 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://seeklogo.com/images/P/Pikachu-logo-D0AAA93F17-seeklogo.com.png" class="card-img-top"
              alt="Pikachu">
            <div class="card-body">
              <h5 class="card-title">Pikachu</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <ul>
            <li v-for="pokemon in pokemons.name" :key="pokemon.name">
              {{ pokemon.name }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped></style>
