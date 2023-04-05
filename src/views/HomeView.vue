<script>
import cocktails from '../services/cocktails.json'
import CocktailDetails from '../components/CocktailDetails.vue';
import Swiper from '../components/Swiper.vue';

export default {
  name: "HomeView",
  components: {
    Swiper
  }, beforeMount() {

  }, data() {
    return {
      cocktails
    }
  }
}
</script>

<template>
  <Swiper title="pukytuki" :cocktails="this.cocktails.drinks.filter(cocktail => cocktail.strClassic)"></Swiper>
  <Swiper title="pukytuki2" :cocktails="this.cocktails.drinks.filter(cocktail => cocktail.str)"></Swiper>
  <Swiper title="pukytuki3" :cocktails="this.cocktails.drinks.filter(cocktail => cocktail.str)"></Swiper>
  <!-- FALTA LA URL DEL STR LO QUE -->
</template>

<style scoped>
</style>
