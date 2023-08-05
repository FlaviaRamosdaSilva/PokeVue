<script setup>
const pokemon = defineProps(["name", "urlBaseSvg"])
</script>

<template>
    <div class="col-4 col-md-6 col-xl-3">
        <div class="card p-2 mb-3 cardListPokemon">
            <p class="text-center">{{ pokemon.name }}</p>
            <img :src="urlBaseSvg" class="card-img-top" alt="..." height="80" />
        </div>
    </div>
</template>

<style scoped>
.cardListPokemon {
    background: rgb(234, 234, 242);
    background: radial-gradient(circle, rgba(234, 234, 242, 0.8211659663865546) 9%, rgba(39, 141, 251, 0.8799894957983193) 51%, rgba(67, 116, 222, 0.8883928571428571) 94%);
    cursor: pointer;
}

.cardListPokemon img:hover {
    padding: .2rem;
}
</style>

