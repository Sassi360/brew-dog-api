<template>
    <span v-if="pending">Loading...</span>
    <span v-else-if="error">Error: {{ error.message }}</span>

    <template v-for="beer in beers" :key="beer.id">
        <h2>{{ beer.name }}</h2>
    </template>

    <button @click="refresh">Refresh Data</button>
</template>

<script setup>
const { data: beers, pending, error, refresh } = useAsyncData('beers', async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012')
    let beers = await response.json()

    return beers
})
</script>
