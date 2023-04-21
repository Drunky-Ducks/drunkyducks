<script>
  export default {
  }
</script>

<template>
  <div class="error-container">
    <h1>Error 404</h1>
    <h2>Página no encontrada</h2>
    <img @click="squawk" class="gif-error" src="/media/duck.gif" alt="duck gif">
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1, h2 {
  text-align: center;
}

h1 {
  color: var(--clr-secondary);
  font-size: 3rem;
}

h2 {
  color: var(--clr-primary);
}

img {
  width: 80%;
  max-width: 300px;
}
</style>
