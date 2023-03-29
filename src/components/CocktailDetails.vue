<script>
export default {
  name: "CocktailDetails",
  props: {
    cocktail: Object
  },
  methods: {
    getAlt: function () {
      return `cocktail ${this.cocktail.strDrink.toLowerCase()} image`;
    }
  }
}
</script>

<template>
  <div class="container">
    <div>
      <h1>{{ cocktail.strDrink }}</h1>
      <h2>{{ cocktail.strAlcoholic }}</h2>
    </div>
    <picture>
      <img :src="cocktail.strDrinkThumb" :alt="getAlt()">
    </picture>
    <div class="ingredients-container">
      <h3>Ingredientes:</h3>
      <ul class="ingredients">
        <li v-for="(value, index) in cocktail.strIngredients" :key="index">
          {{ value }} <span v-if="cocktail.strMeasures[index]"> - {{ cocktail.strMeasures[index] }} </span>
        </li>
      </ul>
    </div>
    <div>
      <h3>Intrucciones:</h3>
      <p>{{ cocktail.strInstructions }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 30px;
  border-top: 5px solid #ffc300;
  border-bottom: 5px solid #ffc300;
  box-shadow: #00000082 0 15px 30px;
}

h1 {
  font-size: 4rem;
  color: #FFC300;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  color: #FFC300;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

h1,
h2,
h3 {
  text-align: center;
}

picture {
  width: 20rem;
  height: 15rem;
}

img {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
  text-align: center;
}

p {
  text-indent: 15px;
}
</style>
