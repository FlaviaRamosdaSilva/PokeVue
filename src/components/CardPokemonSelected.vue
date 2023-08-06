<script setup>
const pokemon = defineProps([ "name", "xp", "height", "img", "loading" ]);

</script>

<template>
    <div class="card CardPokemonSelected"
    :class=" loading ? '' : 'animate__animated animate__flipInY'">
        
        <img
        v-if="pokemon.name"
        :src="pokemon.img"
        class="card-img-top pt-2"
        height="250"
        :alt="pokemon.name">

        <img
        v-else src="../assets/egg_pokemon.svg"
        class="card-img-top pt-2"
        height="250"
        alt="????">
        
        <div class="card-body">
            <h5 class="card-title text-center"> {{ pokemon.name || '????' }}</h5>
            <hr>
            <div class="row">
                <section class="col">
                    <strong>XP:</strong>
                    <span> {{ pokemon?.xp }}</span>
                </section>


                <section class="col">
                    <strong>Altura:</strong>
                    <span> {{ pokemon?.height }} </span>
                </section>


            </div>
        </div>
    </div>
</template>

<style scoped>
.CardPokemonSelected {
    height: 75vh;
    background: rgb(234, 234, 242);
    background: radial-gradient(circle, rgba(210, 210, 235, 0.821) 9%, rgba(116, 221, 195, 0.88) 51%, rgba(171, 197, 168, 0.888) 94%);
    
}

</style>