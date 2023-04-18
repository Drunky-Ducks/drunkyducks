<script>
export default {
  name: 'CocktailDetails',
  props: {
    cocktail: Object
  },
  methods: {
    getAlt: function () {
      return `cocktail ${this.cocktail.strDrink.toLowerCase()} image`
    }
  }
}
</script>

<template>
  <div class="container">
    <picture>
      <img :src="cocktail.strDrinkThumb" :alt="getAlt()" />
    </picture>
    <div class="info-cocktail">
      <div class="drink">
        <h1>{{ cocktail.strDrink }}</h1>
        <h2>{{ cocktail.strAlcoholic }}</h2>
      </div>
      <div class="ingredients-container">
        <h3>Ingredientes</h3>
        <ul class="ingredients">
          <li v-for="(value, index) in cocktail.strIngredients" :key="index">
            {{ value }}
            <span v-if="cocktail.strMeasures[index]"> - {{ cocktail.strMeasures[index] }} </span>
          </li>
        </ul>
      </div>
      <div class="instructions">
        <h3>Instrucciones</h3>
        <p>{{ cocktail.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 3px solid #40bfc1;
  border-bottom: 3px solid #ffc300;
  box-shadow: #00000082 0 15px 30px;
  padding: 3rem 0;
}

h1 {
  font-size: 3.5rem;
  color: #ffc300;
  margin-bottom: 10px;
  font-family: DynaPuff-Regular;
}

h2 {
  font-size: 1.3rem;
}

h3 {
  color: #40bfc1;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-family: DynaPuff-Regular;
}

h1,
h2,
h3 {
  text-align: center;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.64);
}

ul {
  list-style: none;
  text-align: center;
}

p {
  text-align: center;
}
.info-cocktail {
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  gap: 2rem;
}

@media screen and (min-width: 1000px) {
  .container {
    justify-content: center;
    width: 80%;
    min-height: 30rem;
  }

  picture {
    width: 30%;
  }
  .info-cocktail {
    width: 50%;
  }
}

@media screen and (max-width: 999px) {
  .container {
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 3rem;
  }
  picture {
    width: 70%;
  }
}
</style>
