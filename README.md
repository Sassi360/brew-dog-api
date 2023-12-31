# Coding Assessment - Nov/14/2023

Retrieve data from the BrewDog API using the provided URL: [https://api.punkapi.com/v2/beers?brewed_after=11-2012](https://api.punkapi.com/v2/beers?brewed_after=11-2012). Utilize Vue and Nuxt frameworks to present the following information for each beer:

- **Name**
- **Tagline**
- **Description**
- **Image**
- **ABV (Alcohol By Volume)**
- **IBU (International Bitterness Units)**

#### Requirements:
1. Implement a warning if the beer contains lactose and a highlight if it is dry-hopped.
2. Arrange the displayed beers in ascending order based on their ABV.
3. Exclude any beers that contain Centennial hops from the results.

## To-Do:
- [X] Set up Vue and Nuxt project structure.
- [X] Retrieve data from the BrewDog API using the provided URL.
- [X] Create components to display Name, Tagline, Description, Image, ABV, and IBU.
- [X] Implement warning for lactose and highlight for dry-hopped beers.
- [X] Implement sorting of beers in ascending order based on ABV.
- [X] Exclude beers containing Centennial hops from the results.
- [X] Handle edge cases, such as API errors or no data returned.
- [X] Ensure responsive design for various screen sizes.
- [X] Optimize performance, considering potential large datasets.
- [X] Implement error handling and logging for debugging purposes.
- [X] Update README with detailed project instructions, setup, and usage information.

---
## Setup

#### Installation

Make sure to install the dependencies

```bash
pnpm install
```

#### Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

#### Production

Build the application for production:

```bash
pnpm build
```
