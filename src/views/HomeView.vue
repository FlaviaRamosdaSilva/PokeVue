<script setup>
import { onMounted, reactive } from 'vue'

let pokemons = reactive();

onMounted(()=>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
  .then(res => res.json())
  .then(res => pokemons.value = res.results);
})

</script>

<template>
  <main>
    <div class="container text-center">

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

        
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
