<script>
export default {
  name: "NotFound",
  data() {
    return {

    };
  },
  methods: {
    squawk() {
      const squawk = new Audio("/audio/squawk-duck.mp3");
      squawk.play();
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="error-container">
      <div class="error">Cóctel no encontrado</div>
      <img @click="squawk" class="gif-error" src="/media/duck.gif" alt="duck gif">
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error {
  color: var(--clr-primary);
  font-size: 2rem;
  text-align: center;
}

.gif-error {
  width: 80%;
  max-width: 300px;
}
</style>
