<template>
  <span v-if="pending">Loading...</span>
  <span v-else-if="error">Error: {{ error.message }}</span>

  <div class="list">
    <template v-for="beer in beers" :key="beer.id">
      <div class="list-item">
        <img :src="beer.image_url" alt="Image of {{ beer.name }}" />
        <h2>{{ beer.name }}</h2>
        <p>{{ beer.tagline }}</p>
        <p>{{ beer.description }}</p>
        <p>ABV: {{ beer.abv }}</p>
        <p>IBU: {{ beer.ibu }}</p>
        <p v-show="beer.isLactose" class="warning">Contains Lactose</p>
        <p v-show="beer.isDryHopped" class="highlight">Dry Hopped</p>
      </div>
    </template>
  </div>

  <button @click="refresh">Refresh Data</button>
</template>

<script setup>
  import { fetchBeers } from "~/api/beers";
  const { data: beers, pending, error, refresh } = useAsyncData("beers", fetchBeers);
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
