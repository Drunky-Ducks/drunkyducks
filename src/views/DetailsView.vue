<script>
  import cocktails from '../services/cocktails.json'
  import CocktailDetails from '../components/CocktailDetails.vue';

  export default {
    name: "DetailsView",
    components: {
      CocktailDetails
    },
    data() {
      return {
        cocktail: {}
      }
    },
    beforeMount() {
      const cocktail = this.$route.params.id
      console.log(cocktail);
      for(const data of cocktails.drinks) {
        if(data.strDrink === cocktail) {
          this.cocktail = data
        }
      }
    }
  }
</script>

<template>
  <div class="container">
    <CocktailDetails :cocktail="cocktail"></CocktailDetails>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
