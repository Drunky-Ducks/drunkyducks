<script>
import cocktails from '../services/cocktails.json'
import CocktailDetails from '../components/CocktailDetails.vue';
import NotFound from '../components/NotFound.vue';

export default {
  name: "DetailsView",
  components: {
    CocktailDetails, NotFound
  },
  data() {
    return {
      cocktail: {}
    }
  },
  beforeMount() {
    const cocktail = this.$route.params.id
    for (const data of cocktails.drinks) {
      if (data.strDrink === cocktail) {
        this.cocktail = data
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <CocktailDetails v-if="Object.entries(cocktail).length" :cocktail="cocktail"></CocktailDetails>
    <NotFound v-else></NotFound>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
