<script>
import cocktails from '../services/cocktails.json'
// eslint-disable-next-line no-unused-vars
import CocktailDetails from '../components/CocktailDetails.vue';
import Swiper from '../components/Swiper.vue';
// eslint-disable-next-line no-unused-vars
import Swipercss from "../assets/swiper.css";
import 'swiper/swiper-bundle.css';


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
  <div class="container">
    <div class="title">
      <Swiper title="Cocteles Clasicos"></Swiper>
    </div>
    <div class="cocktails">
      <Swiper :cocktails="this.cocktails.drinks.filter(cocktail => cocktail.strClassic)"></Swiper>
    </div>
  </div>
  <div class="container">
    <div class="title">
      <Swiper title="Cocteles Sin Alcohol"></Swiper>
    </div>
    <div class="cocktails">
      <Swiper :cocktails="this.cocktails.drinks.filter(cocktail => cocktail.strNoAlcoholic)"></Swiper>
    </div>
  </div>
  <div class="container">
    <div class="title">
      <Swiper title="Cocteles Fuertes"></Swiper>
    </div>
    <div class="cocktails">
      <Swiper :cocktails="this.cocktails.drinks.filter(cocktail => cocktail.strHardDrink)"></Swiper>
    </div>
  </div>
</template>

<style>
</style>
