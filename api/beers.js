export async function fetchBeers() {
  const response = await fetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012')
  let beers = await response.json()

  // Insert new properties for lactose and dry-hopping
  beers.forEach((beer) => {
    beer.isLactose = beer.ingredients.hops && beer.ingredients.hops.some(hops => hops.name === 'Lactose')
    beer.isDryHopped = beer.ingredients.hops && beer.ingredients.hops.some(hop => hop.add === 'dry hop')
  })

  // Sort beers by ABV
  beers.sort((a, b) => a.abv - b.abv)

  // Filter out beers with Centennial hops
  beers = beers.filter(beer => beer.ingredients.hops && !beer.ingredients.hops.some(hop => hop.name === 'Centennial'))

  return beers
}
