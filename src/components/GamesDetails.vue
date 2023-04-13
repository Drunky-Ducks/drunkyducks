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
      game: Object, // Se espera que game sea un objeto con las propiedades title, description y photo
    },
  };
  </script>
  
  <style>
  .game-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 600px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
   margin: 50px;
   border-bottom: 5px solid #ffc300;
   border-top: 5px solid #ffc300;
}
    
  
  
  .game-card img {
    width: 100%;
    height: 50%;
object-fit: contain;   
  }
  
  .game-card h2 {
    color: #40bfc1;;
    font-size: 24px;
    margin-bottom: 10px;
  
    margin-top: 10px;
  }
  
  .game-card p {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  