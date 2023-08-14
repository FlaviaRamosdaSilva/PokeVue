
<script setup>


</script>


<template>
  <div class="container mt-4 text-body-secondary">
    <div class="card">
      <h1 class="text-center">PokeVue</h1>
      <br>  
      <div class="card-body">
       <b>Composições técnicas do site:</b><br> 
<br>
O site foi desenvolvido com Vue3 adicionado a ferramenta Vite, o framework de CSS Bootstrap e a biblioteca ChartJS para realizar os gráficos. Para animação do Card utilizamos também a biblioteca Animate CSS.<br>
<br>

<b>Link do github:</b> <a href="https://github.com/FlaviaRamosdaSilva/PokeVue">PokeVue</a><br> 
<br>

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
