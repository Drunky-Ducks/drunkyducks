<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'CardMinimal',
  components: {
    RouterLink
  },
  props: {
    cocktail: Object
  },
  methods: {
    getAlt: function () {
      return `cocktail ${this.cocktail.strDrink.toLowerCase()} image`
    },
    goDetails() {}
  }
}
</script>

<template>
  <div class="container">
    <RouterLink class="card-minimal" :to="`/detalles/${cocktail.strDrink}`">
      <img :src="cocktail.strDrinkThumb" :alt="getAlt()" />
      <div class="info">
        <h1>{{ cocktail.strDrink }}</h1>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  text-align: center;
  /* filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black) */
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
}

img {
  position: relative;
  /* bottom: -15px; */
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 10px 10px 0 0;
  /* border-radius: 50%;
  border: 5px solid #40bfc1; */
  /* box-shadow: 2px 2px 5px black, -2px -2px 5px black; */
  z-index: 1;
  margin-top: 5rem;
  box-shadow: 1px 3px 29px 2px rgba(0, 0, 0, 0.66);
  border-top: #ffc300 5px inset;
  border-right: #ffc300 5px inset;
  border-left: #ffc300 5px inset;
}

.info {
  width: 80%;
  background: #202124;
  height: 8rem;
  /* border: 5px solid #40bfc1 ; */
  color: #ffc300;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  box-shadow: 1px 3px 29px 2px rgba(0, 0, 0, 0.66);
  border-bottom: #40bfc1 5px outset;
  border-right: #40bfc1 5px outset;
  border-left: #40bfc1 5px outset;
}

h1 {
  cursor: pointer;
}

@media screen and (min-width: 900px) {
  .card-minimal {
    transition: all 0.5s ease-in-out;
  }
  .card-minimal:hover {
    transform: scale(1.1);
  }
}
</style>
