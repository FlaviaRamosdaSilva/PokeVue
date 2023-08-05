<script setup>
const pokemon = defineProps([ "name", "xp", "height", "img" ]);

</script>

<template>
    <div class="card">
        
        <img :src="pokemon.img"
        class="card-img-top pt-2"
        height="250"
        :alt="pokemon.name">
        
        <div class="card-body">
            <h5 class="card-title text-center"> {{ pokemon?.name }}</h5>
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

<style scoped></style>