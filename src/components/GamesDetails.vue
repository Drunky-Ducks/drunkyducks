<template>
  <div class="game-card">
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
  height: 600px;
  margin: 10px;
  padding: 10px 20px;
  margin: 50px;
  border-top: 5px inset #40bfc1;
  border-right: 5px inset #40bfc1;
  border-left: 5px outset #ffc300;
  border-bottom: 5px outset #ffc300;
  box-shadow: #00000082 0 15px 30px;
}

.game-card img {
  width: 100%;
  height: 50%;
  object-fit: contain;
}

.game-card h2 {
  color: #40bfc1;
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
