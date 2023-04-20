<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'CardMinimal',
  components: {
    RouterLink
  },
  props: {
    cocktail: Object
  },
  methods: {
    getAlt: function () {
      return `cocktail ${this.cocktail.strDrink.toLowerCase()} image`
    },
    goDetails() { }
  }
}
</script>

<template>
  <div class="container">
    <RouterLink class="card-minimal" :to="`/detalles/${cocktail.strDrink}`">
      <img :src="cocktail.strDrinkThumb" :alt="getAlt()" />
      <div class="info">
        <h1>{{ cocktail.strDrink }}</h1>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  text-align: center;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
}

img {
  position: relative;
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 10px 10px 0 0;
  z-index: 1;
  margin-top: 5rem;
  box-shadow: 1px 3px 29px 2px rgba(0, 0, 0, 0.66);
  border-top: var(--clr-primary) 5px inset;
  border-right: var(--clr-primary) 5px inset;
  border-left: var(--clr-primary) 5px inset;
  object-fit: cover;
}

.info {
  width: 80%;
  background: #202124;
  height: 8rem;
  color: var(--clr-primary);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  box-shadow: 1px 3px 29px 2px rgba(0, 0, 0, 0.66);
  border-bottom: var(--clr-secondary) 5px outset;
  border-right: var(--clr-secondary) 5px outset;
  border-left: var(--clr-secondary) 5px outset;
}

h1 {
  cursor: pointer;
}

@media screen and (min-width: 900px) {
  .card-minimal {
    transition: all 0.5s ease-in-out;
  }

  .card-minimal:hover {
    transform: scale(1.1);
  }
}
</style>
