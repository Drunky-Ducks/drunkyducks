<script>
import { RouterLink } from 'vue-router';

export default {
  name: "CardMinimal",
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
    goDetails() {

    }
  }
}
</script>

<template>
  <div class="container">
    <RouterLink :to="`/details/${cocktail.strDrink}`">
      <img :src="cocktail.strDrinkThumb" :alt="getAlt()">
      <div class="info">
        <h1>{{ cocktail.strDrink }}</h1>
        <span>ℹ</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  text-align: center;
  filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black)
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
  bottom: -15px;
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 5px solid #40bfc1;
  box-shadow: 2px 2px 5px black, -2px -2px 5px black;
  z-index: 1;
}

.info {
  width: 80%;
  background: #202124;
  border: 5px solid #40bfc1;
  color: #FFC300;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

h1 {
  cursor: pointer;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: #40bfc1;
  /* Color de fondo */
  color: black;
  /* Color del texto */
  padding: 10px;
  /* Espacio interno del botón */
  border: 1px solid black;
  /* Sin borde */
  border-radius: 50%;
  /* Bordes redondeados */
  cursor: pointer;
  /* Cambia el cursor al pasar el ratón */
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
