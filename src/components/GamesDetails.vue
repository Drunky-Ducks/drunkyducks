<template>
  <div class="game-card animate__animated animate__fadeInDown animate__delay-10">
    <img :src="game.photo" alt="game-title" />
    <h2>{{ game.title }}</h2>
    <p>{{ game.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    game: Object // Se espera que game sea un objeto con las propiedades title, description y photo
  }
}
</script>

<style>
.game-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  min-height: 600px;
  margin: 10px;
  padding: 10px 20px;
  margin: 50px;
  border-top: 5px inset var(--clr-secondary);
  border-right: 5px inset var(--clr-secondary);
  border-left: 5px outset var(--clr-primary);
  border-bottom: 5px outset var(--clr-primary);
  box-shadow: #00000082 0 15px 30px;
}

.game-card img {
  width: 100%;
  height: 50%;
  object-fit: contain;
}

.game-card h2 {
  color: var(--clr-secondary);
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: DynaPuff-Regular;
  margin-top: 10px;
}

.game-card p {
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
}
</style>
