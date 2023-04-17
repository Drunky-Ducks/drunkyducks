<script>
import cocktails from '../services/cocktails.json'

import SearchCocktails from '../components/SearchCocktails.vue';
import CardMinimal from '../components/CardMinimal.vue';
import NotFound from '../components/NotFound.vue';

export default {
  name: "SearchView",
  data() {
    return {
      searchOcurrence: []
    }
  },
  components: {
    SearchCocktails, CardMinimal, NotFound
  },
  beforeMount() {
    for(let i = 0; i < 10; i++) {
      this.searchOcurrence.push(cocktails.drinks[i])
    }
  },
  computed: {
    getOcurrence() {
      return this.searchOcurrence
    }
  },
  methods: {
    fillResult(result) {
      this.searchOcurrence = result
    }
  }
}
</script>

<template>
  <div>
    <SearchCocktails @fillResult="fillResult"></SearchCocktails>
    <div class="container">
      <div class="tittle animate__animated animate__fadeInDown animate__delay-10">CÓCTELES</div>
      <div class="list">
        <NotFound v-if="!searchOcurrence.length"></NotFound>
        <CardMinimal v-for="(value, index) in searchOcurrence" :key="index" :cocktail="value"></CardMinimal>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 10px 50px;
}

.tittle {
  color: #ffc300;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
}

.list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  flex: 1;
}

.tag {
  height: 400px;
  width: 90%;
  min-width: 200px;
  max-width: 300px;
  background-color: #bbb5b5;
  text-align: center;
  box-shadow: rgb(0 0 0 / 50.8%) 0 10px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 23%;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 90px;
  height: 100%;
}
</style>
