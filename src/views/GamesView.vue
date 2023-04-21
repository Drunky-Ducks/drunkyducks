<template>
    <div class="title">
        <h1>LOS MEJORES JUEGOS PARA BEBER</h1>

    </div>

    <div class="games-container">
      <game-details
        v-for="(game, index) in games"
        :key="index"
        :game="game"
      ></game-details>
    </div>
  </template>

  <script>
  import GameDetails from "../components/GamesDetails.vue";
  import 'animate.css';
  export default {
    components: {
      GameDetails, // Registramos el componente GameDetails en esta vista
    },
    data() {
      return {
        games: [
          {
            title: "Embudo",
            photo: "https://juegosdebeber.net/wp-content/uploads/2019/06/juego-de-beber-el-embudo.jpg",
            description: "Se necesita un objeto blando y resistente para cada persona menos una. Se colocan en una fila y los jugadores en otra fila perpendicular, dejando un espacio entre ellos. Al contar hasta 3, los jugadores corren para tomar un objeto, lo que puede provocar choques. La persona que no consigue un objeto debe beber. "
          },
          {
            title: "Juego de la pinza",
            description: "Lo primero de todo es conseguir una pinza. Esta pinza tendrá que ir siendo colgada de tus compañeros  a lo largo de la noche en un sitio visible. La versión light es que al finalizar la noche quien la tenga bebe 2/3 chupitos, la hardcore es que cada vez que te la pongan bebes. ¡Tu decides!",
            photo: "https://juegosdebeber.net/wp-content/uploads/2019/06/la-pinza-juego-de-beber.jpg",
          },
          {
            title: "El chupito malito",
            description: "Es un juego en el que los jugadores tienen que adivinar quién bebió un chupito de Tequila entre varios vasos de agua. Si adivinan, los demás beben; si no, el espectador bebe",
            photo: "https://juegosdebeber.net/wp-content/uploads/2019/06/juego-el-chupito-beber.jpg",
          },
          {
            title: "Tomatito",
            description: "Los jugadores se sientan en círculo y pasan un objeto  llamado tomatito de un jugador a otro. La persona con el tomatito puede abofetear al de al lado y  los demás jugadores pueden defenderse cubriendo solo la mejilla más cercana. Si alguien se equivoca, puede ser abofeteado.El que tenga  la cara más roja al final bebe.",
            photo: "http://juegosdebeber.net/wp-content/uploads/2019/06/tomatito-juego.jpg  ",
          },
          {
            title: "Foto Reto",
            description: "En este juego se necesita un smartphone con temporizador. Los jugadores activan el temporizador y, al comenzar la foto, dicen en voz alta un reto. Quien logra cumplir el challenge en la foto gana, y se puede tratar de obstaculizar a los demás jugadores. Si alguien no cumple el reto, debe beber.",
            photo: "https://juegosdebeber.net/wp-content/uploads/2019/06/juego-de-beber-fotos.jpg",
          },



        ],
      };
    },
  };
  </script>

  <style scoped>
    h1 {
        text-align: center;
    }

  .games-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
