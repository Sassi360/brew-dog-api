<script setup>
import { fetchBeers } from '~/api/beers'

const { data: beers, pending, error, refresh } = useAsyncData('beers', fetchBeers)

if (error.value)
  console.error(error.value)
</script>

<template>
  <div v-if="pending">
    Loading...
  </div>

  <div v-else-if="error">
    Error: {{ error.message }}
    <button @click="refresh">
      Refresh Data
    </button>
  </div>

  <div v-else class="list">
    <BeerItem v-for="beer in beers" :key="beer.id" :beer="beer" />
  </div>
</template>

<style scoped>
.list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 20px;
}
</style>
