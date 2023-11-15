<template>
    <span v-if="pending">Loading...</span>
    <span v-else-if="error">Error: {{ error.message }}</span>

    <div class="list">

        <template v-for="beer in beers" :key="beer.id">
            <div class="list-item">
                <img :src="beer.image_url" alt="Image of {{ beer.name }}">
                <h2>{{ beer.name }}</h2>
                <p>{{ beer.tagline }}</p>
                <p>{{ beer.description }}</p>
                <p>ABV: {{ beer.abv }}</p>
                <p>IBU: {{ beer.ibu }}</p>
                <p v-if="beer.isLactose" class="warning">Contains Lactose</p>
                <p v-if="beer.isDryHopped" class="highlight">Dry Hopped</p>
            </div>
        </template>
    </div>

    <button @click="refresh">Refresh Data</button>
</template>

<script setup>
const { data: beers, pending, error, refresh } = useAsyncData('beers', async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012')
    let beers = await response.json()

    // Insert new properties for lactose and dry-hopping
    beers.forEach(beer => {
        beer.isLactose = beer.ingredients.hops && beer.ingredients.hops.some(hops => hops.name === 'Lactose');
        beer.isDryHopped = beer.ingredients.hops && beer.ingredients.hops.some(hop => hop.add === 'dry hop');
    })

    // Sort beers by ABV
    beers.sort((a, b) => a.abv - b.abv)

    // Filter out beers with Centennial hops
    beers = beers.filter(beer => beer.ingredients.hops && !beer.ingredients.hops.some(hop => hop.name === 'Centennial'))

    return beers
})
</script>



<style scoped>
.list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 20px;
}

.list-item {
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
}

.list-item img {
    height: auto;
    width: 100%;
}

.list-item h2 {
    margin: 10px 0;
}

.list-item p {
    margin: 5px 0;
}

.warning {
    color: #e63946;
    font-weight: bold;
    text-decoration: underline;
}

.highlight {
    background-color: #ffc300;
    color: #000000;
    padding: 5px;
}
</style>