<script>
import cocktails from "../services/cocktails.json"
import SearchIcon from "./Icons/SearchIcon.vue"

export default {
    name: "SeacrhCocktails",
    props: {
        cocktail: String
    },
    data() {
        return {
            search: ""
        };
    },
    methods: {
        searchCocktail({ target }) {
            let result = [];
            if (target.name.value === "") {
                result = "";
            }
            else {
                const cocktail = target.name.value.toLowerCase();
                for (const nameCocktail of cocktails.drinks) {
                    const name = nameCocktail.strDrink.toLowerCase();
                    if (name.startsWith(cocktail)) {
                        result.push(nameCocktail);
                    }
                }
            }
            this.$emit("fillResult", result);
        }
    },
    components: { SearchIcon }
}
</script>

<template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="searchCocktail">
      <div class="input-container">
        <input id="name" class="search-input" type="search" placeholder="Ej: Mojito" autocomplete="off" />
        <button type="submit" class="submit-button"><SearchIcon></SearchIcon></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 10px;
}

.input-container {
  width: 80%;
  max-width: 800px;
  display: flex;
  gap: 20px;
}

.search-input {
  flex: 1;
  height: 3.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 2px solid rgb(164 164 163);
  border-radius: 20px;
  font-size: 1.2rem;
  outline: none;
  background-color: #bbb5b5;
}

.submit-button {
  padding: 10px;
  border-radius: 50%;
  font-size: 1.2rem;
  background-color: #222;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  min-height: 50px;
  min-width: 50px;
}

.submit-button svg {
  width: 90%;
  height: 90%;
  color: var(--clr-primary);
}

.submit-button:hover {
  background-color: #454545;
}

@media screen and (max-width: 576px) {
  .search-input {
    max-width: 80%;
  }
}
</style>
