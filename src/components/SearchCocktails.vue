<script>
import cocktails from "../services/cocktails.json"

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
  methods: {
    searchCocktail({ target }) {
      const result = []

      const cocktail = target.value.toLowerCase()

      for (const nameCocktail of cocktails.drinks) {
        const name = nameCocktail.strDrink.toLowerCase();
        if (name.startsWith(cocktail)) {
          result.push(nameCocktail)
        }
      }

      this.$emit("fillResult", result)
    }
  }
}
</script>

<template>
  <div class="search-container">
    <form class="search-form">
      <input class="search-input" type="search" @input="searchCocktail" placeholder="Ej: Mojito" autocomplete="off" />
    </form>
  </div>
</template>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  padding: 20px 10px;
}

.search-input {
  width: 80%;
  max-width: 800px;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid rgb(164 164 163);
  border-radius: 20px;
  font-size: 1.2rem;
  outline: none;
  background-color: #bbb5b5;
}
</style>
