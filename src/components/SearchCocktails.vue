<script>
export default {
  name: 'SeacrhCocktails',
  props: {
    cocktail: String
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    nameCocktails({data}) {
      return data.filter((nameCocktail) => {
        return nameCocktail.strDrink.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<template>
  <div class="search-container">
    <input type="search" v-model="search" placeholder="Mojito" />
  </div>
</template>

<style></style>
